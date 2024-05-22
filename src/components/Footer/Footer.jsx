import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#037149', padding: '20px 0', width: '100%', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '0 -15px' }}>
        <div style={{ flex: '1', padding: '15px', maxWidth: '33%', boxSizing: 'border-box' }}>
          <h5 style={{ fontWeight: 'bold', marginBottom: '15px', color:'#FFFFFF'}}>Keep in touch</h5>
          <p style={{ color: '#FFFFFF', paddingTop: '50px' }}> Meth boo sewana, Thiththagalle, Ahangama, Galle.</p>


          <p style={{color:'#FFFFFF'}}> 0915546283</p>
          <p style={{color:'#FFFFFF'}}> aidora01@gmail.com</p>
        </div>
        <div style={{ flex: '1', padding: '15px', maxWidth: '33%', boxSizing: 'border-box' }}>
          <h5 style={{ fontWeight: 'bold', marginBottom: '15px', color:'#FFFFFF'}}>Useful Links</h5>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}><a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Projects</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Fundraiser</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About us</a></li>
            <li style={{ marginBottom: '10px' }}><a href="#!" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Donate</a></li>
          </ul>
        </div>
        <div style={{ flex: '1', padding: '15px', maxWidth: '33%', boxSizing: 'border-box', textAlign: 'center' }}>
          <button style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 30px', cursor: 'pointer', borderRadius: '5px' }}>Donate Now</button>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
            <a href="#!" style={{ color: '#333', textDecoration: 'none',  backgroundImage: 'url(src/facebook1.png)',minHeight: '10vh' }}><i className="fab fa-facebook-f"></i></a>
            <a href="#!" style={{ color: '#333', textDecoration: 'none' }}><i className="fab fa-twitter"></i></a>
            <a href="#!" style={{ color: '#333', textDecoration: 'none' }}><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px', color:'#FFFFFF' }}>
        <p>© 2024 Aidora All Rights Reserved by Group 20</p>
        <a href="#!" style={{ color: '#333', textDecoration: 'none', color:'#FFFFFF' }}>Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
