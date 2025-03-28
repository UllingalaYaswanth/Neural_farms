import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Use HashRouter here
import SignInPage from './SignInPage';
import AdminDashboard from './Dashboard/AdminDashboard';
import UserDashboard from './Dashboard/UserDashboard';
import RegisterPage from './userpages/Register';
import MainDashboard from './Dashboard/MainDashboard';
import LiveStock from './Dashboard/LiveStock';

function App() {
  return (
    <Router>  {/* Use HashRouter */}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/user/*" element={<UserDashboard />} />
        <Route path="/main/*" element={<MainDashboard />} />
        <Route path="/livestock/*" element={<LiveStock />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
