import React, { useRef, useContext } from 'react';
import './AddMailBox.css';
import EmailIcon from '../../Assets/Icons/EmailIcon.svg';
import AddIcon from '../../Assets/Icons/AddIcon.svg';
import googleIcon from '../../Assets/Images/google.png';
import outlookIcon from '../../Assets/Icons/outlook-icon.svg';
import { initiateOAuth2Flow } from '../../APICalls/gmailAuth';
import UserContext from '../../Context/UserContext';

export default function AddMailBox() {
    const {currentUser} = useContext(UserContext);
    const mailBoxRef = useRef();
    const addAccountRef = useRef();
    const handleMailBoxVisibility = () => {
        mailBoxRef.current.style.display = 'none';
        addAccountRef.current.style.display = 'flex';
    }

    const handleAddGmailAccount = async () => {
        try {
            const response = await initiateOAuth2Flow(currentUser.id);
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
        <div>
            <div className='add-mailbox-container' ref={mailBoxRef}> 
                <div className="email-vector-img">
                    <img src={EmailIcon} alt="" />
                </div>
                <div className="title">
                    <span>Add Email Account</span>
                </div>
                <p className="subtitle">Connect your email accounts to supercharge your campaigns with AI-driven insights and automation.</p>
                <button className='add-mailbox-btn' onClick={handleMailBoxVisibility}><img src={AddIcon} alt="" />Add New Mailbox</button>
            </div>
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
        </div>
    )
}
