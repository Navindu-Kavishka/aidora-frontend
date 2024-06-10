import axios from './axiosConfig';

const donate = (donationData, token) => {
    return axios.post('/donations', donationData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default {
    donate
};
