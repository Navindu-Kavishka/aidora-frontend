// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaSearch, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
// import './AdminDonor.css';

// function AdminDonor() {
//   const [donors, setDonors] = useState([]);
//   const [search, setSearch] = useState('');
//   const [selectedDonor, setSelectedDonor] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newDetails, setNewDetails] = useState({});
  
//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/users');
//         setDonors(response.data);
//       } catch (error) {
//         console.error('Error fetching donors:', error);
//       }
//     };

//     fetchDonors();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/users/${id}`);
//       setDonors(donors.filter(donor => donor._id !== id));
//     } catch (error) {
//       console.error('Error deleting donor:', error);
//     }
//   };

//   const handleView = (donor) => {
//     setSelectedDonor(donor);
//   };

//   const handleEdit = (donor) => {
//     setIsEditing(true);
//     setSelectedDonor(donor);
//     setNewDetails(donor);
//   };

//   const handleSave = async () => {
//     try {
//       await axios.put(`http://localhost:5000/api/users/${selectedDonor._id}`, newDetails);
//       setDonors(donors.map(donor => donor._id === selectedDonor._id ? newDetails : donor));
//       setIsEditing(false);
//       setSelectedDonor(null);
//     } catch (error) {
//       console.error('Error updating donor:', error);
//     }
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setSelectedDonor(null);
//   };

//   return (
//     <div className="App">
//       <header>
//         <div className="profile-icon"></div>
//       </header>
//       <main>
//         <div className="add-donor">
//           <button>+ ADD a Donor</button>
//         </div>
//         <div className="search-bar">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button><FaSearch className="search-icon" /></button>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {donors.filter(donor => 
//               donor.name.toLowerCase().includes(search.toLowerCase())
//             ).map(donor => (
//               <tr key={donor._id}>
//                 <td>{donor._id}</td>
//                 <td>{donor.firstName} {donor.lastName}</td>
//                 <td>{donor.email}</td>
//                 <td className="actions">
//                   <button className="action-button view" onClick={() => handleView(donor)}>
//                     <FaEye className="action-icon" /> <span>View</span>
//                   </button>
//                   <button className="action-button edit" onClick={() => handleEdit(donor)}>
//                     <FaEdit className="action-icon" /> <span>Edit</span>
//                   </button>
//                   <button className="action-button delete" onClick={() => handleDelete(donor._id)}>
//                     <FaTrash className="action-icon" /> <span>Delete</span>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>

//       {selectedDonor && !isEditing && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Donor Details</h2>
//             <p><strong>ID:</strong> {selectedDonor._id}</p>
//             <p><strong>Name:</strong> {selectedDonor.firstName} {selectedDonor.lastName}</p>
//             <p><strong>Email:</strong> {selectedDonor.email}</p>
//             <button onClick={() => setSelectedDonor(null)}>Close</button>
//           </div>
//         </div>
//       )}

//       {isEditing && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Edit Donor Details</h2>
//             <div>
//               <label>First Name:</label>
//               <input
//                 type="text"
//                 value={newDetails.firstName}
//                 onChange={(e) => setNewDetails({ ...newDetails, firstName: e.target.value })}
//               />
//             </div>
//             <div>
//               <label>Last Name:</label>
//               <input
//                 type="text"
//                 value={newDetails.lastName}
//                 onChange={(e) => setNewDetails({ ...newDetails, lastName: e.target.value })}
//               />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input
//                 type="email"
//                 value={newDetails.email}
//                 onChange={(e) => setNewDetails({ ...newDetails, email: e.target.value })}
//               />
//             </div>
//             <button onClick={handleSave}>Save</button>
//             <button onClick={handleCancel}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminDonor;
