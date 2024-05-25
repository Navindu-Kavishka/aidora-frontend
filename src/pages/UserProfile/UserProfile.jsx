import React from 'react'

function EditProfile() {
  return (
    
        <div style={{ margin: 0, padding: 0, height: '100%', fontFamily: 'Arial, sans-serif' }}>
      {/* Navbar */}
      <nav style={{ width:'100%', zIndex: 2 }} id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        {/* Container wrapper */}
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a href="#">
            <img
              src="src/logo.png" 
              alt="Logo"
              style={{ height: '80px', width: '80px', marginRight: '10px', marginLeft: '30px' }} // Adjust the height and margin as needed
            />
          </a>
          {/* Centered text */}
          <h1 className="navbar-brand mb-0 mx-auto text-center" style={{ fontSize: '28px', fontWeight: 'bold' }}>User Profile</h1>
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
                  src="src/editprofile.png"
                  className="rounded-circle"
                  height="50px"
                  alt="Avatar"
                  loading="lazy"
                  width="50px"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
     
            <div className="container rounded bg-white mt-5 mb-5" style={{minHeight:'100vh'}}>
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                            <span className="font-weight-bold">Edogaru</span>
                            <span className="text-black-50">edogaru@mail.com.my</span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right" style={{marginTop:'3rem'}}>
                        <div className="p-3 py-5">
                            <h4 className="text-right">Edit Profile</h4>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" style={{ boxShadow: 'none', borderColor: '#BA68C8' }} />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" style={{ boxShadow: 'none', borderColor: '#BA68C8' }} />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12" >
                                    <label className="labels">NIC</label>
                                    <input type="text" className="form-control" placeholder="National Identification Number" style={{ boxShadow: 'none', borderColor: '#BA68C8' }} />
                                </div>
                                <div className="col-md-12" style={{marginTop:'1rem'}}>
                                    <label className="labels">Email Address</label>
                                    <input type="email" className="form-control" placeholder="Email-Address" style={{ boxShadow: 'none', borderColor: '#BA68C8' }} />
                                </div>
                                
                                <div className="col-md-12" style={{marginTop:'1rem'}}>
                                    <label className="labels">Address</label>
                                    <input type="text" className="form-control" placeholder="Address" style={{ boxShadow: 'none', borderColor: '#BA68C8' }} />
                                </div>
                                <div className="col-md-12" style={{marginTop:'1rem'}}>
                                    <label className="labels">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Phone Number" style={{ boxShadow: 'none', borderColor: '#BA68C8' }} />
                                </div>
                               
                            </div>
                            
                            <div className="d-flex justify-content-between mt-5 text-center">
    <button className="btn btn-primary profile-button" type="button">Cancel</button>
    <button className="btn btn-primary profile-button" type="button">Save</button>
</div>

</div>
                    </div>
                    <div className="col-md-4" style={{marginTop:'3rem'}}>
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience" style={{fontSize:'24px'}}>
                                <span>Security Information</span>
                               
                            </div><br />
                            <div className="col-md-12">
                                <label className="labels">Current Password</label>
                                <input type="Password" className="form-control" placeholder="Current Password" style={{ boxShadow: 'none', borderColor: '#BA68C8' }} />
                            </div>
                            <div className="col-md-12" style={{marginTop:'1rem'}}>
                                <label className="labels">New Password</label>
                                <input type="Password" className="form-control" placeholder="New Password" style={{ boxShadow: 'none', borderColor: '#BA68C8'}} />
                        </div>
                        <div className="col-md-12" style={{marginTop:'1rem'}}>
                                <label className="labels">Retype Password</label>
                                <input type="Password" className="form-control" placeholder="Retype Password" style={{ boxShadow: 'none', borderColor: '#BA68C8'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default EditProfile;