import React from 'react';
import './NavBar.css';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';

function NavBar() {
  return (
    <div className='landing-page-navbar'>
        <div className="navbar-logo">
            <img src={intelliMailerLogo} alt="" />
            <h1>MAILSENSE</h1>
        </div>
        <div className="navbar-right-content">
            <h2>Log in</h2>
            <button className='get-started-now'>Get Started Now</button>
        </div>
    </div>
  )
}

export default NavBar;
