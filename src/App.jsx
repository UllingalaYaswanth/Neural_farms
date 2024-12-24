// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignInPage from './SignInPage';
// import AdminDashboard from './Dashboard/AdminDashboard';
// import UserDashboard from './Dashboard/UserDashboard';

// function ProtectedRoute({ children, requiredRole }) {
//   const role = localStorage.getItem('role');

//   if (!role) {
//     // Redirect to login page if not authenticated
//     window.location.href = '/';
//     return null;
//   }

//   if (requiredRole && role !== requiredRole) {
//     // Redirect to different page if the role doesn't match
//     window.location.href = role === 'admin' ? '/admin' : '/user';
//     return null;
//   }

//   return children;
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignInPage />} />
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute requiredRole="admin">
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user"
//           element={
//             <ProtectedRoute requiredRole="user">
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignInPage from './SignInPage';
// import AdminDashboard from './Dashboard/AdminDashboard';
// import UserDashboard from './Dashboard/UserDashboard';  // Your sign-in page component

// function App() {
//   const role = localStorage.getItem('role'); 

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignInPage />} />
//         {role === 'admin' ? (
//           <Route path="/admin/*" element={<AdminDashboard />} />
//         ) : (
//           <Route path="/user/*" element={<UserDashboard />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInPage from './SignInPage';
import AdminDashboard from './Dashboard/AdminDashboard';
import UserDashboard from './Dashboard/UserDashboard'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/user/*" element={<UserDashboard />} />
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
