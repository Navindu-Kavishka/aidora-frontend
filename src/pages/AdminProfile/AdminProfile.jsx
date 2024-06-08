import React, { useState } from 'react';
import './AdminProfile.css'; // Import the CSS file for styling

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'admin@example.com', // Example email
    password: '',
    currentPassword: '',
    newPassword: '',
    retypeNewPassword: '',
    profilePic: null
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    currentPassword: false,
    newPassword: false,
    retypeNewPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for name fields
    if ((name === 'firstName' || name === 'lastName') && /[^a-zA-Z\s]/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="admin-profile">
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
      <h2>Admin Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-pic-container">
          <div className="profile-pic">
            {formData.profilePic ? (
              <img src={URL.createObjectURL(formData.profilePic)} alt="Profile" />
            ) : (
              <div className="placeholder-pic"></div>
            )}
          </div>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="personal-info">
          <h3>Personal Information</h3>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} readOnly />
          </label>
          <label>
            Password:
            <div className="password-container">
              <input type={passwordVisibility.password ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} />
              <button type="button" onClick={() => togglePasswordVisibility('password')}>{passwordVisibility.password ? 'Hide' : 'Show'}</button>
            </div>
          </label>
        </div>
        <div className="security-info">
          <h3>Security Information</h3>
          <label>
            Current Password:
            <div className="password-container">
              <input type={passwordVisibility.currentPassword ? "text" : "password"} name="currentPassword" value={formData.currentPassword} onChange={handleChange} />
              <button type="button" onClick={() => togglePasswordVisibility('currentPassword')}>{passwordVisibility.currentPassword ? 'Hide' : 'Show'}</button>
            </div>
          </label>
          <label>
            New Password:
            <div className="password-container">
              <input type={passwordVisibility.newPassword ? "text" : "password"} name="newPassword" value={formData.newPassword} onChange={handleChange} />
              <button type="button" onClick={() => togglePasswordVisibility('newPassword')}>{passwordVisibility.newPassword ? 'Hide' : 'Show'}</button>
            </div>
          </label>
          <label>
            Retype New Password:
            <div className="password-container">
              <input type={passwordVisibility.retypeNewPassword ? "text" : "password"} name="retypeNewPassword" value={formData.retypeNewPassword} onChange={handleChange} />
              <button type="button" onClick={() => togglePasswordVisibility('retypeNewPassword')}>{passwordVisibility.retypeNewPassword ? 'Hide' : 'Show'}</button>
            </div>
          </label>
          <button type="button" className="change-password-button" onClick={() => {/* Add password reset logic */}}>Change Password</button>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={() => {/* Add cancel logic */}}>Cancel</button>
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;
