/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

function ViewDonor({ donor }) {
  return (
    <div>
      <h2>Donor Details</h2>
      <p>Name: {donor.name}</p>
      <p>Email: {donor.email}</p>
    </div>
  );
}

export default ViewDonor;
