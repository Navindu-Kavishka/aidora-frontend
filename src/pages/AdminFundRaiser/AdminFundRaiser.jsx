import  { useState } from 'react';
import './AdminFundRaiser.css';
import { FaSearch, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const initialData = [
  { id: '001', name: 'Nalanda Foundation', email: 'fund1@mail.com' },
  { id: '002', name: 'Senahasa Foundation', email: 'fund2@mail.com' },
  { id: '003', name: 'PP Society', email: 'fund3@mail.com' },
];

function AdminFundRaiser() {
  const [fundraisers, setFundraisers] = useState(initialData);
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    setFundraisers(fundraisers.filter(fundraiser => fundraiser.id !== id));
  };

  return (
    <div className="App">
      <header>
        <div className="profile-icon"></div>
      </header>
      <main>
        <div className="add-fundraiser">
          <button>+ ADD a FundRaiser</button>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button><FaSearch className="search-icon" /></button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fundraisers.filter(fundraiser => 
              fundraiser.name.toLowerCase().includes(search.toLowerCase())
            ).map(fundraiser => (
              <tr key={fundraiser.id}>
                <td>{fundraiser.id}</td>
                <td>{fundraiser.name}</td>
                <td>{fundraiser.email}</td>
                <td className="actions">
                  <button className="action-button view">
                    <FaEye className="action-icon" /> <span>View</span>
                  </button>
                  <button className="action-button edit">
                    <FaEdit className="action-icon" /> <span>Edit</span>
                  </button>
                  <button className="action-button delete" onClick={() => handleDelete(fundraiser.id)}>
                    <FaTrash className="action-icon" /> <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminFundRaiser;
