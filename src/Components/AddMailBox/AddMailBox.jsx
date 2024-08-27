import React, { useRef } from 'react';
import './AddMailBox.css';
import EmailIcon from '../../Assets/Icons/EmailIcon.svg';
import AddIcon from '../../Assets/Icons/AddIcon.svg';
import googleIcon from '../../Assets/Images/google.png';
import outlookIcon from '../../Assets/Icons/outlook-icon.svg';

export default function AddMailBox() {
    const mailBoxRef = useRef();
    const addAccountRef = useRef();
    const handleMailBoxVisibility = () => {
        mailBoxRef.current.style.display = 'none';
        addAccountRef.current.style.display = 'flex';
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
                <div className="add-gmail-account">
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
