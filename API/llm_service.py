from fastapi import FastAPI, HTTPException, Depends, Body
from pydantic import BaseModel, Field
from typing import List, Dict, Optional, Any
import os
from dotenv import load_dotenv
import json
import logging
from datetime import datetime, timedelta
import re
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("api.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="Farmer Service Advisor API with Gemma 2B",
    description="API for generating personalized farm service recommendations using Google Gemma 2B",
    version="1.0.0"
)

# Input models
class ServiceInfo(BaseModel):
    id: str
    name: str
    baseCost: float
    costPerAcre: float
    baseTime: float
    timePerAcre: float
    maxDailyAcreage: float
    # Added new field for service availability
    availableDates: Optional[List[str]] = []

class ServiceDateInfo(BaseModel):
    requestedDate: str
    isAvailable: bool
    alternativeDates: Optional[List[str]] = []

class EstimateResult(BaseModel):
    services: List[str]
    serviceIds: List[str]
    totalCost: float
    totalTime: float
    urgencyFee: float
    teamsRequired: int
    status: str
    notes: str
    targetDate: str
    area: float
    serviceDateInfo: Optional[ServiceDateInfo] = None

class FarmData(BaseModel):
    area: float
    targetDate: str
    services: List[str]
    cropType: Optional[str] = None
    soilType: Optional[str] = None
    irrigationSystem: Optional[str] = None
    additionalNotes: Optional[str] = None
    requestedServiceDate: Optional[str] = None  # New field for specific service date requests

class RecommendationRequest(BaseModel):
    formData: FarmData
    estimateResult: EstimateResult
    servicesList: List[ServiceInfo]
    model_params: Optional[Dict[str, Any]] = {
        "temperature": 0.7,
        "top_p": 0.9,
        "max_tokens": 2000
    }

class ChatMessage(BaseModel):
    message: str
    context: Optional[Dict[str, Any]] = {}

class ChatResponse(BaseModel):
    response: str
    extractedInfo: Optional[Dict[str, Any]] = {}

# Global variables for the model
model = None
tokenizer = None

# Model initialization function - called once at startup
def initialize_model():
    global model, tokenizer
    
    logger.info("Initializing Gemma 2B model...")
    
    try:
        # Use the instruction-tuned version for better response quality
        model_name = "google/gemma-2b-it"
        tokenizer = AutoTokenizer.from_pretrained(model_name)
        
        # Initialize model with appropriate datatype for your hardware
        # If you have GPU, use torch.float16. Otherwise, keep torch.float32
        device = "cuda" if torch.cuda.is_available() else "cpu"
        dtype = torch.float16 if device == "cuda" else torch.float32
        
        logger.info(f"Loading model on {device} with {dtype}")
        
        # Load the model with the appropriate configuration
        model = AutoModelForCausalLM.from_pretrained(
            model_name,
            torch_dtype=dtype,
            device_map=device
        )
        
        logger.info("Gemma 2B model successfully loaded")
        
    except Exception as e:
        logger.error(f"Failed to initialize model: {str(e)}", exc_info=True)
        raise RuntimeError(f"Model initialization failed: {str(e)}")

# Call initialization at startup
@app.on_event("startup")
async def startup_event():
    initialize_model()

# Function to create a prompt for the LLM - optimized for Gemma 2B
def create_gemma_prompt(form_data: FarmData, estimate_result: EstimateResult, services_list: List[ServiceInfo]):
    # Get service details for selected services
    selected_services = [s for s in services_list if s.id in form_data.services]
    selected_service_details = [{
        "name": service.name,
        "id": service.id,
        "baseCost": service.baseCost,
        "costPerAcre": service.costPerAcre,
        "totalCost": service.baseCost + (service.costPerAcre * form_data.area)
    } for service in selected_services]

    # Get service details for non-selected services (for recommendations)
    non_selected_services = [s for s in services_list if s.id not in form_data.services][:5]  # Only include top 5 to save tokens
    
    # Extract date information 
    date_info = ""
    if form_data.requestedServiceDate:
        # If there's a specific requested date
        date_info = f"- Requested service date: {form_data.requestedServiceDate}\n"
        
        # Add availability information if present
        if estimate_result.serviceDateInfo:
            date_info += f"- Service availability on requested date: {'Available' if estimate_result.serviceDateInfo.isAvailable else 'Not available'}\n"
            if not estimate_result.serviceDateInfo.isAvailable and estimate_result.serviceDateInfo.alternativeDates:
                date_info += "- Alternative dates:\n"
                for alt_date in estimate_result.serviceDateInfo.alternativeDates:
                    date_info += f"  * {alt_date}\n"
    
    # Create more concise and specific system prompt for Gemma 2B
    system_prompt = """
You are an agricultural expert helping farmers. Create a personalized recommendation letter with these sections:

1. GREETING: Brief, friendly greeting mentioning farm size and crop type
2. SERVICES: For each selected service, explain its benefits specifically for this farm
3. COSTS: Summarize costs, timing, and any special considerations
4. SCHEDULING: If a specific date was requested, address availability on that date or suggest alternatives
5. RECOMMENDATIONS: Suggest 1-2 additional complementary services
6. CLOSING: Brief, professional closing with next steps

Keep your response practical, focused on specific benefits for THIS farm. Use markdown formatting.

Key guidelines:
- Sandy soils need irrigation help
- Clay soils often need drainage
- Rice, vegetables are water-intensive
- Farms >10 acres benefit from precision agriculture
- Pest monitoring is vital for high-value crops
- Emphasize package discounts for multiple services
- If a requested date is unavailable, be clear about alternative options
"""

    # Create more structured and concise user message to save on token usage
    user_message = f"""
FARM DETAILS:
- Size: {form_data.area} acres
- Crop: {form_data.cropType or "Not specified"}
- Soil: {form_data.soilType or "Not specified"}
- Irrigation: {form_data.irrigationSystem or "Not specified"}
- Target Completion Date: {form_data.targetDate}
{date_info}- Notes: {form_data.additionalNotes or "None"}

SELECTED SERVICES:
{chr(10).join([f"- {service['name']} (₹{int(service['totalCost'])})" for service in selected_service_details])}

ESTIMATE SUMMARY:
- Total Cost: ₹{int(estimate_result.totalCost)}
- Completion Time: {estimate_result.totalTime} days
- Urgency Fee: ₹{int(estimate_result.urgencyFee)}
- Teams Required: {estimate_result.teamsRequired}
- Status: {estimate_result.status.upper()}

POSSIBLE RECOMMENDATIONS:
{chr(10).join([f"- {service.name}" for service in non_selected_services])}

Write a personalized recommendation letter for this farmer about their selected services.
"""

    return system_prompt, user_message

# Function to generate text with Gemma 2B
def generate_with_gemma(system_prompt, user_message, model_params):
    global model, tokenizer
    
    if not model or not tokenizer:
        raise RuntimeError("Model not initialized. Please restart the server.")
    
    try:
        # Format prompt in Gemma's expected instruction format
        combined_prompt = f"<start_of_turn>system\n{system_prompt}<end_of_turn>\n<start_of_turn>user\n{user_message}<end_of_turn>\n<start_of_turn>model\n"
        
        # Tokenize input
        inputs = tokenizer(combined_prompt, return_tensors="pt").to(model.device)
        
        # Extract parameters
        temperature = model_params.get("temperature", 0.7)
        top_p = model_params.get("top_p", 0.9)
        max_tokens = model_params.get("max_tokens", 2000)
        
        # Generate response
        with torch.no_grad():
            outputs = model.generate(
                inputs.input_ids,
                max_new_tokens=max_tokens,
                temperature=temperature,
                top_p=top_p,
                do_sample=True,
                pad_token_id=tokenizer.eos_token_id
            )
        
        # Decode and return response
        response = tokenizer.decode(outputs[0][inputs.input_ids.shape[1]:], skip_special_tokens=True)
        return response
        
    except Exception as e:
        logger.error(f"Error in text generation: {str(e)}", exc_info=True)
        raise RuntimeError(f"Text generation failed: {str(e)}")

# New function to extract date information from text
def extract_date_from_text(text):
    """Extract date information from user query text"""
    text = text.lower()
    
    # Format: 10th April 2025, April 10th 2025, 10 April 2025
    pattern1 = r"(\d+)(st|nd|rd|th)?\s*(of)?\s*(january|february|march|april|may|june|july|august|september|october|november|december)\s*,?\s*(\d{4})?"
    
    # Format: April 10, 2025
    pattern2 = r"(january|february|march|april|may|june|july|august|september|october|november|december)\s*(\d+)(st|nd|rd|th)?\s*,?\s*(\d{4})?"
    
    # Format: 10/04/2025, 10-04-2025, 10.04.2025
    pattern3 = r"(\d{1,2})[\/-\.](\d{1,2})[\/-\.](\d{2,4})"
    
    # Helper function to get month number
    def get_month_number(month_name):
        months = {
            "january": 1, "february": 2, "march": 3, "april": 4, "may": 5, "june": 6,
            "july": 7, "august": 8, "september": 9, "october": 10, "november": 11, "december": 12
        }
        return months.get(month_name.lower(), 1)
    
    # Try pattern 1
    match = re.search(pattern1, text)
    if match:
        day = int(match.group(1))
        month = get_month_number(match.group(4))
        year = int(match.group(5)) if match.group(5) else datetime.now().year
        return datetime(year, month, day).strftime("%Y-%m-%d")
    
    # Try pattern 2
    match = re.search(pattern2, text)
    if match:
        month = get_month_number(match.group(1))
        day = int(match.group(2))
        year = int(match.group(4)) if match.group(4) else datetime.now().year
        return datetime(year, month, day).strftime("%Y-%m-%d")
    
    # Try pattern 3
    match = re.search(pattern3, text)
    if match:
        day = int(match.group(1))
        month = int(match.group(2))
        year = int(match.group(3))
        
        # Handle 2-digit years
        if year < 100:
            year = 2000 + year if year < 50 else 1900 + year
        
        return datetime(year, month, day).strftime("%Y-%m-%d")
    
    # Relative dates
    if "tomorrow" in text:
        tomorrow = datetime.now() + timedelta(days=1)
        return tomorrow.strftime("%Y-%m-%d")
    
    if "next week" in text:
        next_week = datetime.now() + timedelta(days=7)
        return next_week.strftime("%Y-%m-%d")
    
    # "in X days" pattern
    match = re.search(r"in\s*(\d+)\s*days?", text)
    if match:
        days = int(match.group(1))
        future_date = datetime.now() + timedelta(days=days)
        return future_date.strftime("%Y-%m-%d")
    
    return None

# Function to check service availability for a given date
def check_service_availability(service_id, request_date, services_list):
    """Check if a service is available on the requested date and provide alternatives if not"""
    
    # Get the service details
    service = next((s for s in services_list if s.id == service_id), None)
    if not service:
        return None
    
    # In production, you would query your database here
    # For now, we'll use a simple approach based on day of month
    
    # Parse the requested date
    try:
        date_obj = datetime.strptime(request_date, "%Y-%m-%d")
        day_of_month = date_obj.day
        
        # Check availability - for this example, we'll assume:
        # - soil-testing: available on days 1, 5, 10, 15, 20, 25, 30
        # - drone-service: available on days 2, 7, 12, 17, 22, 27
        # - all other services: available on all days
        
        available_days = []
        if service_id == "soil-testing":
            available_days = [1, 5, 10, 15, 20, 25, 30]
        elif service_id == "drone-service":
            available_days = [2, 7, 12, 17, 22, 27]
        else:
            # All other services available any day
            return ServiceDateInfo(
                requestedDate=request_date,
                isAvailable=True,
                alternativeDates=[]
            )
        
        # Check if requested day is in available days
        is_available = day_of_month in available_days
        
        # If not available, find alternative dates
        alternative_dates = []
        if not is_available:
            current_date = date_obj
            count = 0
            
            # Find next 3 available dates
            while count < 3:
                current_date += timedelta(days=1)
                if current_date.day in available_days:
                    alternative_dates.append(current_date.strftime("%Y-%m-%d"))
                    count += 1
        
        return ServiceDateInfo(
            requestedDate=request_date,
            isAvailable=is_available,
            alternativeDates=alternative_dates
        )
        
    except Exception as e:
        logger.error(f"Error checking service availability: {str(e)}")
        return None

# New endpoint to handle chat messages with date extraction
@app.post("/chat", response_model=ChatResponse)
async def process_chat_message(chat_request: ChatMessage):
    try:
        message = chat_request.message
        
        # Extract information from the message
        extracted_info = {}
        
        # Look for date information
        extracted_date = extract_date_from_text(message)
        if extracted_date:
            extracted_info["requestedDate"] = extracted_date
        
        # Look for service mentions
        services = ["soil-testing", "drone-service", "irrigation-services", "pest-monitoring",
                    "fertilization-seeds", "harvest-planning", "crop-health", "weed-control",
                    "crop-rotation", "market-access"]
        
        for service in services:
            if service in message.lower() or service.replace("-", " ") in message.lower():
                extracted_info["service"] = service
                break
        
        # Look for area information
        area_match = re.search(r"(\d+(\.\d+)?)\s*acres?", message.lower())
        if area_match:
            extracted_info["area"] = float(area_match.group(1))
        
        # If we have both service and date, check availability
        if "service" in extracted_info and "requestedDate" in extracted_info:
            # Create a dummy services list for checking availability
            dummy_services = [
                ServiceInfo(id="soil-testing", name="Soil Testing", baseCost=1200, costPerAcre=0,
                          baseTime=2, timePerAcre=0, maxDailyAcreage=999),
                ServiceInfo(id="drone-service", name="Drone Service", baseCost=2500, costPerAcre=150,
                          baseTime=1, timePerAcre=0.2, maxDailyAcreage=50),
                # Add other services as needed
            ]
            
            availability = check_service_availability(
                extracted_info["service"],
                extracted_info["requestedDate"],
                dummy_services
            )
            
            if availability:
                extracted_info["availability"] = {
                    "isAvailable": availability.isAvailable,
                    "alternativeDates": availability.alternativeDates
                }
        
        # Generate a response based on extracted information
        response = generate_chat_response(message, extracted_info)
        
        return {
            "response": response,
            "extractedInfo": extracted_info
        }
    
    except Exception as e:
        logger.error(f"Error processing chat: {str(e)}", exc_info=True)
        return {
            "response": "I apologize, but I encountered an error processing your request. Please try again or contact customer support for assistance.",
            "extractedInfo": {}
        }

# Function to generate a chat response based on extracted information
def generate_chat_response(message, extracted_info):
    """Generate a response to the chat message based on extracted information"""
    
    # If we have service, date, and availability information
    if all(k in extracted_info for k in ["service", "requestedDate", "availability"]):
        service_name = extracted_info["service"].replace("-", " ").title()
        date_str = datetime.strptime(extracted_info["requestedDate"], "%Y-%m-%d").strftime("%B %d, %Y")
        
        if extracted_info["availability"]["isAvailable"]:
            return f"I've checked our schedule, and I can confirm that {service_name} is available on {date_str}. Would you like to proceed with booking this service? If you have any specific requirements or questions about the service, please let me know."
        else:
            alt_dates = [datetime.strptime(d, "%Y-%m-%d").strftime("%B %d, %Y") for d in extracted_info["availability"]["alternativeDates"]]
            alt_dates_str = ", ".join(alt_dates)
            
            return f"I'm sorry, but {service_name} is not available on {date_str}. However, we do have availability on the following dates: {alt_dates_str}. Would any of these alternatives work for you?"
    
    # If we have service and date but no availability info
    elif "service" in extracted_info and "requestedDate" in extracted_info:
        service_name = extracted_info["service"].replace("-", " ").title()
        date_str = datetime.strptime(extracted_info["requestedDate"], "%Y-%m-%d").strftime("%B %d, %Y")
        
        return f"I see you're interested in our {service_name} service on {date_str}. Let me check availability for that date. Is there anything specific you'd like to know about this service in the meantime?"
    
    # If we only have service information
    elif "service" in extracted_info:
        service_name = extracted_info["service"].replace("-", " ").title()
        return f"Our {service_name} service is a great choice! To provide you with accurate availability and pricing, could you please let me know when you'd like to schedule this service and how many acres your farm is?"
    
    # If we only have date information
    elif "requestedDate" in extracted_info:
        date_str = datetime.strptime(extracted_info["requestedDate"], "%Y-%m-%d").strftime("%B %d, %Y")
        return f"I see you're looking to schedule a service on {date_str}. Which specific service are you interested in?"
    
    # Default response if we couldn't extract specific information
    return "Thank you for your message. To better assist you with your agricultural needs, could you please provide more details about which service you're interested in and when you'd like to schedule it? Also, knowing your farm size would help us provide an accurate cost estimate."

# Enhance the template function to include date information
def enhance_with_templates(gemma_response, form_data, estimate_result):
    """Add templated elements to enhance Gemma's output where needed"""
    
    # If response seems too short, enhance with templates
    if len(gemma_response.split()) < 100:
        # Create a fallback templated greeting
        greeting = f"# Personalized Farm Service Recommendation\n\nDear Farmer,\n\nThank you for your inquiry about our agricultural services for your {form_data.area} acre farm"
        if form_data.cropType:
            greeting += f" growing {form_data.cropType}"
        if form_data.soilType:
            greeting += f" on {form_data.soilType} soil"
        greeting += ".\n\n"
        
        # Add date-specific information if available
        if form_data.requestedServiceDate and estimate_result.serviceDateInfo:
            date_str = datetime.strptime(form_data.requestedServiceDate, "%Y-%m-%d").strftime("%B %d, %Y")
            if estimate_result.serviceDateInfo.isAvailable:
                greeting += f"We're pleased to confirm that the requested service can be scheduled on {date_str} as requested.\n\n"
            else:
                greeting += f"Unfortunately, the service you requested is not available on {date_str}. "
                if estimate_result.serviceDateInfo.alternativeDates:
                    alt_dates = [datetime.strptime(d, "%Y-%m-%d").strftime("%B %d, %Y") for d in estimate_result.serviceDateInfo.alternativeDates[:3]]
                    greeting += f"However, we do have availability on the following dates: {', '.join(alt_dates)}.\n\n"
        
        # Create a fallback templated closing
        closing = f"\n\n## Next Steps\n\nTo proceed with these services, please contact us at 1800-FARM-HELP. Our team is ready to assist you in implementing these recommendations.\n\nWarm regards,\nAgriTech Services Team"
        
        # Combine with Gemma's content if it exists, otherwise use template
        if gemma_response.strip():
            enhanced_response = greeting + gemma_response + closing
        else:
            # Create a very basic templated response
            services_text = "\n".join([f"- {service}" for service in estimate_result.services])
            enhanced_response = f"{greeting}Based on your requirements, we recommend the following services:\n\n{services_text}\n\nTotal estimated cost: ₹{estimate_result.totalCost}\nEstimated completion time: {estimate_result.totalTime} days{closing}"
        
        return enhanced_response
    
    # If response seems complete, return as is
    return gemma_response

# Update the recommendation endpoint to handle date information
@app.post("/generate-recommendation", response_model=Dict[str, str])
async def generate_recommendation(request: RecommendationRequest = Body(...)):
    try:
        logger.info(f"Received recommendation request for farm of {request.formData.area} acres")
        
        # Check if there's date information in additionalNotes or elsewhere
        if not request.formData.requestedServiceDate and request.formData.additionalNotes:
            extracted_date = extract_date_from_text(request.formData.additionalNotes)
            if extracted_date:
                request.formData.requestedServiceDate = extracted_date
                
                # Check availability for the first service
                if request.formData.services:
                    service_id = request.formData.services[0]
                    availability = check_service_availability(
                        service_id,
                        extracted_date,
                        request.servicesList
                    )
                    
                    if availability and not request.estimateResult.serviceDateInfo:
                        request.estimateResult.serviceDateInfo = availability
        
        # Create prompts
        system_prompt, user_message = create_gemma_prompt(
            request.formData, 
            request.estimateResult,
            request.servicesList
        )
        
        # Generate recommendation with Gemma 2B
        raw_recommendation = generate_with_gemma(
            system_prompt, 
            user_message,
            request.model_params
        )
        
        # Enhance with templates if needed
        final_recommendation = enhance_with_templates(
            raw_recommendation,
            request.formData,
            request.estimateResult
        )
        
        logger.info(f"Successfully generated recommendation of {len(final_recommendation)} characters")
        
        return {"recommendation": final_recommendation}
        
    except Exception as e:
        logger.error(f"Error generating recommendation: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate recommendation: {str(e)}"
        )

# Endpoint to check service health and model status
@app.get("/health")
async def health_check():
    model_status = "loaded" if model and tokenizer else "not_loaded"
    
    return {
        "status": "healthy",
        "model_status": model_status,
        "device": "cuda" if torch.cuda.is_available() else "cpu",
        "timestamp": datetime.now().isoformat(),
        "version": "1.0.0"
    }

# Run the app with uvicorn if this file is executed directly
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)