import React from 'react'
import HomeNavBar from '../../Components/HomeNavBar/HomeNavBar';
import AddAccount from '../../Components/AddAccount';
import './AddAccountPage.css';

function AddAccountPage() {
    return (
        <div className='add-account-page'>
            <HomeNavBar/>
            <AddAccount/>
        </div>
    )
}

export default AddAccountPage
