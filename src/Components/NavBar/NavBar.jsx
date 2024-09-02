import React from 'react';
import './NavBar.css';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='landing-page-navbar'>
        <div className="navbar-logo">
            <img src={intelliMailerLogo} alt="" />
            <h1>REACHINBOX</h1>
        </div>
        <div className="navbar-right-content">
            <Link to='/users/login'><h2>Log in</h2></Link>
            <Link to='/users/register'><button className='get-started-now'>Get Started Now</button></Link>
        </div>
    </div>
  )
}

export default NavBar;
