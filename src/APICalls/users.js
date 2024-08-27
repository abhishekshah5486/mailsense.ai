import React from "react";
import axiosInstance from "./index.js";

export const registerUser = async (value) => {
    try {
        const response = await axiosInstance.post('/users/register', value);
        return response.data;
    } catch (err) {
        if (err.response) {
            return err.response.data;
        }
        return {
            success: false,
            message: 'An error occurred'
        }
    }
}

export const loginUser = async (value) => {
    try {
        const response = await axiosInstance.post('/users/login', value);
        return response.data;
    } catch (err) {
        if (err.response) {
            return err.response.data;
        }
        return {
            success: false,
            message: 'An error occurred'
        }
    }
}