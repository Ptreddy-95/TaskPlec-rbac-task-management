import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = ({ setUserRole }) => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setUserRole(role);
    navigate(`/${role.toLowerCase()}-dashboard`);
  };

  return (
    <div className="home-page">
      <h1>Welcome to Taskplex</h1>
      <p className="tagline">Please select your role to get started</p>
      <div className="role-selection">
        <button onClick={() => handleRoleSelection('Admin')} className="role-btn admin-btn">
          Admin Dashboard
        </button>
        <button onClick={() => handleRoleSelection('Manager')} className="role-btn manager-btn">
          Manager Dashboard
        </button>
        <button onClick={() => handleRoleSelection('Employee')} className="role-btn employee-btn">
          Employee Dashboard
        </button>
      </div>
    </div>
  );
};

export default Home;
