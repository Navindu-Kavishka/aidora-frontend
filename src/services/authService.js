import axios from './axiosConfig';

const register = (userData) => {
    return axios.post('/users/register', userData);
};

const login = (userData) => {
    return axios.post('/users/login', userData);
};

const verifyAccount = (token) => {
    return axios.post('/users/verify', {}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default {
    register,
    login,
    verifyAccount
};
