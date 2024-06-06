import React, { useState } from 'react';

const SideBar = () => {
  const [activeItem, setActiveItem] = useState('Inquiries');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const linkStyles = (item) => ({
    marginTop: '15px',
    backgroundColor: activeItem === item ? '#037149' : 'transparent',
    color: activeItem === item ? 'white' : 'inherit',
    cursor: 'pointer'
  });

  return (
    <header>
    
      <nav
        id="sidebarMenu"
        style={{
          height: '100vh',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 2px 10px 0 rgba(0, 0, 0, 0.05)',
          width: '240px',
          zIndex: 600,
          backgroundColor: 'white',
          overflowY: 'auto'
        }}
      >
        <div className="position-sticky" style={{ top: 0, overflowX: 'hidden', overflowY: 'auto' }}>
          <div className="list-group list-group-flush mx-3 mt-4">
           
            <img
              src="src/assets/FundraiserImg/aidora img.png"
              alt="Logo"
              style={{
                marginRight: '20px',
                height: '100px',
                width: '100px',
                marginBottom: '10px',
                marginLeft: '45px'
              }}
            />
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
              onClick={() => handleItemClick('My Projects')}
              style={linkStyles('My Projects')}
            >
              <i className="fas fa-tachometer-alt fa-fw me-3" style={{ marginLeft: '5px' }}></i>
              <span>My Projects</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              onClick={() => handleItemClick('Inquiries')}
              style={linkStyles('Inquiries')}
            >
              <i className="fas fa-chart-area fa-fw me-3"></i>
              <span>Inquiries</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              onClick={() => handleItemClick('Transactions')}
              style={linkStyles('Transactions')}
            >
              <i className="fas fa-lock fa-fw me-3"></i>
              <span>Transactions</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              onClick={() => handleItemClick('Rating And Reviews')}
              style={linkStyles('Rating And Reviews')}
            >
              <i className="fas fa-chart-line fa-fw me-3"></i>
              <span>Rating And Reviews</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              onClick={() => handleItemClick('Troubleshoot')}
              style={linkStyles('Troubleshoot')}
            >
              <i className="fas fa-chart-pie fa-fw me-3"></i>
              <span>Troubleshoot</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              onClick={() => handleItemClick('Profile')}
              style={{ marginTop: '220px', ...linkStyles('Profile') }}
            >
              <i className="fas fa-chart-bar fa-fw me-3"></i>
              <span>Profile</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              onClick={() => handleItemClick('Settings')}
              style={linkStyles('Settings')}
            >
              <i className="fas fa-globe fa-fw me-3"></i>
              <span>Settings</span>
            </a>
          </div>
        </div>
      </nav>
     
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        style={{ marginLeft: '240px' }}
      >
       
        <div className="container-fluid">
          
          <ul className="navbar-nav ms-auto d-flex flex-row">
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="src/b.jpg"
                  className="rounded-circle"
                  height="40px"
                  alt="Avatar"
                  loading="lazy"
                  width="40px"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
       
      </nav>
     
    </header>
  );
};

export default SideBar;
