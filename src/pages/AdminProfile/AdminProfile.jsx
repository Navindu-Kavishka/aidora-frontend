import { useState } from 'react';
import './AdminProfile.css'; 

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'admin@example.com',
    password: '',
    currentPassword: '',
    newPassword: '',
    retypeNewPassword: '',
    profilePic: null,
    phoneNumberCountryCode: '',
    phoneNumberRest: '',
    address: ''
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    retypeNewPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/admin/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust as necessary
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: {
            countryCode: formData.phoneNumberCountryCode,
            number: formData.phoneNumberRest
          },
          address: formData.address
        })
      });

      const result = await response.json();
      if (response.ok) {
        alert('Profile updated successfully');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    }
  };

  const handleChangePassword = async () => {
    if (formData.newPassword !== formData.retypeNewPassword) {
      alert('New passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/admin/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust as necessary
        },
        body: JSON.stringify({
          email: formData.email,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword
        })
      });

      const result = await response.json();
      if (response.ok) {
        alert('Password changed successfully');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password');
    }
  };

  return (
    <div className="admin-profile">
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
      <h2>Admin Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-pic-container">
          <label className="profile-pic">
            {formData.profilePic ? (
              <img src={URL.createObjectURL(formData.profilePic)} alt="Profile" />
            ) : (
              <div className="placeholder-pic"></div>
            )}
            <input type="file" onChange={handleFileChange} />
            <span className="upload-symbol" role="img" aria-label="upload symbol">📤</span>
          </label>
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
            Phone Number Country Code:
            <input type="text" name="phoneNumberCountryCode" value={formData.phoneNumberCountryCode} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneNumberRest" value={formData.phoneNumberRest} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
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
          <button type="button" className="change-password-button" onClick={handleChangePassword}>Change Password</button>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={() => window.history.back()}>Cancel</button>
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;
