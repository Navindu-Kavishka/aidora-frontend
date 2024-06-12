/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react';

function DonorDetails({ donor }) {
  return (
    <div>
      <h2>{donor.name}</h2>
      <p>Email: {donor.email}</p>
      <p>Phone Number: {donor.phoneNumber.countryCode} {donor.phoneNumber.number}</p>
      <p>Address: {donor.address}</p>
    </div>
  );
}

export default DonorDetails;