import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInPage from './SignInPage';
import AdminDashboard from './Dashboard/AdminDashboard';
import UserDashboard from './Dashboard/UserDashboard'; 
import RegisterPage from './userpages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/user/*" element={<UserDashboard />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
