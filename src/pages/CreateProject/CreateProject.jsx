import React from 'react';
import ProgressBar from '../../layouts/ProgressBar/ProgressBar';
import Form from '../../components/Form/Form';

function CreateProject() {
  return (
    <div className="create-project-page" style={createProjectPageStyle}>
      
      <nav className="create-project-navbar navbar navbar-expand-lg navbar-light bg-white fixed-top" style={navbarStyle}>
      
        <div className="container-fluid d-flex justify-content-between align-items-center">
          
          <a href="#" className="d-flex align-items-center">
            <img
              src="src/assets/FundraiserImg/aidora img.png" 
              alt="Logo"
              className="create-project-logo"
              style={logoStyle} 
            />
          </a>
          
          <h1 className="navbar-brand mb-0 create-project-title" style={navbarTitleStyle}>
            Create Projects
          </h1>
          <ul className="navbar-nav ms-auto d-flex flex-row create-project-nav-items" style={{ marginBottom: '0' }}>
          
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
                  src="src/assets/FundraiserImg/b.jpg"
                  className="rounded-circle create-project-avatar"
                  height="50px"
                  alt="Avatar"
                  loading="lazy"
                  width="50px"
                />
              </a>
            </li>
          </ul>
        </div>
        
      </nav>
    
      
      
      <div className="create-project-content" style={contentSectionStyle}>
        
        <div style={progressBarContainerStyle}>
          <ProgressBar />
        </div>

        <div id="create-project-form-container" style={formContainerStyle}>
          <Form />
        </div>
      </div>
    </div>
  );
}

const createProjectPageStyle = {
  margin: 0,
  padding: 0,
  height: '100vh',
  fontFamily: 'Arial, sans-serif',
  display: 'flex',
  flexDirection: 'column',
};

const navbarStyle = {
  width: '100%',
  zIndex: 2,
  position: 'relative', 
};

const logoStyle = {
  height: '80px',
  width: '80px',
  marginRight: '10px',
  marginLeft: '30px',
};

const navbarTitleStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'absolute', 
  left: '50%',
  transform: 'translateX(-50%)', 
  margin: 0,
};

const contentSectionStyle = {
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1, 
};

const progressBarContainerStyle = {
  width: '100%',
  maxWidth: '800px',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0',
};

const formContainerStyle = {
  width: '100%',
  maxWidth: '800px',
  textAlign: 'center',
  
};

export default CreateProject;
