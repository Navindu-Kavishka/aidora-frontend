import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Default base URL

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;
