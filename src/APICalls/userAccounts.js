import axiosInstance from "./index.js";

export const retrieveAllUserAccountsByUserId = async (userId) => {
    try {
        const response = await axiosInstance.get(`/users/accounts/${userId}`);
        return response.data;
    } catch (err) {
        if (err.response) {
            return err.response.data;
        }
        return {
            success: false,
            message: 'An error occurred',
            error: err.message
        }
    } 
}