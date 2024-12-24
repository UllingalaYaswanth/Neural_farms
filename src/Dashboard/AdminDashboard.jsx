import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../Adminpages/Home'
import UserManagement from '../Adminpages/UserManagement'
import FieldManagement from '../Adminpages/FieldManagement'
import CropManagement from '../Adminpages/CropManagement'
import IrrigationControl from '../Adminpages/IrrigationControl'
import ReportAnalytics from '../Adminpages/ReportAnalytics'
import Notifications from '../Adminpages/Notifications'

function AdminDashboard() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='UserManagement' element= {<UserManagement/>} />
        <Route path = 'FieldManagement' element={<FieldManagement />} />
        <Route path = 'CropManagement' element= {<CropManagement />} />
        <Route path='IrrigationControl' element={<IrrigationControl/>} />
        <Route path='ReportAnalytics' element={<ReportAnalytics/>} />
        <Route path='Notifications' element={<Notifications/>} />
      </Route>
    </Routes>
  )
}

export default AdminDashboard