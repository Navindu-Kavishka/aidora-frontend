import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FundLogin = () => {
  const [buttonWidth, setButtonWidth] = useState('320px');

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
                        src="src/aidora img.png"
                        style={{ width: '185px', margin: '0 auto', alignSelf: 'center', marginBottom: '2rem' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1" style={{ fontSize: '26px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>We are the Aidora Team</h4>
                    </div>
                    <form>
                      <p style={{ marginBottom: '1rem', fontSize: '24px', fontFamily: 'Arial, sans-serif', marginLeft: '10px', fontWeight: 'bold' }}>Fundraiser Login</p>
                      <div
                        data-mdb-input-init
                        className="form-outline mb-4"
                      >
                        <input style={formOutlineStyle}
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Phone number or email address"
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example11"
                        >

                        </label>
                      </div>
                      <div
                        data-mdb-input-init
                        className="form-outline mb-4"
                      >
                        <input style={labelStyle}
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          placeholder="Password"
                        />
                        <label
                          className="form-label"
                          htmlFor="form2Example22"
                        >

                        </label>
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          style={{ fontSize: '16px', alignSelf: 'center', width: '320px',...gradientStyle, ...cardStyle }}
                        >
                          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none'}}>Log In</Link>
                        </button>
                        <div style={forgotPasswordStyle}>
                          <a
                            className="text-muted"
                            href="#!"
                          >
                            Forgot password?
                          </a></div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">
                          Don't have an account?
                        </p>
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-outline-success"
                        >
                          <Link to="/register" style={{ textDecoration: 'none', color: '#198754' }}>Sign-Up</Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center" style={{ ...gradientStyle, ...cardStyle }}>
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
