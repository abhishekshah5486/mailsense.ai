import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const spanStyle = {
        color: 'rgba(118, 120, 255, 1)'
    }
    return (
        <div className='header-section'>
            <div className="header-section-top-content">
                <h1 className="main-title">Streamline Your Inbox with AI-Powered Automation!</h1>
                <h2 className='subtitle'>Automate <span style={spanStyle}>Your Email Replies with AI!</span></h2>
                <p className="description">Maximize your productivity with Intelli-Mailer's intelligent email automation. Seamlessly connect your Gmail and Outlook accounts, automatically categorize emails, and send smart replies to boost engagement and save time.</p>
            </div>
            <div className="header-section-btm-content">
                <Link to='/users/register'><button className='cta-button'>Get Started Now</button></Link>
                <div className="features-container">
                    <div className="feature">
                        No credit card required
                    </div>
                    <div className="feature">
                        7-Day Free Trial
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
