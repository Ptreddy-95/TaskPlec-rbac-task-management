import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import UserManagement from '../UserManagement'; 
import TaskManagement from '../TaskManagement'; 
import RoleManagement from '../RoleManagement'; 
import { addUser, deleteUser, editUser } from '../../redux/actions/userActions';
import { addRole, deleteRole, editRole } from '../../redux/actions/roleActions';
import './Dashboard.css';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  const dispatch = useDispatch();

  // State for toggling sections
  const [showUsers, setShowUsers] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showRoles, setShowRoles] = useState(false);

  // Mock data
  const users = useSelector((state) => state.users);
  const roles = useSelector((state) => state.roles);

  const data = {
    labels: ['Admin', 'Manager', 'Employee'],
    datasets: [
      {
        label: 'Role Distribution',
        data: [
          users.filter((user) => user.role === 'Admin').length,
          users.filter((user) => user.role === 'Manager').length,
          users.filter((user) => user.role === 'Employee').length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Handlers for CRUD operations
  const handleAddUser = (newUser) => {
    dispatch(addUser(newUser));
  };

  const handleUpdateUser = (user) => {
    dispatch(editUser(user)); 
};

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleAddRole = (newRole) => {
    dispatch(addRole(newRole));
  };

  const handleUpdateRole = (role) => {
    dispatch(editRole(role)); 
};

  const handleDeleteRole = (roleId) => {
    dispatch(deleteRole(roleId));
  };

  return (
    <div className="dashboard-layout">
      <nav className="sidebar">
        <ul>
          <li><a href="#users">User Management</a></li>
          <li><a href="#tasks">Task Management</a></li>
          <li><a href="#roles">Role Management</a></li>
        </ul>
      </nav>

      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        <div className="stats">
          <div className="card">
            <h3>Active Users</h3>
            <p>{users.length}</p>
          </div>
          <div className="card">
            <h3>Roles</h3>
            <p>{roles.length}</p>
          </div>
        </div>

        <div id="users">
          <button
            onClick={() => setShowUsers(!showUsers)}
            className="collapsible-button"
          >
            {showUsers ? 'Hide' : 'Show'} User Management
          </button>
          {showUsers && (
            <UserManagement
              users={users}
              onAddUser={handleAddUser}
              onUpdateUser={handleUpdateUser}
              onDeleteUser={handleDeleteUser}
            />
          )}
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
          {showRoles && (
            <RoleManagement
              roles={roles}
              onAddRole={handleAddRole}
              onUpdateRole={handleUpdateRole}
              onDeleteRole={handleDeleteRole}
            />
          )}
        </div>

        <div className="chart-container">
          <Pie
            data={data}
            options={{
              maintainAspectRatio: false,
            }}
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
