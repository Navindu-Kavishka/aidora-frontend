// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

function AddDonor() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donors', { name, email }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      // Optionally, you can update the donor list here after successful addition
      // Or navigate to the donor list page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add New Donor</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Add Donor</button>
      </form>
    </div>
  );
}

export default AddDonor;
