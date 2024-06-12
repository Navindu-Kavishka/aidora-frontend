/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function DonorEdit({ donor, onSave }) {
  const [name, setName] = useState(donor.name);
  const [email, setEmail] = useState(donor.email);
  const [phoneNumber, setPhoneNumber] = useState(donor.phoneNumber);
  const [address, setAddress] = useState(donor.address);

  const handleSave = () => {
    onSave({ name, email, phoneNumber, address });
  };

  return (
    <div>
      <h2>Edit Donor</h2>
      <form>
        <babel>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </babel>
        <babel>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </babel>
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber.countryCode} onChange={(e) => setPhoneNumber({ countryCode: e.target.value, number: phoneNumber.number })} />
          <input type="tel" value={phoneNumber.number} onChange={(e) => setPhoneNumber({ countryCode: phoneNumber.countryCode, number: e.target.value })} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}

export default DonorEdit;