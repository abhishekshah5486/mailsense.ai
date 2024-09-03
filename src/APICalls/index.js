import axios from "axios";
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    }
})

export default axiosInstance;