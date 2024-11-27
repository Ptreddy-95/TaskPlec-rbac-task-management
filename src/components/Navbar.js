import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserShield, faTasks, faUser, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ userRole, toggleTheme, currentTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>
          <span className="highlight">Taskplex</span>
        </h1>
        <p className="tagline">Your Role-Based Task Management Solution</p>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
        </li>
        {userRole === 'Admin' && (
          <li>
            <NavLink to="/admin-dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FontAwesomeIcon icon={faUserShield} /> Admin
            </NavLink>
          </li>
        )}
        {userRole === 'Manager' && (
          <li>
            <NavLink to="/manager-dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FontAwesomeIcon icon={faTasks} /> Manager
            </NavLink>
          </li>
        )}
        {userRole === 'Employee' && (
          <li>
            <NavLink to="/employee-dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
              <FontAwesomeIcon icon={faUser} /> Employee
            </NavLink>
          </li>
        )}
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={currentTheme === 'light' ? faMoon : faSun} />
        {currentTheme === 'light' ? ' Dark Mode' : ' Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
