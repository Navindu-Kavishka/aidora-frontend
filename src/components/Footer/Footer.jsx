import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#e0f7fa',
    padding: '20px 0',
    width: '100%',
    textAlign: 'center',
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '0 -15px',
  };

  const columnStyle = {
    flex: '1',
    padding: '15px',
    maxWidth: '33%',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  };

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (
    <footer style={footerStyle}>
      <div style={rowStyle}>
        <div style={columnStyle}>
          <h5 style={titleStyle}>Keep in touch</h5>
          <p>Address: Meth boo sewana, Thiththagalle, Ahangama, Galle.</p>
          <p>Phone: 0915546283</p>
          <p>Email: aidora01@gmail.com</p>
        </div>
        <div style={columnStyle}>
          <h5 style={titleStyle}>Useful Links</h5>
          <ul style={listStyle}>
            <li style={listItemStyle}><a href="#!" style={linkStyle}>Home</a></li>
            <li style={listItemStyle}><a href="#!" style={linkStyle}>Projects</a></li>
            <li style={listItemStyle}><a href="#!" style={linkStyle}>Fundraiser</a></li>
            <li style={listItemStyle}><a href="#!" style={linkStyle}>About us</a></li>
            <li style={listItemStyle}><a href="#!" style={linkStyle}>Donate</a></li>
          </ul>
        </div>
        <div style={columnStyle} className="text-center">
          <button style={buttonStyle}>Donate Now</button>
          <div style={socialIconsStyle}>
            <a href="#!" style={linkStyle}><i className="fab fa-facebook-f"></i></a>
            <a href="#!" style={linkStyle}><i className="fab fa-twitter"></i></a>
            <a href="#!" style={linkStyle}><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>© 2024 Aidora All Rights Reserved by Group 20</p>
        <a href="#!" style={linkStyle}>Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
