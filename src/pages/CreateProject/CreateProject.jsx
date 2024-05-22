import React from 'react';
import ProgressBar from '../../layouts/ProgressBar/ProgressBar';
import Form from '../../components/Form/Form';

function CreateProject() {
  return (
    <div style={{ margin: 0, padding: 0, height: '100%', fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <nav style={{ width:'100%', zIndex: 2 }} id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/* Container wrapper */}
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a href="#">
            <img
              src="src/aidora img.png" // Replace with the path to your logo
              alt="Logo"
              style={{ height: '60px', width: '60px', marginRight: '10px', marginLeft: '10px' }} // Adjust the height and margin as needed
            />
          </a>
          {/* Centered text */}
          <h1 className="navbar-brand mb-0 mx-auto text-center" style={{ fontSize: '28px', fontWeight: 'bold' }}>Create Projects</h1>
<ul className="navbar-nav ms-auto d-flex flex-row" style={{ marginBottom: '0' }}>

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
      <div className="container mt-5 pt-5">
        <ProgressBar />
        <Form />
      </div>
    </div>
  );
}

export default CreateProject;
