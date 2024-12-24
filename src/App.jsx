import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CropMonitoring from './pages/CropMonitoring'
import SoilHealth from './pages/SoilHealth'
import IrrigationControl from './pages/IrrigationControl'
import WeatherAndClimate from './pages/WeatherAndClimate'
import FarmEquipment from './pages/farmEquipment'
import AnalyticsAndReports from './pages/Analytics'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='members' element= {<CropMonitoring/>} />
        <Route path = 'messages' element={<SoilHealth />} />
        <Route path = 'projects' element= {<IrrigationControl />} />
        <Route path='workplan' element={<WeatherAndClimate/>} />
        <Route path='farmequipment' element={<FarmEquipment/>} />
        <Route path='analytics' element={<AnalyticsAndReports/>} />
        
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App