import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const FundRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        companyName: '',
        address: '',
        countryCode: '+94', 
        number: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:5000/api/fundregisters', formData);
            if (response.status === 201) {
                navigate('/frlogin');
            } else {
                console.error(response.data.message);
            }
        } catch (error) {
            console.error('Server error', error);
        }
    };

    return (
        <div>
            <header style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0', backgroundColor: 'white' }}>
                <img src="src/assets/FundraiserImg/aidora img.png" alt="Logo" style={{ maxWidth: '200px', height: 'auto' }} />
            </header>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(/src/assets/FundraiserImg/back.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>
                <div className="bg-white p-4 rounded shadow" style={{ maxWidth: '600px', width: '100%' }}>
                    <form className="w-100" onSubmit={handleSubmit}>
                        <h2 className="mb-4 text-center">Fundraiser Registration</h2>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="firstname" className="form-label">First Name:</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                placeholder="Enter your first name"
                                className="form-control"
                                value={formData.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="lastname" className="form-label">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Enter your last name"
                                className="form-control"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="email" className="form-label">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="companyName" className="form-label">Company Name:</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Enter your company name"
                                className="form-control"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                                className="form-control"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="phone" className="form-label">Phone Number:</label>
                            <div className="d-flex">
                                <select
                                    id="countryCode"
                                    name="countryCode"
                                    className="form-control"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    style={{ maxWidth: '100px', marginRight: '10px' }}
                                >
                                    <option value="+94">+94</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                </select>
                                <input
                                    type="text"
                                    id="number"
                                    name="number"
                                    placeholder="Enter your phone number"
                                    className="form-control"
                                    value={formData.number}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="form-control"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit" className="btn btn-light text-success w-100 mt-4" style={{ fontWeight: 'bold' }}>Register</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FundRegister;
