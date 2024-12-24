import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../userpages/Home'
import CropMonitoring from '../userpages/CropMonitoring'
import SoilHealth from '../userpages/SoilHealth'
import IrrigationControl from '../userpages/IrrigationControl'
import WeatherAndClimate from '../userpages/WeatherAndClimate'
import FarmEquipment from '../userpages/farmEquipment'
import AnalyticsAndReports from '../userpages/Analytics'

function UserDashboard() {
  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='CropMonitoring' element= {<CropMonitoring/>} />
        <Route path = 'SoilHealth' element={<SoilHealth />} />
        <Route path = 'IrrigationControl' element= {<IrrigationControl />} />
        <Route path='WeatherAndClimate' element={<WeatherAndClimate/>} />
        <Route path='FarmEquipment' element={<FarmEquipment/>} />
        <Route path='AnalyticsAndReports' element={<AnalyticsAndReports/>} />
        
      </Route>
    </Routes>
  )
}

export default UserDashboard