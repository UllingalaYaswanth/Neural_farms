import React, { useState } from 'react'
import { LuBox, LuUser, LuMessageSquare, LuCalendar,LuLogOut} from 'react-icons/lu'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'
import { FaHome } from 'react-icons/fa';
import { GiPlantRoots, GiWateringCan } from 'react-icons/gi'; // Use available icons
import { WiDaySunny } from 'react-icons/wi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GiFarmTractor } from 'react-icons/gi';
import { MdTerrain } from 'react-icons/md';


function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) =>{
    setActiveLink(index)
  }
    const SIDEBAR_LINKS = [
      { id: 1, path: '/', name: "Home", icon: FaHome },
      { id: 2, path: '/members', name: "Crop Monitoring", icon: GiPlantRoots },
      { id: 3, path: '/messages', name: "Soil Health", icon: MdTerrain  },  // Using GiPlantRoots as placeholder
      { id: 4, path: '/projects', name: "Irrigation Control", icon: GiWateringCan },
      { id: 5, path: '/workplan', name: "Weather & Climate", icon: WiDaySunny },
      { id: 6, path: '/equipment', name: "Farm Equipment", icon: GiFarmTractor },  // Corrected icon
      { id: 7, path: '/reports', name: "Analytics & Reports", icon: AiOutlineBarChart },
    ]
  return (
    <div className='w-16 md:w-64 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
        <div className='px-5 flex items-center'>
          <img src={logo} className='w-9 flex'/>
          <h1 className='text-xl font-semibold ml-3 hidden md:flex'>Neural Farms</h1>
        </div>
        <ul className='mt-14 space-y-4'>
          {
            SIDEBAR_LINKS.map((link,index) =>(
              <li key={index} className={`font-medium rounded-md px-5 hover:bg-gray-200 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-200 text-indigo-500": ""}`} >
                <Link to={link.path} className='flex items-center md:space-x-5 justify-center md:justify-start py-3'
                onClick={() => handleLinkClick(index)}
                >
                <span >{link.icon()}</span>
                <span className='text-md text-gray-500 hidden md:flex'>{link.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
        <div className='absolute bottom-5 left-5 cursor-pointer text-center py-2 px5'>
          <p className='flex items-center space-x-2 text-md text-gray-800 hover:bg-gray-100 hover:text-indigo-500 py-2 px-4 rounded-md justify-center md:justify-start'>
            <LuLogOut className='flex'/>
            <span className='hidden md:flex pe-20 text-gray-500'>Logout</span>
          </p>
        </div>
    </div>
  )
}

export default Sidebar