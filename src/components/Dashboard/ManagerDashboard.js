import React, { useState } from 'react';
import TaskManagement from '../TaskManagement'; 
import RoleManagement from '../RoleManagement';
import './Dashboard.css';

const ManagerDashboard = () => {
  const [showTasks, setShowTasks] = useState(false);
  const [showRoles, setShowRoles] = useState(false);

  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <ul>
          <li><a href="#tasks">Task Management</a></li>
          <li><a href="#roles">Role Management</a></li>
        </ul>
      </nav>

      <div className="dashboard-container">
        <h2>Manager Dashboard</h2>
        <div className="stats">
          <div className="card">
            <h3>Active Tasks</h3>
            <p>25</p>
          </div>
          <div className="card">
            <h3>Roles</h3>
            <p>3</p>
          </div>
        </div>

        <div id="tasks">
          <button
            onClick={() => setShowTasks(!showTasks)}
            className="collapsible-button"
          >
            {showTasks ? 'Hide' : 'Show'} Task Management
          </button>
          {showTasks && <TaskManagement />}
        </div>

        <div id="roles">
          <button
            onClick={() => setShowRoles(!showRoles)}
            className="collapsible-button"
          >
            {showRoles ? 'Hide' : 'Show'} Role Management
          </button>
          {showRoles && <RoleManagement />}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
