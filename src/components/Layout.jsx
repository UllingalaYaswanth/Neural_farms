import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div>
        <div className='flex'>
            <Sidebar />
            <div className='w-full ml-16 md:ml-64 bg-[#eaece4]'>
                <Header />
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout