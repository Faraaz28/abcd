import React, { useState } from 'react';
import './Login.css';  // You can use the same CSS or create a new one

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Add forgot password logic here, like sending a password reset email
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="login-container">
      <h2>Forgot Password</h2>
      {/* <p>Enter your email to receive a password reset link.</p> */}
      <form onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required
          />
        </div>
        <button type="submit" className="login-btn">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
