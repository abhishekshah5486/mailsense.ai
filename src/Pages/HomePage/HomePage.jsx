import React from 'react';
import './HomePage.css';
import AddMailBox from '../../Components/AddMailBox/AddMailBox';
import HomeNavBar from '../../Components/HomeNavBar/HomeNavBar';

function HomePage() {
    return (
        <div className='home-page'>
            <HomeNavBar/>
            <AddMailBox/>
        </div>
    )
}

export default HomePage
