import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const FarmerServiceEnquiryForm = () => {
  // State for chat messages
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your agricultural service assistant. How can I help you with your farming needs today? You can ask about any of our services or describe your farm situation for personalized recommendations.'
    }
  ]);
  
  // State for user input
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // State for farm context (collected over time through conversation)
  const [farmContext, setFarmContext] = useState({
    area: null,
    cropType: '',
    soilType: '',
    irrigationSystem: '',
    selectedServices: [],
    requestedServiceDate: null
  });
  
  // Ref for chat container to auto-scroll
  const chatContainerRef = useRef(null);
  
  // Configuration for the Python API
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  
  // Reference data for services
  const services = [
    { id: 'soil-testing', name: 'Soil Testing', baseCost: 1200, costPerAcre: 0, baseTime: 2, timePerAcre: 0, maxDailyAcreage: 999, description: 'Comprehensive soil analysis to identify nutrient levels, pH, and soil composition' },
    { id: 'drone-service', name: 'Drone Service', baseCost: 2500, costPerAcre: 150, baseTime: 1, timePerAcre: 0.2, maxDailyAcreage: 50, description: 'Aerial imaging and mapping of your farm to identify issues not visible from the ground' },
    { id: 'irrigation-services', name: 'Irrigation Services', baseCost: 1500, costPerAcre: 200, baseTime: 3, timePerAcre: 0.3, maxDailyAcreage: 5, description: 'Design and implementation of efficient irrigation systems tailored to your crops and soil' },
    { id: 'pest-monitoring', name: 'Pest and Disease Monitoring', baseCost: 800, costPerAcre: 100, baseTime: 1, timePerAcre: 0.5, maxDailyAcreage: 20, description: 'Regular monitoring and early detection of pests and diseases affecting your crops' },
    { id: 'fertilization-seeds', name: 'Fertilization & Seeds Services', baseCost: 1000, costPerAcre: 300, baseTime: 2, timePerAcre: 0.7, maxDailyAcreage: 15, description: 'Custom fertilization plans and high-quality seed selection for optimal yields' },
    { id: 'harvest-planning', name: 'Harvest Planning', baseCost: 2000, costPerAcre: 400, baseTime: 2, timePerAcre: 0.5, maxDailyAcreage: 10, description: 'Planning and equipment rental for efficient harvest operations' },
    { id: 'crop-health', name: 'Crop Health Monitoring', baseCost: 900, costPerAcre: 120, baseTime: 1, timePerAcre: 0.3, maxDailyAcreage: 25, description: 'Regular assessment of crop health and growth to prevent yield loss' },
    { id: 'weed-control', name: 'Weed Control', baseCost: 700, costPerAcre: 250, baseTime: 1, timePerAcre: 0.6, maxDailyAcreage: 12, description: 'Integrated weed management strategies to protect your crops' },
    { id: 'crop-rotation', name: 'Crop Rotation Planning', baseCost: 1500, costPerAcre: 0, baseTime: 3, timePerAcre: 0, maxDailyAcreage: 999, description: 'Strategic planning of crop sequences to improve soil health and reduce pest pressure' },
    { id: 'market-access', name: 'Market Access & Sales Support', baseCost: 2200, costPerAcre: 0, baseTime: 4, timePerAcre: 0, maxDailyAcreage: 999, description: 'Connecting you with buyers and supporting your agricultural product marketing' }
  ];
  
  // Auto-scroll to bottom of chat on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Handle service selection
  const toggleService = (serviceId) => {
    setFarmContext(prev => {
      const updatedServices = prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      
      return {
        ...prev,
        selectedServices: updatedServices
      };
    });
  };

  // Check if a service is available on a given date
  const checkDateAvailability = (serviceId, date) => {
    // For demo purposes:
    // - soil-testing: available on days 1, 5, 10, 15, 20, 25, 30
    // - drone-service: available on days 2, 7, 12, 17, 22, 27
    // - fertilization-seeds: available on days 3, 8, 13, 18, 23, 28
    // - all other services: available on all days
    
    const day = parseInt(date.split('-')[2], 10);
    
    if (serviceId === 'soil-testing') {
      return [1, 5, 10, 15, 20, 25, 30].includes(day);
    } else if (serviceId === 'drone-service') {
      return [2, 7, 12, 17, 22, 27].includes(day);
    } else if (serviceId === 'fertilization-seeds') {
      return [3, 8, 13, 18, 23, 28].includes(day);
    }
    
    // Default: available
    return true;
  };

  // Get alternative dates for a service
  const getAlternativeDates = (serviceId, date, count) => {
    const alternatives = [];
    const dateObj = new Date(date);
    
    // Get available days for the service
    let availableDays = [];
    if (serviceId === 'soil-testing') {
      availableDays = [1, 5, 10, 15, 20, 25, 30];
    } else if (serviceId === 'drone-service') {
      availableDays = [2, 7, 12, 17, 22, 27];
    } else if (serviceId === 'fertilization-seeds') {
      availableDays = [3, 8, 13, 18, 23, 28];
    } else {
      // For other services, all days are available, so no need for alternatives
      return alternatives;
    }
    
    // Find next available days
    let testDate = new Date(dateObj);
    while (alternatives.length < count) {
      testDate.setDate(testDate.getDate() + 1);
      const day = testDate.getDate();
      
      if (availableDays.includes(day)) {
        alternatives.push(
          `${testDate.getFullYear()}-${String(testDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        );
      }
    }
    
    return alternatives;
  };
  
  // Process user message and generate response
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    
    // Show typing indicator
    setIsLoading(true);
    
    try {
      // In production, call your Gemma LLM API here
      const response = await generateResponse(userMessage);
      
      // Add assistant response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error processing your request. Please try again or contact customer support for assistance.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Generate response using client-side logic or API calls as needed
  const generateResponse = async (userMessage) => {
    // Simulate API delay for demo purposes
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const lowerMsg = userMessage.toLowerCase();
    
    // Parse service, acreage, and date information directly from the query
    const queryInfo = extractServiceAndAreaFromQuery(userMessage);
    
    if (queryInfo.service && queryInfo.area) {
      // If we have both service and area in the query, generate a specific response
      return generateServiceSpecificResponse(queryInfo.service, queryInfo.area, queryInfo.date);
    } else if (queryInfo.service) {
      // If we only have service info, use the general farm context area if available
      return generateServiceSpecificResponse(queryInfo.service, farmContext.area, queryInfo.date);
    }
    
    // Handle cost questions
    if (lowerMsg.includes('cost') || lowerMsg.includes('price') || lowerMsg.includes('pricing')) {
      return generateCostEstimate();
    }
    
    // Handle recommendation requests
    if (lowerMsg.includes('recommend') || lowerMsg.includes('suggestion') || lowerMsg.includes('what service') || lowerMsg.includes('which service')) {
      return generateRecommendation();
    }
    
    // Handle date availability questions
    if ((lowerMsg.includes('date') || lowerMsg.includes('available') || lowerMsg.includes('schedule')) && 
        farmContext.requestedServiceDate && farmContext.selectedServices.length > 0) {
      return generateDateAvailabilityResponse();
    }
    
    // Default response for other queries
    return generateDefaultResponse(userMessage);
  };
  
  // Extract service, area, and date information from a user query
  const extractServiceAndAreaFromQuery = (query) => {
    const lowerQuery = query.toLowerCase();
    let extractedService = null;
    let extractedArea = null;
    let extractedDate = null;
    
    // Check for service mentions - improved to handle variations
    for (const service of services) {
      const serviceId = service.id.toLowerCase().replace(/-/g, ' ');
      const serviceName = service.name.toLowerCase();
      
      if (lowerQuery.includes(serviceId) || 
          lowerQuery.includes(serviceName) ||
          lowerQuery.includes(serviceId.replace('services', 'service'))) {
        extractedService = service;
        break;
      }
    }
    
    // Check for area mentions - looking for patterns like "5 acres" or "2 acre"
    const areaMatch = lowerQuery.match(/(\d+(\.\d+)?)\s*(acre|acres)/);
    if (areaMatch) {
      extractedArea = parseFloat(areaMatch[1]);
      
      // Update farm context with this area
      setFarmContext(prev => ({ ...prev, area: extractedArea }));
    }
    
    // Check for date mentions - multiple formats
    // Format: DD/MM/YYYY
    const dateMatch1 = lowerQuery.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (dateMatch1) {
      extractedDate = `${dateMatch1[3]}-${dateMatch1[2].padStart(2, '0')}-${dateMatch1[1].padStart(2, '0')}`;
    }
    
    // Format: YYYY-MM-DD
    const dateMatch2 = lowerQuery.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (dateMatch2) {
      extractedDate = `${dateMatch2[1]}-${dateMatch2[2].padStart(2, '0')}-${dateMatch2[3].padStart(2, '0')}`;
    }
    
    // Update farm context with date if found
    if (extractedDate) {
      setFarmContext(prev => ({ ...prev, requestedServiceDate: extractedDate }));
    }
    
    return {
      service: extractedService,
      area: extractedArea,
      date: extractedDate
    };
  };
  
  // Generate a service-specific response with accurate area information
  const generateServiceSpecificResponse = (service, area, date) => {
    // Start with service info
    let response = `# ${service.name}\n\n${service.description}\n\n`;
    
    // Add pricing information
    response += `## Pricing\n`;
    response += `* Base cost: ₹${service.baseCost.toLocaleString()}\n`;
    response += `* Additional cost per acre: ₹${service.costPerAcre.toLocaleString()}\n`;
    
    // If area is provided, add specific cost for that area
    if (area) {
      const totalCost = service.baseCost + (service.costPerAcre * area);
      response += `* Estimated cost for your ${area} acre farm: ₹${totalCost.toLocaleString()}\n`;
    }
    
    // Add timeline information
    response += `\n## Timeline\n`;
    response += `* Base time: ${service.baseTime} days\n`;
    response += `* Additional time per acre: ${service.timePerAcre} days\n`;
    
    // If area is provided, add specific completion time for that area
    if (area) {
      const totalTime = service.baseTime + (service.timePerAcre * area);
      response += `* Estimated completion time for your ${area} acre farm: ${totalTime.toFixed(1)} days\n`;
    }
    
    // Add date availability information if a date was provided
    if (date) {
      // Format date for display (YYYY-MM-DD to DD/MM/YYYY)
      const dateParts = date.split('-');
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      
      // Check availability
      const isAvailable = checkDateAvailability(service.id, date);
      
      response += `\n## Service Date\n`;
      response += `* Requested date: ${formattedDate}\n`;
      
      if (isAvailable) {
        response += `* Status: **Available**\n`;
        response += `* We can schedule your service for the requested date.\n`;
      } else {
        // Get alternative dates
        const alternatives = getAlternativeDates(service.id, date, 3);
        
        response += `* Status: **Not Available**\n`;
        response += `* Unfortunately, this service is not available on your requested date.\n`;
        
        if (alternatives.length > 0) {
          response += `* Alternative dates:\n`;
          
          alternatives.forEach(alt => {
            const altParts = alt.split('-');
            const formattedAlt = `${altParts[2]}/${altParts[1]}/${altParts[0]}`;
            response += `  - ${formattedAlt}\n`;
          });
        }
      }
    }
    
    // Add closing question
    response += `\nWould you like to know more about any other services, or should we add ${service.name} to your selected services?`;
    
    return response;
  };
  
  // Generate date availability response for currently selected services
  const generateDateAvailabilityResponse = () => {
    if (!farmContext.requestedServiceDate) {
      return "Please specify a date you're interested in for service scheduling.";
    }
    
    if (farmContext.selectedServices.length === 0) {
      return "Please select one or more services first to check date availability.";
    }
    
    const date = farmContext.requestedServiceDate;
    const dateParts = date.split('-');
    const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    
    let response = `# Date Availability for ${formattedDate}\n\n`;
    
    // Check availability for each selected service
    const selectedServices = services.filter(service => farmContext.selectedServices.includes(service.id));
    
    let allAvailable = true;
    let servicesReport = '';
    
    selectedServices.forEach(service => {
      const isAvailable = checkDateAvailability(service.id, date);
      
      if (!isAvailable) {
        allAvailable = false;
      }
      
      servicesReport += `## ${service.name}\n`;
      servicesReport += `* Status: **${isAvailable ? 'Available' : 'Not Available'}**\n`;
      
      if (!isAvailable) {
        const alternatives = getAlternativeDates(service.id, date, 3);
        
        if (alternatives.length > 0) {
          servicesReport += `* Alternative dates:\n`;
          
          alternatives.forEach(alt => {
            const altParts = alt.split('-');
            const formattedAlt = `${altParts[2]}/${altParts[1]}/${altParts[0]}`;
            servicesReport += `  - ${formattedAlt}\n`;
          });
        }
      }
      
      servicesReport += '\n';
    });
    
    if (allAvailable) {
      response += `All selected services are available on ${formattedDate}.\n\n`;
    } else {
      response += `Some services are not available on your requested date. Please see details below.\n\n`;
    }
    
    response += servicesReport;
    
    response += `Would you like to proceed with booking the available services or select alternative dates?`;
    
    return response;
  };
  
  // Generate cost estimate based on selected services and farm context
  const generateCostEstimate = () => {
    if (farmContext.selectedServices.length === 0) {
      return "To provide a cost estimate, please select one or more services from the panel on the right, or tell me which services you're interested in.";
    }
    
    if (!farmContext.area) {
      return "To calculate an accurate cost estimate, I need to know your farm size. Please tell me how many acres your farm is.";
    }
    
    let totalCost = 0;
    let totalTime = 0;
    let serviceDetails = '';
    
    const selectedServices = services.filter(service => farmContext.selectedServices.includes(service.id));
    
    selectedServices.forEach(service => {
      const serviceCost = service.baseCost + (service.costPerAcre * farmContext.area);
      const serviceTime = service.baseTime + (service.timePerAcre * farmContext.area);
      
      totalCost += serviceCost;
      totalTime += serviceTime;
      
      serviceDetails += `- **${service.name}**: ₹${serviceCost.toLocaleString()} (${serviceTime.toFixed(1)} days)\n`;
    });
    
    // Apply discount for multiple services
    let discountPercent = 0;
    if (selectedServices.length > 1) {
      discountPercent = Math.min(20, (selectedServices.length - 1) * 5);
      totalCost = totalCost * (1 - discountPercent/100);
    }
    
    let response = `# Cost Estimate for Your Farm
    
Based on your ${farmContext.area} acre farm${farmContext.cropType ? ` growing ${farmContext.cropType}` : ''}${farmContext.soilType ? ` with ${farmContext.soilType} soil` : ''}, here's your estimate for the selected services:

${serviceDetails}
Estimated completion time: ${totalTime.toFixed(1)} days

## Total Cost
₹${totalCost.toLocaleString()}`;

    if (discountPercent > 0) {
      response += `\n(Includes a ${discountPercent}% discount for booking multiple services)`;
    }
    
    // Add date information if available
    if (farmContext.requestedServiceDate) {
      const date = farmContext.requestedServiceDate;
      const dateParts = date.split('-');
      const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      
      response += `\n\n## Requested Service Date\n${formattedDate}`;
      
      // Check if all services are available on the requested date
      let allAvailable = true;
      selectedServices.forEach(service => {
        if (!checkDateAvailability(service.id, date)) {
          allAvailable = false;
        }
      });
      
      if (allAvailable) {
        response += `\nAll services are available on this date.`;
      } else {
        response += `\nSome services are not available on this date. Type "check availability" for details.`;
      }
    }
    
    response += `\n\nWould you like to add or remove any services from this estimate? Or would you like to proceed with booking these services?`;
    
    return response;
  };
  
  // Generate service recommendations based on farm context
  const generateRecommendation = () => {
    if (!farmContext.area && !farmContext.cropType && !farmContext.soilType) {
      return "To provide personalized service recommendations, I need more information about your farm. Please tell me about your farm size, crops, soil type, or specific challenges you're facing.";
    }
    
    let response = `# Recommended Services for Your Farm\n\n`;
    let recommendations = [];
    
    // Simple rule-based recommendations (in production, use your LLM)
    if (farmContext.cropType === 'rice' || farmContext.cropType === 'wheat') {
      recommendations.push({
        service: services.find(s => s.id === 'soil-testing'),
        reason: `essential for optimizing fertilizer application for ${farmContext.cropType} cultivation`
      });
    }
    
    if (farmContext.soilType === 'sandy') {
      recommendations.push({
        service: services.find(s => s.id === 'irrigation-services'),
        reason: 'sandy soils have poor water retention, making efficient irrigation crucial'
      });
    }
    
    if (farmContext.area && farmContext.area > 10) {
      recommendations.push({
        service: services.find(s => s.id === 'drone-service'),
        reason: 'larger farms benefit significantly from aerial monitoring to identify issues across the entire property'
      });
    }
    
    if (farmContext.cropType === 'vegetables' || farmContext.cropType === 'fruits' || farmContext.cropType === 'tomatoes' || farmContext.cropType === 'tomato') {
      recommendations.push({
        service: services.find(s => s.id === 'pest-monitoring'),
        reason: `high-value ${farmContext.cropType} crops are particularly susceptible to pest damage, making regular monitoring essential`
      });
    }
    
    if (recommendations.length === 0) {
      // Default recommendations if no specific matches
      recommendations = [
        {
          service: services.find(s => s.id === 'soil-testing'),
          reason: 'provides essential baseline information for all farming decisions'
        },
        {
          service: services.find(s => s.id === 'crop-health'),
          reason: 'helps prevent yield loss through early detection of problems'
        }
      ];
    }
    
    // Limit to top 3 recommendations
    recommendations = recommendations.slice(0, 3);
    
    recommendations.forEach(rec => {
      response += `## ${rec.service.name}\n`;
      response += `${rec.service.description}\n\n`;
      response += `**Why it's recommended**: ${rec.reason}\n\n`;
      response += `Base cost: ₹${rec.service.baseCost.toLocaleString()}`;
      if (farmContext.area) {
        const totalCost = rec.service.baseCost + (rec.service.costPerAcre * farmContext.area);
        response += ` | Estimated cost for your farm: ₹${totalCost.toLocaleString()}`;
      }
      response += '\n\n';
    });
    
    response += `Would you like more information about any of these services, or would you like to add them to your selected services?`;
    
    return response;
  };
  
  // Generate default response for general queries
  const generateDefaultResponse = (userMessage) => {
    // Extract any farm information from the message
    extractFarmInfoFromMessage(userMessage);
    
    return `Thank you for your message. Based on what you've shared${farmContext.area ? ` about your ${farmContext.area} acre farm` : ''}${farmContext.cropType ? ` growing ${farmContext.cropType}` : ''}${farmContext.soilType ? ` on ${farmContext.soilType} soil` : ''}, I can help with personalized agricultural service recommendations.

To give you the most relevant advice, please tell me more about:
1. Your farm size (in acres)
2. What crops you're growing or planning to grow
3. Any specific challenges you're facing (pests, irrigation, soil quality, etc.)
4. Any services you're particularly interested in

You can also select services from the panel to explore specific options.`;
  };
  
  // Extract farm information from a message
  const extractFarmInfoFromMessage = (message) => {
    const lowerMsg = message.toLowerCase();
    
    // Check for farm area mentions (e.g., "I have a 10 acre farm")
    const areaMatch = lowerMsg.match(/(\d+(\.\d+)?)\s*(acre|acres)/);
    if (areaMatch) {
      setFarmContext(prev => ({ ...prev, area: parseFloat(areaMatch[1]) }));
    }
    
    // Check for crop mentions - expanded to include more crops and handle variations
    const cropTypes = [
      'rice', 'wheat', 'corn', 'cotton', 'sugarcane', 'pulses', 
      'vegetables', 'fruits', 'tomato', 'tomatos', 'tomatoes', 
      'potato', 'potatoes', 'onion', 'onions', 'carrot', 'carrots'
    ];
    
    for (const crop of cropTypes) {
      if (lowerMsg.includes(crop)) {
        // Standardize some plurals
        let normalizedCrop = crop;
        if (crop === 'tomatos' || crop === 'tomatoes') normalizedCrop = 'tomato';
        if (crop === 'potatoes') normalizedCrop = 'potato';
        if (crop === 'onions') normalizedCrop = 'onion';
        if (crop === 'carrots') normalizedCrop = 'carrot';
        
        setFarmContext(prev => ({ ...prev, cropType: normalizedCrop }));
        break;
      }
    }
    
    // Check for soil type mentions
    const soilTypes = ['sandy', 'loamy', 'clay', 'silty', 'black soil', 'red soil'];
    for (const soil of soilTypes) {
      if (lowerMsg.includes(soil)) {
        setFarmContext(prev => ({ ...prev, soilType: soil }));
        break;
      }
    }
    
    // Check for irrigation mentions
    const irrigationSystems = ['drip', 'sprinkler', 'flood', 'furrow', 'basin'];
    for (const system of irrigationSystems) {
      if (lowerMsg.includes(system)) {
        setFarmContext(prev => ({ ...prev, irrigationSystem: system }));
        break;
      }
    }
    
    // Check for date mentions - multiple formats
    // Format: DD/MM/YYYY
    const dateMatch1 = lowerMsg.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (dateMatch1) {
      const extractedDate = `${dateMatch1[3]}-${dateMatch1[2].padStart(2, '0')}-${dateMatch1[1].padStart(2, '0')}`;
      setFarmContext(prev => ({ ...prev, requestedServiceDate: extractedDate }));
    }
    
    // Format: YYYY-MM-DD
    const dateMatch2 = lowerMsg.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (dateMatch2) {
      const extractedDate = `${dateMatch2[1]}-${dateMatch2[2].padStart(2, '0')}-${dateMatch2[3].padStart(2, '0')}`;
      setFarmContext(prev => ({ ...prev, requestedServiceDate: extractedDate }));
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen py-6 px-4">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Farmer Service Assistant</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div 
              ref={chatContainerRef}
              className="h-[500px] overflow-y-auto p-4 space-y-4"
            >
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user' 
                        ? 'bg-green-600 text-white rounded-tr-none' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <div className="prose prose-sm max-w-none">
                        <ReactMarkdown>
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p>{message.content}</p>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <div className="flex space-x-2">
                      
                      <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our services or describe your farm needs..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  disabled={isLoading}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          
          {/* Services Panel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-green-700 text-white">
              <h2 className="text-xl font-semibold">Our Services</h2>
              <p className="text-sm text-green-100">Select services to include in your inquiry</p>
            </div>
            
            <div className="p-4 h-[500px] overflow-y-auto">
              <div className="space-y-4">
                {services.map(service => (
                  <div 
                    key={service.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      farmContext.selectedServices.includes(service.id)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-200 hover:bg-green-50/50'
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <input
                          type="checkbox"
                          checked={farmContext.selectedServices.includes(service.id)}
                          onChange={() => {}}
                          className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">{service.name}</h3>
                        <p className="mt-1 text-xs text-gray-500 line-clamp-2">{service.description}</p>
                        <p className="mt-1 text-xs font-medium text-gray-900">
                          Base Cost: ₹{service.baseCost.toLocaleString()}
                          {service.costPerAcre > 0 && ` + ₹${service.costPerAcre}/acre`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Farm Context Summary */}
            <div className="border-t border-gray-200 p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Farm Profile</h3>
              <div className="text-xs text-gray-500">
                <p>Area: {farmContext.area ? `${farmContext.area} acres` : 'Not specified'}</p>
                <p>Crop: {farmContext.cropType || 'Not specified'}</p>
                <p>Soil: {farmContext.soilType || 'Not specified'}</p>
                <p>Irrigation: {farmContext.irrigationSystem || 'Not specified'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerServiceEnquiryForm;