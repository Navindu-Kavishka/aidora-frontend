import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const FundLogin = () => {
  const [buttonWidth, setButtonWidth] = useState('320px');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const updateButtonWidth = () => {
      if (window.innerWidth < 576) {
        setButtonWidth('100%');
      } else if (window.innerWidth < 768) {
        setButtonWidth('80%');
      } else {
        setButtonWidth('320px');
      }
    };

    window.addEventListener('resize', updateButtonWidth);
    updateButtonWidth();

    return () => window.removeEventListener('resize', updateButtonWidth);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
        setFormError('All fields are mandatory');
    } else if (emailError || passwordError) {
        setFormError('Please fix the errors before submitting');
    } else {
        try {
            const response = await axios.post('http://localhost:5000/api/fundregisters', { email, password });
            console.log(response.data); 
           
        } catch (error) {
            console.error(error); 
            
            setFormError('Login failed. Please check your credentials and try again.');
        }
    }
};

  const cardStyle = {
    borderTopRightRadius: '0.3rem',
    borderBottomRightRadius: '0.3rem',
  };

  const backgroundImageStyle = {
    backgroundImage: 'url("https://th.bing.com/th/id/OIP.6_y0yylIRn1rLisUmqtGcQHaLG?w=500&h=749&rs=1&pid=ImgDetMain.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vh',
  };

  const gradientStyle = {
    background: 'linear-gradient(to right, #083344, #064e3b, #065f46, #0d9488)',
  };

  const containerStyle = {
    paddingTop: '5rem',
    height: '100%',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };

  const colStyle = {
    maxWidth: '80%',
  };

  const cardBodyStyle = {
    padding: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const formOutlineStyle = {
    marginBottom: '1rem',
  };

  const labelStyle = {
    marginTop: '-1rem',
  };

  const forgotPasswordStyle = {
    textAlign: 'center',
    marginTop: '1rem',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={rowStyle}>
          <div style={colStyle}>
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div style={cardBodyStyle}>
                    <div className="text-center">
                      <img
                        src="src/assets/FundraiserImg/aidora img.png"
                        style={{ width: '185px', margin: '0 auto', alignSelf: 'center', marginBottom: '2rem' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1" style={{ fontSize: '26px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>We are the Aidora Team</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p style={{ marginBottom: '1rem', fontSize: '24px', fontFamily: 'Arial, sans-serif', marginLeft: '10px', fontWeight: 'bold' }}>Fundraiser Login</p>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder=" email address"
                          value={email}
                          onChange={handleEmailChange}
                          style={formOutlineStyle}
                        />
                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={handlePasswordChange}
                          style={labelStyle}
                        />
                        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        {formError && <div style={{ color: 'red', marginBottom: '1rem' }}>{formError}</div>}
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                          style={{ fontSize: '16px', alignSelf: 'center', width: buttonWidth, backgroundColor: '#037149' }}
                        >
                           <Link to="/frdashboard" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                        </button>
                        <div style={forgotPasswordStyle}>
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-success">
                          <Link to="/frregister" style={{ textDecoration: 'none', color: 'black' }}>Sign-Up</Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4" style={backgroundImageStyle}>
                    <h4 className="mb-4" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
                      We are more than just a company
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundLogin;
