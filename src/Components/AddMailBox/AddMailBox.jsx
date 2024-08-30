import React, { useRef, useContext } from 'react';
import './AddMailBox.css';
import EmailIcon from '../../Assets/Icons/EmailIcon.svg';
import AddIcon from '../../Assets/Icons/AddIcon.svg';
import { useNavigate } from 'react-router-dom';

export default function AddMailBox() {
    const mailBoxRef = useRef();
    const navigate = useNavigate();

    const handleAddMailboxClick = () => {
        navigate('/home/add-account');
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
                <button className='add-mailbox-btn' onClick={handleAddMailboxClick}><img src={AddIcon} alt="" />Add New Mailbox</button>
            </div>
        </div>
    )
}
