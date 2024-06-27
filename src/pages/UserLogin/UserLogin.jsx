import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [buttonWidth, setButtonWidth] = useState('320px');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

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
      setFormError('');
      try {
        const token = localStorage.getItem('token');
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        
        const response = await axios.post(
          'http://localhost:5000/api/users/login',
          { email, password },
          { headers }
        );
        navigate('/userprofile');
      } catch (error) {
        console.error('Error during login:', error);
        setFormError('Invalid email or password');
      }
    }
  };

  return (
    <div style={{ paddingTop: '5rem', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div style={{ padding: '2rem', marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="text-center">
                  <img
                    src="/src/assets/donorImg/logo.png"
                    style={{ width: '185px', margin: '0 auto', alignSelf: 'center', marginBottom: '2rem' }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1" style={{ fontSize: '26px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}></h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <p style={{ marginBottom: '1rem', fontSize: '24px', fontFamily: 'Arial, sans-serif', marginLeft: '10px', fontWeight: 'bold' }}>User Login</p>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example11"
                      className="form-control"
                      placeholder="Phone number or email address"
                      value={email}
                      onChange={handleEmailChange}
                      style={{ marginBottom: '1rem' }}
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
                      style={{ marginTop: '-1rem' }}
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
                      style={{ fontSize: '18px', alignSelf: 'center', width: buttonWidth, backgroundColor: '#037149', padding: '1rem 2rem' }}
                    >
                      Log In
                    </button>
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <a className="text-muted" href="#!">Forgot password?</a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-success">
                      <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>Sign-Up</Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center" style={{ padding: '2rem' }}>
              <div className="text-white px-3 py-4 p-md-5 mx-md-4" style={{ backgroundImage: 'url("/src/assets/donorImg/loginback.avif")', backgroundSize: 'cover', backgroundPosition: 'center', height: '100%', width: '100%' }}>
                <h4 className="mb-4" style={{ fontSize: '24px', fontFamily: 'Arial, sans-serif' }}>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
