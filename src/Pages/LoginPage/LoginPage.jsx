import React, {useContext} from 'react';
import './LoginPage.css';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';
import googleIcon from '../../Assets/Images/google.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../APICalls/users';
import UserContext from '../../Context/UserContext';

function LoginPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate(); 
    const {setCurrentUser} = useContext(UserContext);

    const handleLoginLogic = async () => {
        try {
            const values = {
                email,
                password
            }
            const response = await loginUser(values);
            if (response.success){
                alert('Login successful');
                setCurrentUser({
                    id: response.user.userId,
                    email: response.user.email,
                    isLoggedIn: response.user.isLoggedIn,
                });
                navigate('/home');
            }
            else alert(response.message);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="log-in-page">
            <div className="log-in-page-header">
                <div className="intelliMailer-logo">
                    <img className="invert spotify-logo-svg" src={intelliMailerLogo} alt="" />
                    <h1>MAILSENSE</h1>
                </div>
            </div>
            <div className="log-in-page-down-content">
                <div className="log-in-page-form">
                    <div className="log-in-page-heading">
                        <h1>Log in to MailSense</h1>
                    </div>
                    <div className="log-in-accounts">
                        <ul>
                            <li className="google-login">
                                <button className="google-login-btn">
                                    <div className="google-login-div xR230zZLI">
                                        <img src={googleIcon} alt="" className="new-google-icon" />
                                        <div className="xR230zZTp">
                                            <h3>Continue with Google</h3>
                                        </div>   
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="log-in-form">
                        <div className="username-email">
                            <h4>Email or username</h4>
                            <input type="email" 
                            className="username-input" 
                            placeholder="Email or username" 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <h4>Password</h4>
                            <input type="password" 
                            className="password-input" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="log-in-button">
                            <button className="log-in-btn" onClick={() => handleLoginLogic()}>Log in</button>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="create-account">
                        <h3 id="xZA009Tz">Don't have an account?</h3>
                        <h3 id="xZA009Ta">
                            <Link to="/users/register" className='link'>Sign up for Spotify</Link>
                        </h3>
                    </div>
                </div>
                <div className="terms-conditions">
                    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
