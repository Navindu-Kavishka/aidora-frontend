import React from 'react';
// import { Navbar } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <img
          src='src/assets/donorImg/aboutUs.jpg'
          alt='Top Centered'
          style={{
            width: '100%',
            height: '500px',
            marginBottom: '20px',
          }}
        />
      </div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2>Our Mission</h2>
          <p style={{ fontSize: '18px' }}>
          To facilitate meaningful engagement and support for charitable initiatives that uplift and empower the people of Sri Lanka.

        At the heart of our mission is a commitment to creating a positive impact in the lives of Sri Lankans. We strive to foster an environment
        where charitable efforts can thrive, ensuring that every initiative we support is meaningful, effective, and transformative. Our goal is to 
        connect donors, volunteers, and communities, creating a powerful network of support that drives real change. By facilitating these connections, we
        help ensure that resources are directed where they are needed most, maximizing the impact of every effort to uplift and empower individuals across Sri Lanka.
          </p>
        </section>
        <section style={{ marginBottom: '40px' }}>
          <h2>Our Vision</h2>
          <p style={{ fontSize: '18px' }}>
          A Sri Lanka where every individual has access to the resources and opportunities they need to thrive and succeed.

We envision a future where no Sri Lankan is left behind. In our ideal Sri Lanka, every person has access to essential resources such as education, healthcare, and
 economic opportunities. We believe that with the right support, every individual can overcome challenges and achieve their full potential. Our vision is not just about 
 addressing immediate needs but also about creating sustainable, long-term growth and development. We aim to build a society where empowerment and opportunity are the norms, leading 
 to a thriving, resilient, and prosperous nation.
          </p>
        </section>
        <section style={{ marginBottom: '40px' }}>
         
         
        </section>
        <section style={{ marginBottom: '40px' }}>
          <h1>Get Involved</h1>
          <p style={{ fontSize: '26px' }}>
            Want to be part of our mission? Here’s how you can contribute
          </p>
          <ul style={{ listStyleType: 'none', padding: '0'  }}>
            <li style={{ fontSize: '18px' }}>
              <strong>Donate:</strong> Your generosity fuels our work. Every contribution matters, no matter how small.
            </li>
            <li style={{ fontSize: '18px' }}>
              <strong>Volunteer:</strong> Join our team of dedicated volunteers. Your time and skills can make a significant difference.
            </li>
            <li style={{ fontSize: '18px' }}>
              <strong>Spread the Word:</strong> Follow us on social media, share our stories, and inspire others to join our cause.
            </li>
          </ul>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUs;
