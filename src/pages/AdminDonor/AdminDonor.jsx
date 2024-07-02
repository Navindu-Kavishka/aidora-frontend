// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { FaSearch, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConfirmationModal from '../../components/Admin/ConfirmationModal/ConfirmationModal';
import EditDonorModal from '../../components/Admin/EditDonorModal/EditDonorModal';
import ViewDonorModal from '../../components/Admin/ViewDonorModal/ViewDonorModal';


function AdminDonor() {
  const [donors, setDonors] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedDonor, setSelectedDonor] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [donorToDelete, setDonorToDelete] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/donors', {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem('token')}`
          // }
        });
        setDonors(response.data);
      
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };
    fetchDonors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/donors/${id}`, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      });
      setDonors(donors.filter(donor => donor._id !== id));
      setShowConfirm(false);
      setDonorToDelete(null);
      
    }
     catch (error) {
      console.error(error);
    }
  };
  


  const handleView = (donor) => {
    setSelectedDonor(donor);
    setShowViewModal(true);
  };


  const handleEdit = (donor) => {
    setSelectedDonor(donor);
    setShowEditModal(true);
  };

  const handleSave = async (donor) => {
    console.log("handle save called");
    try {
      await axios.put(`http://localhost:5000/api/donors/${donor._id}`, donor, {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem('token')}`
        // }
      });
      setDonors(donors.map(d => (d._id === donor._id ? donor : d)));
      setSelectedDonor(null);
      setShowEditModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setSelectedDonor(null);
    setShowEditModal(false);
  };


  const confirmDelete = (id) => {
    setDonorToDelete(id);
    setShowConfirm(true);
  };

  const closeConfirm = () => {
    setShowConfirm(false);
    setDonorToDelete(null);
  };



  return (
    <div className="admin-donor">
      <h2>Donor Management</h2>
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
            <th>Name</th>
            <th>NIC</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.length === 0 ? (
            <tr>
              <td colSpan="4">No donors found</td>
            </tr>
          ) : (
            donors.filter(donor => 
                 donor.firstName.toLowerCase().includes(search.toLowerCase()) ||
                 donor.lastName.toLowerCase().includes(search.toLowerCase())
               )
              .map(donor => (
                <tr key={donor._id}>
                  <td>{donor.firstName + " "+donor.lastName}</td>
                  <td>{donor.nic}</td>
                  <td>{donor.email}</td>
                  <td className="actions">
                  <button className="action-button view"  onClick={() => handleView(donor)}>
                    <FaEye className="action-icon" /> <span>View</span>
                  </button>
                    <button className="action-button edit" onClick={() => handleEdit(donor)}>
                      <FaEdit className="action-icon" /> <span>Edit</span>
                    </button>
                    <button className="action-button delete" onClick={() => confirmDelete(donor._id)}>
                      <FaTrash className="action-icon" /> <span>Delete</span>
                    </button>
                  </td>
                </tr>
            ))
          )}
        </tbody>
      </table>

      <ConfirmationModal
          show={showConfirm}
          onClose={closeConfirm}
          onConfirm={() => handleDelete(donorToDelete)}
        />

      <ViewDonorModal
          show={showViewModal}
          onHide={() => setShowViewModal(false)}
          donor={selectedDonor}
        />

        <EditDonorModal
          show={showEditModal}
          onHide={handleCancel}
          donor={selectedDonor}
          onChange={setSelectedDonor}
          onSave={handleSave}
        />

    </div>
  );
}

export default AdminDonor;
