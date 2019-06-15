import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        authorization: localStorage.getItem('token'),
    },
})

export default instance;