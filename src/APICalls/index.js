import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
        'Content-Type': 'application/json',
        'Authorization':  localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : ''
    }
})

export default axiosInstance;