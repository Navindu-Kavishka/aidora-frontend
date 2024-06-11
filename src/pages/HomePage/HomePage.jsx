import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from '../../components/Navbar/Navbar';
import '../../index.css'

function HomePage() {
  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    
  };

  const contentContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0',
    width: '100%',
    margin: '0',
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const carouselContainerStyle = {
    width: '100%',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: '20px',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    border: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  };

  const linkStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#037149',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    border: 'none',
    outline: 'none',
    margin: 0,
    boxSizing: 'border-box',
  };

  const centeredTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    border: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  };

  return (
    <div style={pageContainerStyle}>
      <Navbar />
      <div style={contentContainerStyle}>
        <div style={carouselContainerStyle}>
        <Carousel 
  autoPlay 
  interval={3000} 
  infiniteLoop 
  showThumbs={false} 
  showStatus={false} 
  style={{ 
    width: '100%', 
    height: '100px' // Add this line to set the height
  }}
>
  {/* Your carousel items remain the same */}
  <div style={{ ...imageContainerStyle, width: '100%', height:'500px'}}>
    <img src="src/assets/donorImg/home01.jpg" alt="Image 1" style={{ ...imageStyle, width: '100%' }} />
    <p className="legend">Change the world, one step at a time</p>
  </div>
  <div style={{ ...imageContainerStyle, width: '100%', height:'500px' }}>
    <img src="src/assets/donorImg/home02.jpg" alt="Image 2" style={{ ...imageStyle, width: '100%' }} />
    <p className="legend">Lend a hand! Support our cause.</p>
  </div>
  <div style={{ ...imageContainerStyle, width: '100%', height:'500px' }}>
    <img src="src/assets/donorImg/home03.jpg" alt="Image 3" style={{ ...imageStyle, width: '100%' }} />
    <p className="legend">Make your mark! Volunteer with us.</p>
  </div>
</Carousel>

          <h2>Uniting Hearts Transforming Lives....</h2>
          <p>
            Welcome to AIDORA, a platform dedicated to extending compassion and support to the resilient
            communities of Sri Lanka. Our website serves as a beacon of hope, connecting donors, volunteers, and
            supporters from around the world with meaningful opportunities to make a difference. Through collaborative
            efforts, we strive to address the diverse needs of Sri Lankan communities, ranging from disaster relief and
            education to healthcare and sustainable development initiatives.
          </p>
          <p>
            Join us on our journey of compassion and empowerment as we work together to rebuild lives, restore hope, and
            create lasting positive change in Sri Lanka.
          </p>
          <div></div>
          <a href="CompletedProject.jsx" style={linkStyle}>Completed Projects &rarr;</a>
          <div style={{ position: 'relative', width: '100%' }}>
            <img src='src/assets/donorImg/HomePic.jpg' alt='Top Centered' style={imgStyle} />
            <div style={centeredTextStyle}>
              Shaping Futures Empowering Communities Through Compassion
            </div>
            <h3>Join With Us</h3>
            <p>
              Join us on our journey of compassion and empowerment as we work together to rebuild lives, restore hope, and
              create lasting positive change in Sri Lanka.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
