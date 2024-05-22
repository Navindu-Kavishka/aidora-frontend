import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FundRegister = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0', backgroundColor: 'white' }}>
                <img src="src/aidora img.png" alt="Logo" style={{ maxWidth: '200px', height: 'auto' }} />
            </header>
            <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage:'url(/src/back.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px' }}>
                <div className="bg-white p-4 rounded shadow" style={{ maxWidth: '600px', width: '100%' }}>
                   
                        <form className="w-100">
                            <h2 className="mb-4 text-center">Fundraiser Registration</h2>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="userno" className="form-label">Registration Number:</label>
                                <input type="text" id="userno" name="useno" placeholder="Enter your reg no" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="firstname" className="form-label">First Name:</label>
                                <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="lastname" className="form-label">Last Name:</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="email" className="form-label">Email Address:</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="company-name" className="form-label">Company Name:</label>
                                <input type="text" id="company-name" name="company-name" placeholder="Enter your company name" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="address" className="form-label">Address:</label>
                                <input type="text" id="address" name="address" placeholder="Enter your Address" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="number" className="form-label">Phone Number:</label>
                                <input type="text" id="number" name="number" placeholder="Enter your phone number" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" id="password" name="password" placeholder="Enter your Password" required className="form-control" />
                            </div>
                            <div className="mb-3 text-left" style={{fontWeight:'bold'}}>
                                <label htmlFor="confirm-password" className="form-label">Confirm Password:</label>
                                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required className="form-control" />
                            </div>
                            <Button onClick={() => navigate(-1)} className="btn btn-light text-success w-100 mt-4" style={{ fontWeight: 'bold' }}>Register</Button>
                        </form>
                    </div>
                </div>
            </div>
        
    );
}

export default FundRegister;
