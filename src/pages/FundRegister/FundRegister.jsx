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
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validation for names to contain only letters
        const nameRegex = /^[A-Za-z]*$/;

        if (['firstname', 'lastname', 'companyName'].includes(name) && !nameRegex.test(value)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: 'Only letters are allowed'
            }));
        } else if (name === 'number' && value.length > 9) {
            setErrors(prevErrors => ({
                ...prevErrors,
                number: 'Phone number must be exactly 9 digits'
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{9}$/;

        if (!nameRegex.test(formData.firstname)) {
            newErrors.firstname = 'First name can only contain letters';
        }
        if (!nameRegex.test(formData.lastname)) {
            newErrors.lastname = 'Last name can only contain letters';
        }
        if (!nameRegex.test(formData.companyName)) {
            newErrors.companyName = 'Company name can only contain letters';
        }
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!phoneRegex.test(formData.number)) {
            newErrors.number = 'Phone number must be exactly 9 digits';
        }
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
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
                            {errors.firstname && <small className="text-danger">{errors.firstname}</small>}
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
                            {errors.lastname && <small className="text-danger">{errors.lastname}</small>}
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
                            {errors.email && <small className="text-danger">{errors.email}</small>}
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
                            {errors.companyName && <small className="text-danger">{errors.companyName}</small>}
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
                                    maxLength="9" // Restrict input to 9 characters
                                />
                            </div>
                            {errors.number && <small className="text-danger">{errors.number}</small>}
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
                            {errors.password && <small className="text-danger">{errors.password}</small>}
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
                            {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                        </div>
                        <Button type="submit" className="btn btn-light text-success w-100 mt-4" style={{ fontWeight: 'bold' }}>Register</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FundRegister;

