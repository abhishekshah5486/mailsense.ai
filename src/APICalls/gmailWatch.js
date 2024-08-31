import axiosInstance from "./index.js";

export const removeUserAccountFromGmailWatchByEmail = async (email) => {
    try {
        const response = await axiosInstance.delete('/gmail/watch/remove', {
            email: email
        });
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