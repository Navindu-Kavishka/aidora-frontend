// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('http://localhost:5000/api/auth/admin/login', { email, password });
      // Assuming OTP is sent to admin's email or phone after this
      setIsOtpSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/admin/verify', { otp });
      // Redirect to admin panel
      window.location.href = '/admin/panel';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!isOtpSent ? (
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp}>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
}

export default AdminLogin;
