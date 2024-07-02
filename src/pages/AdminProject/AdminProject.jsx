import  { useState } from 'react';
import './AdminProject.css';
import { FaSearch, FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const initialData = [
  { id: '001', name: 'water project', status: 'Ongoing' },
    { id: '002', name: 'sample project', status: 'Unverified' },
    { id: '003', name: 'test project', status: 'Completed' },
];

function AdminProject() {
  const [projects, setProjects] = useState(initialData);
  const [search, setSearch] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setProjects(projects.map(project =>
      project.id === id ? { ...project, status: newStatus } : project
    ));
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(fundraiser => fundraiser.id !== id));
  };


  return (
    <div className="App">
      <header>
        <div className="profile-icon"></div>
      </header>
      <main>
        <div className="add-project">
          <button>+ ADD a Project</button>
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
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.filter(project => 
              project.name.toLowerCase().includes(search.toLowerCase())
            ).map(project => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>
                <select
                  value={project.status}
                  onChange={(e) => handleStatusChange(project.id, e.target.value)}
                  className={`status-${project.status.toLowerCase()}`}
                >
                  <option value="Ongoing">Ongoing</option>
                  <option value="Unverified">Unverified</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
                <td className="actions">
                  <button className="action-button view">
                    <FaEye className="action-icon" /> <span>View</span>
                  </button>
                  <button className="action-button edit">
                    <FaEdit className="action-icon" /> <span>Edit</span>
                  </button>
                  <button className="action-button delete" onClick={() => handleDelete(project.id)}>
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

export default AdminProject;
