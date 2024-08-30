import React, {useContext} from 'react';
import './UserProfile.css';
import UserContext from '../../Context/UserContext';

function UserProfile() {
    const { currentUser } = useContext(UserContext);
    const gradients = [
        'linear-gradient(to right, #314755, #26a0da)',
        'linear-gradient(to right, #2b5876, #4e4376)',
        'linear-gradient(to right, #e65c00, #F9D423)',
        'linear-gradient(to right, #751523, #110405)',
        'linear-gradient(to right, #1488CC, #2B32B2)',
        'linear-gradient(to right, #611648, #330d65)',,
        ' linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',

    ]
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    return (
        <div className='user-profile'>
            
        </div>
    )
}

export default UserProfile;
