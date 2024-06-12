/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditDonorModal({ show, onHide, donor, onChange, onSave }) {
  const handleInputChange = (field, value) => {
    const updatedDonor = { ...donor, [field]: value };
    onChange(updatedDonor);
  };

  const handlePhoneChange = (field, value) => {
    const updatedDonor = { 
      ...donor, 
      phoneNumber: { ...donor.phoneNumber, [field]: value } 
    };
    onChange(updatedDonor);
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Donor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {donor ? (
          <Form>
            <Form.Group controlId="formDonorFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={donor.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDonorLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={donor.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDonorEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={donor.email}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formDonorNIC">
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="text"
                value={donor.nic}
                onChange={(e) => handleInputChange('nic', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDonorPhoneCountryCode">
              <Form.Label>Phone Country Code</Form.Label>
              <Form.Control
                type="text"
                value={donor.phoneNumber.countryCode}
                readOnly
              />
            </Form.Group>
            <Form.Group controlId="formDonorPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                value={donor.phoneNumber.number}
                onChange={(e) => handlePhoneChange('number', e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDonorAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={donor.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            </Form.Group>
          </Form>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Discard
        </Button>
        <Button variant="primary" onClick={() => onSave(donor)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditDonorModal;
