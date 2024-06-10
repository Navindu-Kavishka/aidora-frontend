import { useState, useEffect } from "react";

export default function App() {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openProjects, setOpenProjects] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

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
    position: 'relative',
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
    textDecoration: 'none', // Ensure no underline on the link
  };

  const dropdownStyle = {
    display: openProjects ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: '#ffffff',
    color: '#037149',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    minWidth: '160px',
    borderRadius: '5px', // Rounded corners
    overflow: 'hidden', // Hide overflow for rounded corners
  };

  const dropdownLinkStyle = {
    color: '#037149',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    whiteSpace: 'nowrap',
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
          <a href="/home" style={linkStyle}>Home</a>
          <div
            style={{ ...linkStyle, cursor: 'pointer' }}
            onMouseEnter={() => setOpenProjects(true)}
            onMouseLeave={() => setOpenProjects(false)}
          >
            Projects
            <div style={dropdownStyle}>
              <a
                href="#"
                style={{ ...dropdownLinkStyle, backgroundColor: hoveredLink === 'Completed' ? '#f1f1f1' : 'transparent' }}
                onMouseEnter={() => setHoveredLink('Completed')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Completed Projects
              </a>
              <a
                href="#"
                style={{ ...dropdownLinkStyle, backgroundColor: hoveredLink === 'Ongoing' ? '#f1f1f1' : 'transparent' }}
                onMouseEnter={() => setHoveredLink('Ongoing')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Ongoing Projects
              </a>
              <a
                href="#"
                style={{ ...dropdownLinkStyle, backgroundColor: hoveredLink === 'Canceled' ? '#f1f1f1' : 'transparent' }}
                onMouseEnter={() => setHoveredLink('Canceled')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Canceled Projects
              </a>
            </div>
          </div>
          
          <a href="/frlogin" style={linkStyle}>Fundraiser</a>
          <a href="/AboutUs" style={linkStyle}>About Us</a>
          <a href="#" style={linkStyle}>Donate</a>
          <a href="/login" style={loginButtonStyle}><b>Log In</b></a>
        </div>
      </div>

      <div style={{ marginTop: '60px', padding: '1rem' }}>
        {/* Content goes here */}
      </div>
    </>
  );
}
