import React, { useState } from 'react';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = (e) => {
    e.preventDefault();
    alert(`Password reset instructions sent to ${email}`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Forgot Password</h1>
        <p>Enter your email to reset your password</p>
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
