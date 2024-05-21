import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FundRegister = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,  }}>
            
            <header style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0', backgroundColor: 'white', '@media (max-width: 768px)': { padding: '10px 0' },
                '@media (max-width: 576px)': { padding: '5px 0' }  }}>
                <img src="src/aidora img.png" alt="Logo" style={{ maxWidth: '200px', height: 'auto', '@media (max-width: 768px)': { padding: '10px 0' },
                '@media (max-width: 576px)': { padding: '5px 0' }  }} />
            </header>
            <div style={{ display: 'flex', width: '100%', height: 'auto', maxHeight: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <img src="src/new2.jpg" alt="Error Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1, padding: '20px', borderRadius: '5px', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(to right, #083344, #064e3b,#065f46, #0d9488)' }}>
                    <form style={{ width: '100%', maxWidth: '1000px', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 style={{ fontSize: '24px', marginBottom: '2rem', marginTop: '2rem' }}>Fundraiser Registration</h2>
                        <div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
                            <label htmlFor="userno" style={{ display: 'block', marginBottom: '5px', color: '#ffffff' }}>Registration Number:</label>
                            <input type="text" id="userno" name="useno" placeholder="Enter your reg no" required style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} />
                        </div>
                        <div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="firstname" style={{ display: 'block', marginBottom: '5px' }}>First Name:</label>
    <input 
        type="text" 
        id="firstname" 
        name="firstname" 
        placeholder="Enter your first name" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
                        <div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="lastname" style={{ display: 'block', marginBottom: '5px' }}>Last Name:</label>
    <input 
        type="text" 
        id="lastname" 
        name="lastname" 
        placeholder="Enter your last name" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
<div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email Address:</label>
    <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Enter your email" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
<div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="company-name" style={{ display: 'block', marginBottom: '5px' }}>Company Name:</label>
    <input 
        type="text" 
        id="company-name" 
        name="company-name" 
        placeholder="Enter your company name" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
<div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>Address:</label>
    <input 
        type="text" 
        id="address" 
        name="address" 
        placeholder="Enter your Address" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
<div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="number" style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
    <input 
        type="text" 
        id="number" 
        name="number" 
        placeholder="Enter your phone number" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
<div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
    <input 
        type="password" 
        id="password" 
        name="password" 
        placeholder="Enter your Password" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
<div style={{ marginBottom: '20px', textAlign: 'left', marginLeft: '45px' }}>
    <label htmlFor="confirm-password" style={{ display: 'block', marginBottom: '5px' }}>Confirm Password:</label>
    <input 
        type="password" 
        id="confirm-password" 
        name="confirm-password" 
        placeholder="confirm your password" 
        required 
        style={{ width: '85%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginLeft: '10px' }} 
    />
</div>
<Button onClick={() => navigate(-1)}
 className="register-button"
 style={{ 
    width: '85%', 
    padding: '10px', 
    backgroundColor: '#ffffff', 
    color: '#037149', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer', 
    marginLeft: '45px', 
    marginTop: '2rem', 
    fontWeight: 'bold', 
    marginBottom: '3rem', 
    ':hover': { 
        backgroundColor: '#0d9488' 
    } 
}} >Register</Button>

    
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FundRegister;
