import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function UserProfile() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
    countryCode: '+1',
    currentPassword: '',
    newPassword: '',
    retypePassword: ''
  });

  const [errors, setErrors] = useState({
    newPassword: '',
    retypePassword: ''
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'danger'

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch('http://localhost:5000/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const result = await response.json();
        const userData = result.user;
        setFormData({
          firstName: userData.firstName,
          lastName: userData.lastName,
          email: userData.email,
          address: userData.address,
          phoneNumber: userData.phoneNumber.number,
          countryCode: userData.phoneNumber.countryCode,
          currentPassword: '',
          newPassword: '',
          retypePassword: ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const lettersOnly = /^[A-Za-z]+$/;
    const phoneNumberRegex = /^[0-9]{0,9}$/;

    if (name === 'firstName' || name === 'lastName') {
      if (value === '' || lettersOnly.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'phoneNumber') {
      if (phoneNumberRegex.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === 'newPassword' || name === 'retypePassword') {
      let error = '';
      if (name === 'newPassword' && value.length < 6) {
        error = 'Password must be at least 6 characters';
      } else if (name === 'retypePassword' && value !== formData.newPassword) {
        error = 'Passwords do not match';
      }
      setErrors({ ...errors, [name]: error });
    }
  };

  const validateForm = () => {
    return !errors.newPassword && !errors.retypePassword;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/users/update', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to update user profile');
        }

        const result = await response.json();
        setMessage('User profile updated successfully');
        setMessageType('success');
      } catch (error) {
        console.error('Error updating user profile:', error);
        setMessage('Failed to update user profile');
        setMessageType('danger');
      }
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, height: '100%', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ width: '100%', zIndex: 2 }} id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a href="#">
            <img
              src="src/assets/donorImg/logo.png"
              alt="Logo"
              style={{ height: '80px', width: '80px', marginRight: '10px', marginLeft: '30px' }}
            />
          </a>
          <h1 className="navbar-brand mb-0 mx-auto text-center" style={{ fontSize: '28px', fontWeight: 'bold' }}>User Profile</h1>
          <ul className="navbar-nav ms-auto d-flex flex-row" style={{ marginBottom: '0' }}>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="src/assets/donorImg/editprofile.png"
                  className="rounded-circle"
                  height="50px"
                  alt="Avatar"
                  loading="lazy"
                  width="50px"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                <span className="font-weight-bold">{formData.firstName}</span>
                <span className="text-black-50">{formData.email}</span>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-3 py-5">
                <h4 className="text-right">Edit Profile</h4>
                <div className="row mt-2">
                  <div className="col-md-6" style={{ marginTop: '1rem' }}>
                    <label className="labels">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                    />
                  </div>
                  <div className="col-md-6" style={{ marginTop: '1rem' }}>
                    <label className="labels">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12" style={{ marginTop: '1rem' }}>
                    <label className="labels">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email-Address"
                      name="email"
                      value={formData.email}
                      disabled
                      style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                    />
                  </div>
                  <div className="col-md-12" style={{ marginTop: '1rem' }}>
                    <label className="labels">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                    />
                  </div>
                  <div className="col-md-12" style={{ marginTop: '1rem' }}>
                    <label className="labels">Phone Number</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        style={{ marginRight: '10px', borderColor: '#BA68C8' }}
                      >
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                        <option value="+94">+94</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button className="btn btn-primary profile-button" type="button" style={{ backgroundColor: '#037149' }}>Cancel</button>
                  <button className="btn btn-primary profile-button" type="button" style={{ backgroundColor: '#037149' }} onClick={handleSubmit}>Save</button>
                </div>
                {message && (
                  <div className={`mt-3 alert alert-${messageType}`} role="alert">
                    {message}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience" style={{ fontSize: '24px' }}>
                  <span>Security Information</span>
                </div><br />
                <div className="col-md-12">
                  <label className="labels">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Current Password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                  />
                </div>
                <div className="col-md-12" style={{ marginTop: '1rem' }}>
                  <label className="labels">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                  />
                  {errors.newPassword && (
                    <div className="text-danger mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.newPassword}
                    </div>
                  )}
                </div>
                <div className="col-md-12" style={{ marginTop: '1rem' }}>
                  <label className="labels">Retype Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype Password"
                    name="retypePassword"
                    value={formData.retypePassword}
                    onChange={handleInputChange}
                    style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                  />
                  {errors.retypePassword && (
                    <div className="text-danger mt-1" style={{ fontSize: '0.875rem' }}>
                      {errors.retypePassword}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
            <Link to="/" className="btn btn-primary" style={{ backgroundColor: '#037149' }}>Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
