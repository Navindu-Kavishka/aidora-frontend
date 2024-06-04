import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBCardText,
  MDBCardFooter
} from 'mdb-react-ui-kit';

const OngoingProjects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { id: 1, category: 'Water & Sanitation', title: 'PURE WATER PROJECT', image: 'path/to/image1.jpg' },
    { id: 2, category: 'Welfare', title: 'WATER SUBSIDIZED PROJECT', image: 'path/to/image2.jpg' },
    { id: 3, category: 'Education', title: 'PURE WATER PROJECT', image: 'path/to/image3.jpg' },
    // Add more projects as needed
  ];

  const categories = ['All', 'Education', 'Welfare', 'Water & Sanitation'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <MDBContainer className="my-5">
      <h2 className="text-center mb-4">Ongoing Projects</h2>
      <div className="text-center mb-4">
        {categories.map(category => (
          <MDBBtn
            color={filter === category ? 'danger' : 'light'}
            onClick={() => setFilter(category)}
            className="mx-1"
            key={category}
          >
            {category}
          </MDBBtn>
        ))}
      </div>
      <MDBRow>
        {filteredProjects.map(project => (
          <MDBCol md="4" className="mb-4" key={project.id}>
            <MDBCard>
              <MDBCardImage src={project.image} position="top" alt={project.title} />
              <MDBCardBody>
                <MDBCardTitle>{project.title}</MDBCardTitle>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn color="success">View Project</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default OngoingProjects;
