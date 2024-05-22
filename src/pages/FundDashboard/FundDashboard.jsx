import React from 'react';
import SideBar from '../../layouts/SideBar/SideBar';
import { useNavigate } from 'react-router-dom';

const FundDashboard = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/create'); // Navigate to the next page
    };
    return (
        <div style={{ height: '100%' }}>
            {/* Sidebar */}
            <SideBar />
            {/* Sidebar */}

            {/* Additional Section */}
            <div style={{ height: '100%', marginLeft: '240px', paddingTop: 0, marginTop: 0 }}>
                {/* Navbar */}
                <nav style={{ marginLeft: '240px' }} id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Right links */}
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

                {/* Additional Section Content */}
                <div style={{ height: '100%', marginLeft: '240px', padding: 0, margin: 0 }} className="container mt-5">
                    <div className="row" >
                        <div className="col" style={{marginTop:'50px',marginLeft:'30px'}}>
                            <h3>My Projects</h3>
                        </div>
                    </div>
                    <div className="row mt-3" >
                        <div className="col" style={{marginLeft:'30px'}}>
                            <button className="btn btn-success" style={{backgroundColor:'#037149'}}>Ongoing Projects</button>
                            <button className="btn btn-success mx-2" style={{backgroundColor:'#037149'}}>Completed Projects</button>
                            <button className="btn btn-success" style={{backgroundColor:'#037149'}}>Cancaled Projects</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                    <div className="col d-flex align-items-center justify-content-center" style={{ marginLeft: '30px',marginTop:'20px'}}>
    <button onClick={handleButtonClick} className="btn btn-success" style={{height:'160px',width:'250px',fontSize: '60px',backgroundColor:'#037149'}}>+</button>
</div>

                    </div>
                    <div className="row mt-3" style={{marginRight:'30px'}}>
    <div className="col" style={{ marginLeft: '30px' }}>
        <div className="card">
        <div className="card h-100">
            <img src="src/J.jpg" className="card-img-top" alt="Card 1" />
            <div className="card-body text-center">
                
                <p className="card-text">Status : Inpection Pending
Project No. 123556
Site Location : 15A, ABC Street, SomeCity</p>
                <button className="btn btn-success" style={{backgroundColor:'#037149'}}>View Project</button>
            </div>
        </div>
    </div>
    </div>
    <div className="col">
        <div className="card">
        <div className="card h-100">
            <img src="src/J.jpg" className="card-img-top" alt="Card 2" />
            <div className="card-body text-center">
                
                <p className="card-text">Status : Inpection Pending
Project No. 123556
Site Location : 15A, ABC Street, SomeCity</p>
                <button className="btn btn-success" style={{backgroundColor:'#037149'}}>View Project</button>
            </div>
        </div>
    </div>
    </div>
    <div className="col">
        <div className="card">
        <div className="card h-100">
            <img src="src/OIP (1).jpg" className="card-img-top" alt="Card 3" />
            <div className="card-body text-center">
                
                <p className="card-text">Status : Inpection Pending
Project No. 123556
Site Location : 15A, ABC Street, SomeCity</p>
                <button className="btn btn-success" style={{backgroundColor:'#037149'}}>View Project</button>
            </div>
        </div>
    </div>
</div>

                    </div>
                </div>
                {/* Additional Section Content */}
            </div>
            {/* Additional Section */}
        </div>
    );
};

export default FundDashboard;
