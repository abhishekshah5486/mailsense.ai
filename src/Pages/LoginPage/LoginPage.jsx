import React from 'react';
import './LoginPage.css';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';
import googleIcon from '../../Assets/Images/google.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import authService from '../../appwrite/auth';

function LoginPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate(); 

    const handleLoginLogic = async () => {
        const userAccount = await authService.loginAccount(email, password);
        if (userAccount){
            navigate('/home');
        }
    }
    return (
        <div class="log-in-page">
            <div class="log-in-page-header">
                <div class="intelliMailer-logo">
                    <img class="invert spotify-logo-svg" src={intelliMailerLogo} alt="" />
                    <h1>MAILSENSE</h1>
                </div>
            </div>
            <div class="log-in-page-down-content">
                <div class="log-in-page-form">
                    <div class="log-in-page-heading">
                        <h1>Log in to MailSense</h1>
                    </div>
                    <div class="log-in-accounts">
                        <ul>
                            <li class="google-login">
                                <button class="google-login-btn">
                                    <div class="google-login-div xR230zZLI">
                                        <img src={googleIcon} alt="" class="new-google-icon" />
                                        <div class="xR230zZTp">
                                            <h3>Continue with Google</h3>
                                        </div>   
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="horizontal-line"></div>
                    <div class="log-in-form">
                        <div class="username-email">
                            <h4>Email or username</h4>
                            <input type="email" 
                            class="username-input" 
                            placeholder="Email or username" 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="password">
                            <h4>Password</h4>
                            <input type="email" 
                            class="password-input" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="log-in-button">
                            <button class="log-in-btn" onClick={() => handleLoginLogic()}>Log in</button>
                        </div>
                    </div>
                    <div class="horizontal-line"></div>
                    <div class="create-account">
                        <h3 id="xZA009Tz">Don't have an account?</h3>
                        <a href="Css Components/Sign Up Form/index.html">
                            <h3 id="xZA009Ta"><Link to="/users/register" className='link'>Sign up for Spotify</Link></h3>
                        </a>
                    </div>
                </div>
                <div class="terms-conditions">
                    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
