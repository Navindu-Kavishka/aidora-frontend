import React, { useState, useEffect } from 'react';

export default function App() {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#037149', // Primary color
    color: 'white',
    width: '100%', // Full width
    position: 'fixed', // Fixed position to stick at the top
    top: 0,
    left: 0,
    zIndex: 1000, // Ensure it stays on top
  };

  const collapseStyle = {
    display: isMobile && !openNav ? 'none' : 'flex', // Changed to 'flex'
    flexDirection: 'row', // Make the links horizontal
    justifyContent: isMobile ? 'center' : 'flex-end', // Center items on mobile, align to right on desktop
    alignItems: 'center', // Align items vertically
    width: '100%', // Full width for the collapsible section
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    padding: '5px 10px',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: 'inherit',
    fontSize: '1.25rem', // Increase button size for better visibility
    display: isMobile ? 'block' : 'none', // Hide button on desktop
  };

  const loginButtonStyle = {
    backgroundColor: '#ffffff', // White background for the login button
    color: '#15803d', // Primary color for the text
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    marginLeft: '1rem', // Space between the links and the login button
    cursor: 'pointer',
  };

  return (
    <>
      <div style={navbarStyle}>
        <img src='/src/assets/donorImg/logo.png' alt='Logo' style={{ width: '80px', padding: '10px' }} />
        <button
          onClick={() => setOpenNav(!openNav)}
          style={buttonStyle}
        >
          ☰
        </button>
        <div style={collapseStyle}>
          <a href="#" style={linkStyle}>Home</a>
          <a href="#" style={linkStyle}>Projects</a>
          <a href="#" style={linkStyle}>Fundraiser</a>
          <a href="#" style={linkStyle}>About Us</a>
          <a href="#" style={linkStyle}>Donate</a>
          <button style={loginButtonStyle}><b>Log In</b></button>
        </div>
      </div>

      <div style={{ marginTop: '60px', padding: '1rem' }}>
        {/* Content goes here */}
      </div>
    </>
  );
}
