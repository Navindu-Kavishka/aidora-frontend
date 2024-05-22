import React from 'react';

function UserLogin() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '960px', padding: '50px' }}>
      <div style={{ border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height:'50px' }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src='/src/loginback.avif' alt="login form" style={{ width: '100%', height: '100%', padding:'50px' }} />
          </div>
          <div className="col-md-6">
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                <i className="fas fa-cubes fa-3x me-3" style={{ color: '#ff6219' }}></i>
                <span className="h1 fw-bold mb-0">
                  <div className="col-md-6">
                    <img src='/src/logo.png' alt="logo" style={{ width: '100px', height: 'auto' }} />
                  </div>
                </span>
              </div>
              <h5 style={{ fontWeight: 'normal', marginTop: '1.5rem', paddingBottom: '1rem', letterSpacing: '1px' }}>Sign into your account</h5>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>Email address</label>
                <input type="email" className="form-control form-control-lg" id="email" style={{ display: 'block', width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', color: '#495057', backgroundColor: '#fff', backgroundClip: 'padding-box', border: '1px solid #ced4da', borderRadius: '0.25rem', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password" style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'block' }}>Password</label>
                <input type="password" className="form-control form-control-lg" id="password" style={{ display: 'block', width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', color: '#495057', backgroundColor: '#fff', backgroundClip: 'padding-box', border: '1px solid #ced4da', borderRadius: '0.25rem', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }} />
              </div>
              <button className="btn btn-lg mb-4 px-5" style={{ backgroundColor: '#15803d', color: '#ffffff', display: 'inline-block', fontWeight: '400', textAlign: 'center', whiteSpace: 'nowrap', verticalAlign: 'middle', userSelect: 'none', border: '1px solid transparent', fontSize: '1rem', lineHeight: '1.5', borderRadius: '0.3rem', transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }}>Login</button>
              <a className="small text-muted" href="#!" style={{ display: 'block', fontSize: '0.875rem', color: '#6c757d', textDecoration: 'none' }}>Forgot password?</a>
              <p style={{ marginBottom: '2.5rem', color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81', textDecoration: 'none' }}>Register here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
