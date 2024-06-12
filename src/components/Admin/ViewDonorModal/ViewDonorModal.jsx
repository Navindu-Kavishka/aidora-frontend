/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ViewDonorModal({ show, onHide, donor }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>View Donor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {donor ? (
          <>
            {/* <p><strong>ID:</strong> {donor._id}</p> */}
            <p><strong>Name:</strong> {donor.firstName+" "+donor.lastName}</p>
            <p><strong>Email:</strong> {donor.email}</p>
            <p><strong>NIC:</strong> {donor.nic}</p>
            <p><strong>Phone Number:</strong> {donor.phoneNumber.countryCode} {donor.phoneNumber.number}</p>
            <p><strong>Address:</strong> {donor.address}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewDonorModal;
