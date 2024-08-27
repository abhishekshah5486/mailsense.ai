import React from 'react';
import './HomeNavBar.css';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';
import { Link } from 'react-router-dom';

function HomeNavBar() {
  return (
    <div className='landing-page-navbar'>
        <div className="navbar-logo">
            <img src={intelliMailerLogo} alt="" />
            <h1>MAILSENSE</h1>
        </div>
        <div className="navbar-right-content">
            <Link to='/'><h2>Log out</h2></Link>
        </div>
    </div>
  )
}

export default HomeNavBar;
