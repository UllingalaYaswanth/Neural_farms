import { useState } from 'react';

const FarmerServiceEnquiryForm = () => {
  const [formData, setFormData] = useState({
    area: '',
    targetDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    services: []
  });

  const [result, setResult] = useState(null);

  const services = [
    { id: 'soil-testing', name: 'Soil Testing', baseCost: 1200, costPerAcre: 0, baseTime: 2, timePerAcre: 0, maxDailyAcreage: 999 },
    { id: 'drone-service', name: 'Drone Service', baseCost: 2500, costPerAcre: 150, baseTime: 1, timePerAcre: 0.2, maxDailyAcreage: 50 },
    { id: 'irrigation-services', name: 'Irrigation Services', baseCost: 1500, costPerAcre: 200, baseTime: 3, timePerAcre: 0.3, maxDailyAcreage: 5 },
    { id: 'pest-monitoring', name: 'Pest and Disease Monitoring', baseCost: 800, costPerAcre: 100, baseTime: 1, timePerAcre: 0.5, maxDailyAcreage: 20 },
    { id: 'fertilization-seeds', name: 'Fertilization & Seeds Services', baseCost: 1000, costPerAcre: 300, baseTime: 2, timePerAcre: 0.7, maxDailyAcreage: 15 },
    { id: 'harvest-planning', name: 'Harvest Planning & Equipment Rental', baseCost: 2000, costPerAcre: 400, baseTime: 2, timePerAcre: 0.5, maxDailyAcreage: 10 },
    { id: 'crop-health', name: 'Crop Health Monitoring', baseCost: 900, costPerAcre: 120, baseTime: 1, timePerAcre: 0.3, maxDailyAcreage: 25 },
    { id: 'weed-control', name: 'Weed Control', baseCost: 700, costPerAcre: 250, baseTime: 1, timePerAcre: 0.6, maxDailyAcreage: 12 },
    { id: 'crop-rotation', name: 'Crop Rotation Planning', baseCost: 1500, costPerAcre: 0, baseTime: 3, timePerAcre: 0, maxDailyAcreage: 999 },
    { id: 'harvest-storage', name: 'Harvest Storage & Handling', baseCost: 1800, costPerAcre: 350, baseTime: 2, timePerAcre: 0.4, maxDailyAcreage: 8 },
    { id: 'market-access', name: 'Market Access & Sales Support', baseCost: 2200, costPerAcre: 0, baseTime: 4, timePerAcre: 0, maxDailyAcreage: 999 },
    { id: 'precision-agri', name: 'Precision Agriculture', baseCost: 3000, costPerAcre: 500, baseTime: 3, timePerAcre: 0.8, maxDailyAcreage: 7 },
    { id: 'climate-advisory', name: 'Climate and Weather Advisory', baseCost: 1200, costPerAcre: 0, baseTime: 1, timePerAcre: 0, maxDailyAcreage: 999 },
    { id: 'post-harvest', name: 'Post-Harvest Processing', baseCost: 1600, costPerAcre: 280, baseTime: 2, timePerAcre: 0.5, maxDailyAcreage: 10 },
    { id: 'tractor', name: 'Tractor Services', baseCost: 800, costPerAcre: 180, baseTime: 1, timePerAcre: 0.4, maxDailyAcreage: 15 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (serviceId) => {
    setFormData(prev => {
      const newServices = prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId];
      return { ...prev, services: newServices };
    });
  };

  const calculateEstimate = (area, selectedServiceIds, targetDate) => {
    const selectedServices = services.filter(service => selectedServiceIds.includes(service.id));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const daysUntilTarget = Math.ceil((new Date(targetDate) - today) / (1000 * 60 * 60 * 24));
    
    let totalCost = 0;
    let totalTime = 0;
    const serviceNames = [];
    
    selectedServices.forEach(service => {
      const serviceCost = service.baseCost + (service.costPerAcre * area);
      const serviceTime = service.baseTime + (service.timePerAcre * area);
      
      totalCost += serviceCost;
      totalTime += serviceTime;
      serviceNames.push(service.name);
    });
    
    if (selectedServices.length > 1) {
      const discountPercent = Math.min(20, (selectedServices.length - 1) * 5);
      totalCost = totalCost * (1 - discountPercent/100);
    }
    
    let urgencyFee = 0;
    let teamsRequired = 1;
    let status = 'success';
    let notes = 'Based on standard rates and typical completion times. ';
    
    if (daysUntilTarget < totalTime) {
      teamsRequired = Math.ceil(totalTime / daysUntilTarget);
      urgencyFee = totalCost * 0.2 * (teamsRequired - 1);
      
      const isPossible = selectedServices.every(service => {
        if (service.maxDailyAcreage === 999) return true;
        const dailyAcreage = area / daysUntilTarget;
        return dailyAcreage <= service.maxDailyAcreage * teamsRequired;
      });
      
      if (!isPossible) {
        status = 'error';
        notes = `We cannot complete all selected services by ${new Date(targetDate).toLocaleDateString()} due to physical constraints. `;
        notes += `Some services have maximum daily acreage limits that would be exceeded. `;
        notes += `Please adjust your target date or service selection.`;
      } else if (teamsRequired > 1) {
        status = 'warning';
        notes = `To complete by ${new Date(targetDate).toLocaleDateString()} (${daysUntilTarget} days), `;
        notes += `we would need ${teamsRequired} teams working simultaneously. `;
        notes += `This requires an urgency fee of 20% per additional team. `;
        
        if (selectedServices.length >= 2) {
          notes += `Package discount still applies to base costs.`;
        }
      }
    } else {
      if (selectedServices.length >= 3) {
        notes += 'Package discount applied for multiple services. ';
      }
      
      if (area > 10) {
        notes += 'Bulk discount may apply for large areas. ';
      }
      
      if (selectedServices.some(s => ['irrigation-services', 'fertilization-seeds'].includes(s.id))) {
        notes += 'Combined irrigation and fertilization services may reduce total cost. ';
      }
    }
    
    return {
      services: serviceNames,
      totalCost: Math.round(totalCost + urgencyFee),
      totalTime: Math.round(totalTime * 10) / 10,
      urgencyFee: Math.round(urgencyFee),
      teamsRequired,
      status,
      notes,
      targetDate: new Date(targetDate).toLocaleDateString(),
      area
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const area = parseFloat(formData.area);
    if (isNaN(area) || area <= 0) {
      alert('Please enter a valid farm area');
      return;
    }
    
    if (isNaN(new Date(formData.targetDate).getTime())) {
      alert('Please select a valid target date');
      return;
    }
    
    if (formData.services.length === 0) {
      alert('Please select at least one service');
      return;
    }
    
    const estimate = calculateEstimate(area, formData.services, formData.targetDate);
    setResult(estimate);
  };

  const getResultClass = () => {
    if (!result) return '';
    return {
      success: 'bg-green-50 border-green-200',
      warning: 'bg-amber-50 border-amber-200',
      error: 'bg-red-50 border-red-200'
    }[result.status];
  };

  const getTitleClass = () => {
    if (!result) return '';
    return {
      success: 'text-green-800',
      warning: 'text-amber-800',
      error: 'text-red-800'
    }[result.status];
  };

  const getTitleText = () => {
    if (!result) return '';
    return {
      success: 'Service Estimate',
      warning: 'Service Possible with Adjustments',
      error: 'Service Not Feasible'
    }[result.status];
  };

  return (
    <div className=" bg-gray-50 py-8 px-4">
      <div className="mx-auto bg-white rounded-lg overflow-hidden">
        <div className="p-6">
          {/* <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Farm Service Enquiry</h1> */}
          <div className='grid md:grid-cols-2 gap-10 '>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                Farm Area (in acres)
              </label>
              <input
                type="number"
                id="area"
                name="area"
                min="0.1"
                step="0.1"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="targetDate" className="block text-sm font-medium text-gray-700 mb-1">
                Target Completion Date
              </label>
              <input
                type="date"
                id="targetDate"
                name="targetDate"
                value={formData.targetDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Services Needed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {services.map(service => (
                  <div key={service.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service.id}
                      checked={formData.services.includes(service.id)}
                      onChange={() => handleServiceChange(service.id)}
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label htmlFor={service.id} className="ml-2 text-sm text-gray-700">
                      {service.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Calculate Estimate
            </button>
          </form>
          
          {result && (
            <div className={`mt-4 p-6 rounded-lg border ${getResultClass()}`}>
              <h2 className={`text-xl font-bold mb-4 ${getTitleClass()}`}>{getTitleText()}</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Farm Area:</span>
                  <span>{result.area} acres</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Target Date:</span>
                  <span>{result.targetDate}</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="font-medium">Selected Services:</span>
                  <ul className="text-right">
                    {result.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Estimated Cost:</span>
                  <span>₹{result.totalCost.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Estimated Time Needed:</span>
                  <span>{result.totalTime} days</span>
                </div>
                
                {result.urgencyFee > 0 && (
                  <div className="flex justify-between">
                    <span className="font-medium">Urgency Fee:</span>
                    <span className="text-red-600 font-semibold">₹{result.urgencyFee.toLocaleString()}</span>
                  </div>
                )}
                
                {result.teamsRequired > 1 && (
                  <div className="flex justify-between">
                    <span className="font-medium">Additional Teams Required:</span>
                    <span className="text-amber-600 font-semibold">{result.teamsRequired}</span>
                  </div>
                )}
                
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{result.notes}</p>
                </div>
              </div>
            </div>
          )}

          {!result && <img className='rounded-xl shadow-lg w-[90%] mx-auto my-auto' src='https://www.iiaasd.com/wp-content/uploads/2019/10/TZjG7hXReeVoAvXt2X6pMxYAb3q65xMju8wryWxKrsghkQGrP3LvPxc9SyH4cGym4CvwCoysmTJnJMMxvSzVF9fJ2wb173RGTbdJm3Ub8uGMUMZCi455TU36d3qhs8NMRoXuwrubryG1Qz.jpg'/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerServiceEnquiryForm;