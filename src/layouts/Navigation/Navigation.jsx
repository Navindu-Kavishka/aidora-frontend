import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

const ResponsiveNavbarSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 480);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 480) {
      setShowSidebar(true);
      setShowOffcanvas(false);
    } else {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = () => {
    // Implement your button click functionality here
  };

  return (
    <div>
      {showSidebar ? (
        <div className="sidebar bg-light p-3" style={{ height: '100vh', overflowY: 'auto' }}>
          <div className="text-center mb-4">
            <img src="src/assets/FundraiserImg/aidora img.png" alt="Logo" style={{ height: '100px', width: '100px' }} />
          </div>
          <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link href="/projects">My Projects</Nav.Link>
            <Nav.Link href="/inquiries">Inquiries</Nav.Link>
            <Nav.Link href="/transactions">Summary</Nav.Link>
            <Nav.Link href="/transactions">Reports</Nav.Link>
            <Nav.Link href="/ratings">Profile</Nav.Link>
            
          </Nav>
        </div>
      ) : (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">FundRaiser Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(true)} />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/projects">My Projects</Nav.Link>
            <Nav.Link href="/inquiries">Inquiries</Nav.Link>
            <Nav.Link href="/transactions">Summary</Nav.Link>
            <Nav.Link href="/transactions">Reports</Nav.Link>
            <Nav.Link href="/ratings">Profile</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}
      <main className={showSidebar ? 'ml-auto' : ''} style={{ marginLeft: showSidebar ? '200px' : '0' }}>
        <Container fluid>
          <h1>My Projects</h1>
          <div style={{ paddingLeft: showSidebar ? '200px' : '0', paddingTop: 0 }}>
            <div className="container mt-5">
              <div className="row mt-3">
                <div className="col" style={{ marginLeft: '30px' }}>
                  <button className="btn btn-success" style={{ backgroundColor: '#037149' }}>Ongoing Projects</button>
                  <button className="btn btn-success mx-2" style={{ backgroundColor: '#037149' }}>Completed Projects</button>
                  <button className="btn btn-success" style={{ backgroundColor: '#037149' }}>Cancelled Projects</button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex align-items-center justify-content-center" style={{ marginLeft: '30px', marginTop: '20px' }}>
                  <button onClick={handleButtonClick} className="btn btn-success" style={{ height: '160px', width: '250px', fontSize: '60px', backgroundColor: '#037149' }}>+</button>
                </div>
              </div>
              <div className="row mt-3" style={{ marginRight: '30px' }}>
                <div className="col" style={{ marginLeft: '30px' }}>
                  <div className="card h-100">
                    <img src="src/J.jpg" className="card-img-top" alt="Card 1" />
                    <div className="card-body text-center">
                      <p className="card-text">Status: Inspection Pending<br />Project No. 123556<br />Site Location: 15A, ABC Street, SomeCity</p>
                      <button className="btn btn-success" style={{ backgroundColor: '#037149' }}>View Project</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="src/J.jpg" className="card-img-top" alt="Card 2" />
                    <div className="card-body text-center">
                      <p className="card-text">Status: Inspection Pending<br />Project No. 123556<br />Site Location: 15A, ABC Street, SomeCity</p>
                      <button className="btn btn-success" style={{ backgroundColor: '#037149' }}>View Project</button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="src/OIP (1).jpg" className="card-img-top" alt="Card 3" />
                    <div className="card-body text-center">
                      <p className="card-text">Status: Inspection Pending<br />Project No. 123556<br />Site Location: 15A, ABC Street, SomeCity</p>
                      <button className="btn btn-success" style={{ backgroundColor: '#037149' }}>View Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default ResponsiveNavbarSidebar;
