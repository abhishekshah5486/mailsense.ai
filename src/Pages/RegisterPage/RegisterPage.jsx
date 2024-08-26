import React from 'react';
import './RegisterPage.css';
import googleIcon from '../../Assets/Images/google.png';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <>
            <div class="log-in-page">
                <div class="log-in-page-header">
                    <div class="spotify-logo">
                        <img class="invert spotify-logo-svg" src={intelliMailerLogo} alt="" />
                        <h1>MAILSENSE</h1>
                    </div>
                </div>
            </div>
            <div class="sign-up-form-section">
                <div class="sign-up-form">
                    <div class="sign-up-form-heading">
                        <h1>Sign up to get started.</h1>
                    </div>
                    <div class="user-email">
                        <h4>Email address</h4>
                        <input type="email" class="email-input" placeholder="name@domain.com" />
                    </div>
                    <div class="user-password">
                        <h4>Password</h4>
                        <input type="password" class="password-input" placeholder="Password" />
                    </div>
                    <div class="signup-button">
                        <button class="signup-btn">Sign Up</button>
                    </div>
                    <div class="horizontal-rule"></div>
                    <div class="or-div">or</div>

                    <div class="log-in-accounts">
                        <ul>
                            <li class="google-login">
                                <button class="google-login-btn">
                                    <div class="google-login-div xR230zZLI">
                                        <img src={googleIcon} alt="" class="new-google-icon" />
                                        <div class="xR230zZTp" >
                                            <h3>Continue with Google</h3>
                                        </div>   
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="horizontal-rule vBGH009Lk"></div>
                    <div class="log-in-account">
                        <h3 id="xZA009Tz">Already have an account?</h3>
                        <a href="Css Components/Log In Page/index.html" target="_blank">
                            <h3 id="xZA009Ta"><Link to='/users/login' className='link'>Log in here</Link></h3>
                        </a>
                    </div>
                </div>
                <div class="terms-conditions">
                    <p>This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;
