import React from 'react';
import './HomeNavBar.css';
import intelliMailerLogo from '../../Assets/Images/reachinbox_ai_logo.jpeg';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../APICalls/users';
import UserContext from '../../Context/UserContext';
import { useContext } from 'react';

function HomeNavBar() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            const response = await logoutUser(currentUser.userId);
            if (response.success) {
                setCurrentUser(null);
                // Remove the token from local storage
                localStorage.removeItem('currentUser');
                navigate('/');
            } else {
                alert(response.message);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='landing-page-navbar'>
            <div className="navbar-logo">
                <img src={intelliMailerLogo} alt="" />
                <h1>REACHINBOX</h1>
            </div>
            <div className="navbar-right-content">
                <h2 onClick={handleLogOut}>Log out</h2>
            </div>
        </div>
    )
}

export default HomeNavBar;
