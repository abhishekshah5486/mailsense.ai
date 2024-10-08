import React, {useRef, useContext} from 'react';
import googleIcon from '../../Assets/Images/google.png';
import outlookIcon from '../../Assets/Icons/outlook-icon.svg';
import { initiateOAuth2Flow } from '../../APICalls/gmailAuth';
import UserContext from '../../Context/UserContext';
import './AddAccount.css';

function AddAccount() {
    const { currentUser } = useContext(UserContext);
    const addAccountRef = useRef();
    const handleAddGmailAccount = async () => {
        try {
            const response = await initiateOAuth2Flow(currentUser.userId);
            if (response.success) {
                const redirectUrl = response.googleOAuthUrl;
                window.location.href = redirectUrl;
            }
            else alert(`Failed to initiate OAuth flow: ${response.message}`);
        } catch (err) {
            console.error('Error during OAuth flow initiation:', err);
            alert('An unexpected error occurred while trying to initiate the OAuth flow. Please try again.'); 
        }
    }

    return (
        <div className="add-gmail-outlook-account" ref={addAccountRef}>
            <h2 className="title">Add accounts to get started.</h2>
            <div className="add-gmail-account" onClick={handleAddGmailAccount}>
                <img src={googleIcon} alt="" />
                <h2>Add Gamil Account</h2>
            </div>
            <div className="add-outlook-account">
                <img src={outlookIcon} alt="" />
                <h2>Add Outlook Account</h2>
            </div>
        </div>
    )
}

export default AddAccount;
