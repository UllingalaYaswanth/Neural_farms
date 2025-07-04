// import React, { useState, useEffect } from 'react';
// import { LuLogOut } from 'react-icons/lu';
// import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/images/nf-logo.jpg';
// import { FaHome } from 'react-icons/fa';
// import { GiPlantRoots, GiWateringCan } from 'react-icons/gi';
// import { AiOutlineBarChart } from 'react-icons/ai';
// import { GiFarmTractor } from 'react-icons/gi';
// import { MdTerrain } from 'react-icons/md';
// import { FaUsers,FaMapMarkedAlt } from "react-icons/fa";
// import { MdAssessment } from "react-icons/md";
// import { AiOutlineForm } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
// import { FaSeedling, FaHeartbeat, FaTint, FaBabyCarriage, FaCog } from 'react-icons/fa';
// import { GiGoat } from "react-icons/gi";
// import { CiBoxList } from "react-icons/ci";
// import { FaMapMarkerAlt } from "react-icons/fa"; // Import for Farm Boundary icon
// import { FaSeedling, FaBug, FaCloudSunRain } from "react-icons/fa";


// function Sidebar() {
//   const [userRole, setUserRole] = useState('');
//   const location = useLocation();  // Get the current location
//   const navigate = useNavigate();  

//   useEffect(() => {
//     // Get the user role from localStorage
//     const role = localStorage.getItem('role');
//     setUserRole(role);
//   }, []);

//   const ADMIN_SIDEBAR_LINKS = [
//     { id: 1, path: '/admin', name: 'Dashboard', icon: FaHome },
//     { id: 2, path: '/admin/ServicesManagement', name: 'Services', icon: GiWateringCan },
//     { id: 3, path: '/admin/ServiceReport', name: 'Analytics', icon: MdAssessment },
//     { id: 4, path: '/admin/FarmEquipmentManager', name: 'Equipment Management', icon: FaMapMarkedAlt },
//     { id: 5, path: '/admin/StaffAssignmentForm', name: 'Staff Assignment', icon: FaUsers },
//   ];

//   const USER_SIDEBAR_LINKS = [
//     { id: 1, path: '/user', name: 'Dashboard', icon: FaHome },
//     { id: 2, path: '/user/CropMonitoring', name: 'Crop Monitoring', icon: GiPlantRoots },
//     { id: 3, path: '/user/SoilHealth', name: 'Soil Health', icon: MdTerrain },
//     { id: 4, path: '/user/IrrigationControl', name: 'Irrigation Control', icon: GiWateringCan },
//     { id: 10, path: '/user/pest', name: 'Pest Control', Icon: FaBug },
//     { id: 11, path: '/user/farmboundary', name: 'Farm Boundary', icon: FaMapMarkerAlt },
//     { id: 12, path: '/user/weather', name: 'Weather Forecast', Icon: FaCloudSunRain }, 
//     { id: 6, path: '/user/FarmEquipment', name: 'Farm Equipment', icon: GiFarmTractor },
//     { id: 9, path: '/user/crop', name: 'Crop Recommendation', Icon: FaSeedling },
//     { id: 7, path: '/user/AnalyticsAndReports', name: 'Analytics & Reports', icon: AiOutlineBarChart },
//     { id: 8, path: '/user/Service', name: 'Service Request', icon: AiOutlineForm },

//   ];

//   const MAIN_SIDEBAR_LINKS = [
//     { id: 1, path: '/main', name: 'Dashboard', icon: FaHome },
//     { id: 2, path: '/main/FarmerManagement', name: 'Farmer Management', icon: GiPlantRoots },
//     { id: 3, path: '/main/TaskManagement', name: 'Task Management', icon: MdTerrain },
//     { id: 4, path: '/main/ReportsAnalytics', name: 'Reports & Analytics', icon: GiWateringCan },
    
//   ];

//   const LIVESTOCK_LINKS = [
//     { id: 1, path: '/livestock', name: 'Dashboard', icon: FaHome }, // Link to main LiveStock dashboard
//     { id: 2, path: '/livestock/animals', name: 'Animals', icon: CiBoxList }, // Link to Goats section
//     { id: 3, path: '/livestock/feeding', name: 'Feeding', icon: FaSeedling }, // Link to Feeding section
//     { id: 4, path: '/livestock/health', name: 'Health', icon: FaHeartbeat }, // Link to Health section
//     { id: 5, path: '/livestock/water', name: 'Water', icon: FaTint }, // Link to Water section
//     { id: 6, path: '/livestock/breeding', name: 'Breeding', icon: FaBabyCarriage }, // Link to Breeding section
//     { id: 7, path: '/livestock/settings', name: 'Settings', icon: FaCog },
//   ]

//   const SIDEBAR_LINKS = 
//   userRole === 'admin' ? ADMIN_SIDEBAR_LINKS : 
//   userRole === 'main' ? MAIN_SIDEBAR_LINKS : 
//   userRole === 'livestock' ? LIVESTOCK_LINKS : 
//   USER_SIDEBAR_LINKS;


//   const handleLogout = () => {
//     localStorage.removeItem('role');  // Clear the session data
//     navigate('/');  // Navigate to the sign-in page
//   };

//   return (
//     <div className="w-16 md:w-64 fixed left-0 top-0 z-10 h-screen pt-8 px-4 bg-[#286243] text-white">
//       <div className="px-5 flex items-center">
//         <img src={logo} className="w-9 flex rounded-[50%]" />
//         <h1 className="text-xl font-semibold ml-3 hidden md:flex">Neural Farms</h1>
//       </div>
//       <ul className="mt-14 space-y-4">
//         {SIDEBAR_LINKS.map((link, index) => (
//           <li
//             key={index}
//             className={`font-medium rounded-md px-5 hover:bg-white hover:text-[#286243] ${location.pathname === link.path ? 'bg-[#c1d9b7] text-[#31694a]' : ''}`}
//           >
//             <Link
//               to={link.path}
//               className="flex items-center md:space-x-5 justify-center md:justify-start py-3"
//             >
//               <span>{link.icon()}</span>
//               <span className={`text-md ${location.pathname === link.path ? ' text-[#31694a]' : ''} hidden md:flex`}>{link.name}</span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className="absolute bottom-5 cursor-pointer text-center py-2 px-5">
//         <p className="flex items-center space-x-6 ps-7 text-md hover:bg-gray-100 hover:text-[#31694a] py-2 rounded-md justify-center md:justify-start" onClick={handleLogout}>
//           <LuLogOut className="flex" />
//           <span className="hidden md:flex pe-20 font-semibold">Logout</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LuLogOut } from 'react-icons/lu';
import logo from '../assets/images/nf-logo.jpg';

import {
  FaSeedling,
  FaHeartbeat,
  FaTint,
  FaBabyCarriage,
  FaCog,
  FaBug,
  FaCloudSunRain,
  FaHome,
  FaUsers,
  FaMapMarkedAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

import {
  GiPlantRoots,
  GiWateringCan,
  GiFarmTractor,
  GiGoat
} from 'react-icons/gi';

import { AiOutlineBarChart, AiOutlineForm } from 'react-icons/ai';
import { MdTerrain, MdAssessment } from 'react-icons/md';
import { CiBoxList } from 'react-icons/ci';

function Sidebar() {
  const [userRole, setUserRole] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    setUserRole(role);
  }, []);

  const ADMIN_SIDEBAR_LINKS = [
    { id: 1, path: '/admin', name: 'Dashboard', icon: FaHome },
    { id: 2, path: '/admin/ServicesManagement', name: 'Services', icon: GiWateringCan },
    { id: 3, path: '/admin/ServiceReport', name: 'Analytics', icon: MdAssessment },
    { id: 4, path: '/admin/FarmEquipmentManager', name: 'Equipment Management', icon: FaMapMarkedAlt },
    { id: 5, path: '/admin/StaffAssignmentForm', name: 'Staff Assignment', icon: FaUsers },
  ];

  const USER_SIDEBAR_LINKS = [
    { id: 1, path: '/user', name: 'Dashboard', icon: FaHome },
    { id: 2, path: '/user/CropMonitoring', name: 'Crop Monitoring', icon: GiPlantRoots },
    { id: 3, path: '/user/SoilHealth', name: 'Soil Health', icon: MdTerrain },
    { id: 4, path: '/user/IrrigationControl', name: 'Irrigation Control', icon: GiWateringCan },
    { id: 10, path: '/user/pest', name: 'Pest Control', icon: FaBug },
    { id: 11, path: '/user/farmboundary', name: 'Farm Boundary', icon: FaMapMarkerAlt },
    { id: 12, path: '/user/weather', name: 'Weather Forecast', icon: FaCloudSunRain },
    { id: 6, path: '/user/FarmEquipment', name: 'Farm Equipment', icon: GiFarmTractor },
    { id: 9, path: '/user/crop', name: 'Crop Recommendation', icon: FaSeedling },
    { id: 7, path: '/user/AnalyticsAndReports', name: 'Analytics & Reports', icon: AiOutlineBarChart },
    { id: 8, path: '/user/Service', name: 'Service Request', icon: AiOutlineForm },
  ];

  const MAIN_SIDEBAR_LINKS = [
    { id: 1, path: '/main', name: 'Dashboard', icon: FaHome },
    { id: 2, path: '/main/FarmerManagement', name: 'Farmer Management', icon: GiPlantRoots },
    { id: 3, path: '/main/TaskManagement', name: 'Task Management', icon: MdTerrain },
    { id: 4, path: '/main/ReportsAnalytics', name: 'Reports & Analytics', icon: GiWateringCan },
  ];

  const LIVESTOCK_LINKS = [
    { id: 1, path: '/livestock', name: 'Dashboard', icon: FaHome },
    { id: 2, path: '/livestock/animals', name: 'Animals', icon: CiBoxList },
    { id: 3, path: '/livestock/feeding', name: 'Feeding', icon: FaSeedling },
    { id: 4, path: '/livestock/health', name: 'Health', icon: FaHeartbeat },
    { id: 5, path: '/livestock/water', name: 'Water', icon: FaTint },
    { id: 6, path: '/livestock/breeding', name: 'Breeding', icon: FaBabyCarriage },
    { id: 7, path: '/livestock/settings', name: 'Settings', icon: FaCog },
  ];

  const SIDEBAR_LINKS =
    userRole === 'admin' ? ADMIN_SIDEBAR_LINKS :
    userRole === 'main' ? MAIN_SIDEBAR_LINKS :
    userRole === 'livestock' ? LIVESTOCK_LINKS :
    USER_SIDEBAR_LINKS;

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div className="w-16 md:w-64 fixed left-0 top-0 z-10 h-screen pt-8 px-4 bg-[#286243] text-white">
      <div className="px-5 flex items-center">
        <img src={logo} className="w-9 flex rounded-[50%]" alt="Neural Farms Logo" />
        <h1 className="text-xl font-semibold ml-3 hidden md:flex">Neural Farms</h1>
      </div>
      <ul className="mt-14 space-y-4">
        {SIDEBAR_LINKS.map((link) => (
          <li
            key={link.id}
            className={`font-medium rounded-md px-5 hover:bg-white hover:text-[#286243] ${
              location.pathname === link.path ? 'bg-[#c1d9b7] text-[#31694a]' : ''
            }`}
          >
            <Link
              to={link.path}
              className="flex items-center md:space-x-5 justify-center md:justify-start py-3"
            >
              <span>{link.icon && <link.icon />}</span>
              <span
                className={`text-md hidden md:flex ${
                  location.pathname === link.path ? ' text-[#31694a]' : ''
                }`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-5 cursor-pointer text-center py-2 px-5">
        <p
          className="flex items-center space-x-6 ps-7 text-md hover:bg-gray-100 hover:text-[#31694a] py-2 rounded-md justify-center md:justify-start"
          onClick={handleLogout}
        >
          <LuLogOut className="flex" />
          <span className="hidden md:flex pe-20 font-semibold">Logout</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
