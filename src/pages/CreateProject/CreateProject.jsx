import React from 'react'
import ProgressBar from '../../layouts/ProgressBar/ProgressBar';
import Form from '../../components/Form/Form'

function CreateProject() {
  return (
    <div style={{ margin: 0, padding: 0, height: '100%', fontFamily: 'Arial, sans-serif' }}>
  {/* Navbar */}
  <nav style={{ width:'100%', zIndex: 2 }} id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
   {/* Container wrapper */}
   <div className="container-fluid d-flex justify-content-center align-items-center">
          {/* Centered text */}
          <h1 className="navbar-brand mb-0" style={{marginLeft:'620px',fontSize:'24px',fontWeight:'bold'}}>Create Projects</h1>
      <ul className="navbar-nav ms-auto d-flex flex-row">
        {/* Notification dropdown */}
        {/* Avatar */}
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
        </li>
      </ul>
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
    <div>
        
      <ProgressBar/>
    </div>
    <Form/>
    </div>
    
  )
}

export default CreateProject;
