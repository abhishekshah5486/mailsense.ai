import React, {useState, useContext} from "react";
import axiosInstance from "./index.js";

// Register a new user
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

// Login an existing user
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

// Logout a current session user
export const logoutUser = async (userId) => {
    try {
        // Need to pass the userId
        const response = await axiosInstance.post(`/users/logout/${userId}`);
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