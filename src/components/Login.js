import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ setUserRole }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock credentials for testing
    const mockCredentials = [
      { username: 'testadmin', password: 'admin123', role: 'Admin' },
      { username: 'testmanager', password: 'manager123', role: 'Manager' },
      { username: 'testemployee', password: 'employee123', role: 'Employee' },
    ];

    const user = mockCredentials.find(
      (u) =>
        u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      setUserRole(user.role);  // Set the user role after successful login
      alert('Login successful!');
      navigate(`/${user.role.toLowerCase()}-dashboard`);  // Redirect to the respective dashboard
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome to Taskplex</h1>
        <p className="tagline">Streamline your tasks with role-based control</p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="links">
          <p>
            <span onClick={() => navigate('/forgot-password')} className="link">
              Forgot Password?
            </span>
          </p>
          <p>
            Don't have an account?{' '}
            <span onClick={() => navigate('/signup')} className="link">
              Create Account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
