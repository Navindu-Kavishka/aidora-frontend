import axios from './axiosConfig';

const createProject = (projectData, token) => {
    return axios.post('/projects', projectData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

const getProjects = () => {
    return axios.get('/projects');
};

const getProjectById = (id) => {
    return axios.get(`/projects/${id}`);
};

const updateProjectStatus = (id, status, token) => {
    return axios.put(`/projects/${id}/status`, { status }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default {
    createProject,
    getProjects,
    getProjectById,
    updateProjectStatus
};
