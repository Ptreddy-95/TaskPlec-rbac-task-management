import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import ManagerDashboard from './components/Dashboard/ManagerDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import Home from './components/Home'; // Import the Home component
import Navbar from './components/Navbar'; 
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [userRole, setUserRole] = useState(null);

  // Toggle theme for the app
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <Router>
        <Navbar userRole={userRole} setUserRole={setUserRole} toggleTheme={toggleTheme} theme={theme} />
        
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Login setUserRole={setUserRole} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Landing/Home page after login */}
            <Route path="/home" element={<Home setUserRole={setUserRole} />} />

            {/* Protected Routes */}
            {userRole === 'Admin' && (
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
            )}
            {userRole === 'Manager' && (
              <Route path="/manager-dashboard" element={<ManagerDashboard />} />
            )}
            {userRole === 'Employee' && (
              <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
            )}

            {/* Redirect to login if no role is selected */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
