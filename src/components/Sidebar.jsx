// import React, { useState } from 'react'
// import { LuBox, LuUser, LuMessageSquare, LuCalendar,LuLogOut} from 'react-icons/lu'
// import {Link} from 'react-router-dom'
// import logo from '../assets/images/nf-logo.jpg'
// import { FaHome } from 'react-icons/fa';
// import { GiPlantRoots, GiWateringCan } from 'react-icons/gi'; // Use available icons
// import { WiDaySunny } from 'react-icons/wi';
// import { AiOutlineBarChart } from 'react-icons/ai';
// import { GiFarmTractor } from 'react-icons/gi';
// import { MdTerrain } from 'react-icons/md';


// function Sidebar() {
//   const [activeLink, setActiveLink] = useState(0);
//   const handleLinkClick = (index) =>{
//     setActiveLink(index)
//   }
//     const SIDEBAR_LINKS = [
//       { id: 1, path: '/', name: "Home", icon: FaHome },
//       { id: 2, path: '/members', name: "Crop Monitoring", icon: GiPlantRoots },
//       { id: 3, path: '/messages', name: "Soil Health", icon: MdTerrain  },  // Using GiPlantRoots as placeholder
//       { id: 4, path: '/projects', name: "Irrigation Control", icon: GiWateringCan },
//       { id: 5, path: '/workplan', name: "Weather & Climate", icon: WiDaySunny },
//       { id: 6, path: '/farmequipment', name: "Farm Equipment", icon: GiFarmTractor },  // Corrected icon
//       { id: 7, path: '/analytics', name: "Analytics & Reports", icon: AiOutlineBarChart },
      
//     ]
//   return (
//     <div className='w-16 md:w-64 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
//         <div className='px-5 flex items-center'>
//           <img src={logo} className='w-9 flex'/>
//           <h1 className='text-xl font-semibold ml-3 hidden md:flex'>Neural Farms</h1>
//         </div>
//         <ul className='mt-14 space-y-4'>
//           {
//             SIDEBAR_LINKS.map((link,index) =>(
//               <li key={index} className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-200 text-indigo-500": ""}`} >
//                 <Link to={link.path} className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
//                 onClick={() => handleLinkClick(index)}
//                 >
//                 <span >{link.icon()}</span>
//                 <span className='text-md text-gray-500 hidden md:flex'>{link.name}</span>
//                 </Link>
//               </li>
//             ))
//           }
//         </ul>
//         <div className='absolute bottom-5 left-5 cursor-pointer text-center py-2 px5'>
//           <p className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'>
//             <LuLogOut className='flex'/>
//             <span className='hidden md:flex pe-20 text-gray-500'>Logout</span>
//           </p>
//         </div>
//     </div>
//   )
// }

// export default Sidebar

import React, { useState, useEffect } from 'react';
import { LuLogOut } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import logo from '../assets/images/nf-logo.jpg';
import { FaHome } from 'react-icons/fa';
import { GiPlantRoots, GiWateringCan } from 'react-icons/gi'; // Use available icons
import { WiDaySunny } from 'react-icons/wi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GiFarmTractor } from 'react-icons/gi';
import { MdTerrain } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { FaUsers, FaLeaf, FaMapMarkedAlt } from "react-icons/fa";
import { MdAssessment, MdNotifications } from "react-icons/md";
import { AiOutlineForm } from 'react-icons/ai';


function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Get the user role from localStorage
    const role = localStorage.getItem('role');
    setUserRole(role);  // Update userRole based on the stored role
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const ADMIN_SIDEBAR_LINKS = [
    { id: 1, path: '/admin', name: 'Dashboard', icon: FaHome },
    { id: 2, path: '/admin/UserManagement', name: 'User Management', icon: FaUsers },
    { id: 3, path: '/admin/FieldManagement', name: 'Field Management', icon: FaMapMarkedAlt },
    { id: 4, path: '/admin/CropManagement', name: 'Crop Management', icon: FaLeaf },
    { id: 5, path: '/admin/IrrigationControl', name: 'Irrigation Control', icon: GiWateringCan },
    { id: 6, path: '/admin/ReportAnalytics', name: 'Report & Analytics', icon: MdAssessment },
    { id: 7, path: '/admin/Notifications', name: 'Notifications', icon: MdNotifications },
  ];

  const USER_SIDEBAR_LINKS = [
    { id: 1, path: '/user', name: 'Dashboard', icon: FaHome },
    { id: 2, path: '/user/CropMonitoring', name: 'Crop Monitoring', icon: GiPlantRoots },
    { id: 3, path: '/user/SoilHealth', name: 'Soil Health', icon: MdTerrain },
    { id: 4, path: '/user/IrrigationControl', name: 'Irrigation Control', icon: GiWateringCan },
    { id: 10 , path: '/user/pest', name: 'Pest Control', icon: GiWateringCan },
    // { id: 5, path: '/user/WeatherAndClimate', name: 'Weather & Climate', icon: WiDaySunny },
    { id: 6, path: '/user/FarmEquipment', name: 'Farm Equipment', icon: GiFarmTractor },
    { id: 9, path: '/user/crop', name: 'Crop Requirement', icon: AiOutlineForm  },
    { id: 7, path: '/user/AnalyticsAndReports', name: 'Analytics & Reports', icon: AiOutlineBarChart },
    { id: 8, path: '/user/Service', name: 'Service Request', icon: AiOutlineForm  },
    // { id: 7, path: '/user/land', name: 'Farm Registrartion', icon: AiOutlineForm  },
  
  ];

  const SIDEBAR_LINKS = userRole === 'admin' ? ADMIN_SIDEBAR_LINKS : USER_SIDEBAR_LINKS;

  const navigate = useNavigate();  // Initialize navigate

  const handleLogout = () => {
    // Clear user session or token (if applicable)
    localStorage.removeItem('role');  // Example of clearing session data
    navigate('/');  // Navigate to the sign-in page
  };


  return (
    <div className="w-16 md:w-64 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      <div className="px-5 flex items-center">
        <img src={logo} className="w-9 flex" />
        <h1 className="text-xl font-semibold ml-3 hidden md:flex">Neural Farms</h1>
      </div>
      <ul className="mt-14 space-y-4">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${activeLink === index ? 'bg-indigo-200 text-indigo-500' : ''}`}
          >
            <Link
              to={link.path}
              className="flex items-center md:space-x-5 justify-center md:justify-start py-3"
              onClick={() => handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-md text-gray-500 hidden md:flex">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-5 cursor-pointer text-center py-2 px-5">
        <p className="flex items-center space-x-2 ps-14 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 rounded-md justify-center md:justify-start" onClick={handleLogout} >
          <LuLogOut className="flex" />
          <span className="hidden md:flex pe-20 text-gray-500">Logout</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
