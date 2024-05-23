import React, { useState } from 'react';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <button
          style={styles.toggler}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <i className="fas fa-bars" style={styles.icon}></i>
        </button>

        <div
          className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <a style={styles.brand} href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
         
        </div>

        <div style={styles.rightElements}>
          <a style={styles.icon} href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>

        

         
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              role="button"
              id="navbarDropdownMenuAvatar"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/src/b.jpg"
                style={styles.avatar}
                alt="Avatar"
                loading="lazy"
              />
            </a>
           
          
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#28a745', 
    height:'50px'// Green background color
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
  },
  toggler: {
    border: 'none',
    background: 'none',
    color: '#fff', // White color for the icon
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginRight: '1rem',
  },
  navLink: {
    color: '#fff', // White color for the text
    textDecoration: 'none',
  },
  rightElements: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: '#fff', // White color for the icons
    textDecoration: 'none',
    marginRight: '1rem',
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '0.25rem 0.5rem',
    color: '#fff',
    position: 'relative',
    top: '-10px',
    left: '-10px',
  },
  avatar: {
    borderRadius: '50%', // Make the image circular
    height: '40px',
    width: '40px',
    objectFit: 'cover', 
    marginBottom:'1rem'
  },
};

export default Navbar;
