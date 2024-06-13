import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function EditProfile() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
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

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/fundregisters/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
      });
  }, [id]);

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

  const handleSubmit = () => {
    if (!errors.newPassword && !errors.retypePassword) {
      axios.put(`http://localhost:5000/api/fundregisters/${id}`, formData)
        .then(response => {
          console.log('Profile updated successfully:', response.data);
        })
        .catch(error => {
          console.error('There was an error updating the profile!', error);
        });
    }
  };

  const handlePasswordSubmit = () => {
    if (!errors.newPassword && !errors.retypePassword) {
      // Handle password update logic here
      setShowModal(false);
      console.log('Password updated successfully');
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, height: '100%', fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ width: '100%', zIndex: 2 }} id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a href="#">
            <img
              src="src/assets/FundraiserImg/aidora img.png"
              alt="Logo"
              style={{ height: '80px', width: '80px', marginRight: '10px', marginLeft: '30px' }}
            />
          </a>
          <h1 className="navbar-brand mb-0 mx-auto text-center" style={{ fontSize: '28px', fontWeight: 'bold' }}>FundRaiser Profile</h1>
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
                  src="src/assets/FundraiserImg/b.jpg"
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

      <div style={{ backgroundColor: '#037149', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                <span className="font-weight-bold">Edogaru</span>
                <span className="text-black-50">edogaru@mail.com.my</span>
              </div>
            </div>
            <div className="col-md-5 border-right" style={{ marginTop: '3rem', marginLeft: '70px' }}>
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
                  <div className="col-md-12">
                    <label className="labels">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      style={{ boxShadow: 'none', borderColor: '#BA68C8' }}
                    />
                  </div>
                  <div className="col-md-12" style={{ marginTop: '1rem' }}>
                    <label className="labels">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email-Address"
                      name="email"
                      value={formData.email}
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
                        <option value="+94">+94</option>
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                       
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
                <div className="d-flex justify-content-between mt-5 text-center">
                  <button className="btn btn-primary profile-button" type="button" style={{ backgroundColor: '#037149' }}>Cancel</button>
                  <button className="btn btn-primary profile-button" type="button" style={{ backgroundColor: '#037149' }} onClick={handleSubmit}>Save</button>
                </div>
              </div>
            </div>

            <div className="col-md-4" style={{ marginTop: '-2rem', marginLeft: '400px' }}>
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience" style={{ fontSize: '24px' }}>
                <div className="d-flex justify-content-between align-items-center experience" style={{ fontSize: '24px' }}>
                <div className="d-flex justify-content-between align-items-center experience" style={{ fontSize: '24px' }}>
  <div>
    <a href="#" onClick={() => setShowModal(true)} style={{ color: 'black', textDecoration: 'underline' }}>Security Information</a>
    <h6>(Click here to change current password)</h6>
  </div>
</div>

                </div><br />
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
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
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handlePasswordSubmit} style={{ backgroundColor: '#037149' }}>Save</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: '1000', marginLeft: '70px' }}>
          <Link to="/frdashboard" className="btn btn-primary" style={{ backgroundColor: '#037149' }}>Back</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EditProfile;
