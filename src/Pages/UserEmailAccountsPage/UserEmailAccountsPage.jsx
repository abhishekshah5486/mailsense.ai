import React from 'react';
import HomeNavBar from '../../Components/HomeNavBar/HomeNavBar';
import AddMailBox from '../../Components/AddMailBox/AddMailBox';
import './UserEmailAccountsPage.css';

function UserEmailAccountsPage() {
    return (
        <div className='user-email-accounts-page'>
            <HomeNavBar/>
            <AddMailBox/>
        </div>
    )
}

export default UserEmailAccountsPage;
