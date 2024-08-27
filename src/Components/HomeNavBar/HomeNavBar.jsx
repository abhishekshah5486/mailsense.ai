import React from 'react';
import './HomeNavBar.css';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';

function HomeNavBar() {
    const navigate = useNavigate();
    const handleLogOut = async () => {
        await authService.logoutCurrentUser();
        navigate('/');
    }
    return (
        <div className='landing-page-navbar'>
            <div className="navbar-logo">
                <img src={intelliMailerLogo} alt="" />
                <h1>MAILSENSE</h1>
            </div>
            <div className="navbar-right-content">
                <h2 onClick={handleLogOut}>Log out</h2>
            </div>
        </div>
    )
}

export default HomeNavBar;
