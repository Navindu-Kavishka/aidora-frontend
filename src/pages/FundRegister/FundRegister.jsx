import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FundRegister = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userno: '',
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

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleKeyPress = (e) => {
        const { name } = e.target;

        // Allow only letters for firstname, lastname, and companyName
        if ((name === 'firstname' || name === 'lastname' || name === 'companyName') && !/^[A-Za-z]*$/.test(e.key)) {
            e.preventDefault();
        }

        // Allow only numbers for phone number
        if (name === 'number' && !/^\d*$/.test(e.key)) {
            e.preventDefault();
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.userno) newErrors.userno = 'Registration number is required';
        if (!formData.firstname) {
            newErrors.firstname = 'First name is required';
        } else if (!/^[A-Za-z]+$/.test(formData.firstname)) {
            newErrors.firstname = 'Only letters are allowed';
        }
        if (!formData.lastname) {
            newErrors.lastname = 'Last name is required';
        } else if (!/^[A-Za-z]+$/.test(formData.lastname)) {
            newErrors.lastname = 'Only letters are allowed';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.companyName) {
            newErrors.companyName = 'Company name is required';
        } else if (!/^[A-Za-z]+$/.test(formData.companyName)) {
            newErrors.companyName = 'Only letters are allowed';
        }
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.number) {
            newErrors.number = 'Phone number is required';
        } else if (!/^\d{9}$/.test(formData.number)) { 
            newErrors.number = 'Phone number must be exactly 9 digits';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
           
            navigate('/login');
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
                                required
                                className="form-control"
                                value={formData.firstname}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                            {errors.firstname && <div style={{ color: 'red' }}>{errors.firstname}</div>}
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="lastname" className="form-label">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder="Enter your last name"
                                required
                                className="form-control"
                                value={formData.lastname}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                            {errors.lastname && <div style={{ color: 'red' }}>{errors.lastname}</div>}
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="email" className="form-label">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="companyName" className="form-label">Company Name:</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Enter your company name"
                                required
                                className="form-control"
                                value={formData.companyName}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                            />
                            {errors.companyName && <div style={{ color: 'red' }}>{errors.companyName}</div>}
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter your address"
                                required
                                className="form-control"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="phone" className="form-label">Phone Number:</label>
                            <div className="d-flex">
                                <select
                                    id="countryCode"
                                    name="countryCode"
                                    required
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
                                    required
                                    className="form-control"
                                    value={formData.number}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                    maxLength="9"
                                />
                            </div>
                            {errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                        </div>
                        <div className="mb-3 text-left" style={{ fontWeight: 'bold' }}>
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                required
                                className="form-control"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
                        </div>
                        <Button type="submit" className="btn btn-light text-success w-100 mt-4" style={{ fontWeight: 'bold' }}>Register</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FundRegister;
