import React, {useState, useEffect, useContext} from 'react';
import HomeNavBar from '../../Components/HomeNavBar/HomeNavBar';
import AddMailBox from '../../Components/AddMailBox/AddMailBox';
import UserContext from '../../Context/UserContext';
import AddIcon from '../../Assets/Icons/AddIcon.svg';
import googleIcon from '../../Assets/Icons/google.png';
import microsoftIcon from '../../Assets/Icons/microsoft.png';
import { retrieveAllUserAccountsByUserId } from '../../APICalls/userAccounts';
import { removeUserAccountFromGmailWatchByEmail } from '../../APICalls/gmailWatch';
import './UserEmailAccountsPage.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function UserEmailAccountsPage() {
    const {currentUser} = useContext(UserContext);
    const [emailAccounts, setEmailAccounts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const alertMessage = Cookies.get('alert');
        if (alertMessage){
            alert(alertMessage);
            // Remove the cookie after reading it
            Cookies.remove('alert');
        }
    }, [navigate])

    const handleAddMailboxClick = () => {
        navigate('/home/add-account');
    }

    // Handle disconnect button click
    const handleDisconnectBtnClick = async (accountEmail) => {
        try {
            const response = await removeUserAccountFromGmailWatchByEmail(accountEmail);
            // Error handling
            if (response.success){
                alert('Account disconnected successfully');
                // Reload the page
                window.location.reload();
            }
            else {
                alert('Something went wrong. Please try again.');
            }
        } catch (err) {
            console.error('Unexpected error disconnecting account:', err);
            alert('An unexpected error occurred. Please try again.');
        }
    }

    useEffect(() => {
        const fetchUserAccounts = async () => {
            try {
                const response = await retrieveAllUserAccountsByUserId(currentUser.userId);
                if (response.success){
                    setEmailAccounts(response.userAccounts);
                } else {
                    setError(new Error(response.message));
                    console.log(response.error);
                }
            } catch (err) {
                console.error('Unexpected error fetching user accounts:', err);
                setError(new Error('An unexpected error occurred. Please try again.'));
            } finally {
                setLoading(false);
            }
        }
        if (currentUser) fetchUserAccounts();
    }, [currentUser])


    if (loading) {
        return (
        <div className='user-email-accounts-page'>
            <HomeNavBar />
            <p className='loading-message'>Loading email accounts...</p>
        </div>
        );
    }

    if (error) {
        return (
        <div className='user-email-accounts-page'>
            <HomeNavBar />
            <div className='error-message'>
                <h1>Woops!</h1>
                <h2>Something Went Wrong :(</h2>
                <p>Try reloading the page.</p>
            </div>
        </div>
        );
    }
    return (
        <div className='user-email-accounts-page'>
            <HomeNavBar/>
            {(emailAccounts && emailAccounts.length > 0) && (<div className="add-account-container">
                <button className='add-new-account-btn' onClick={handleAddMailboxClick}>
                    <img src={AddIcon} alt="" />
                    <h2>Add New Mailbox</h2>
                </button>
            </div>)}
            {(
                (emailAccounts && emailAccounts.length > 0) ?
                <div className='authenticated-accounts'>
                    <div className="accounts-header">
                        <h2>EMAIL ACCOUNT</h2>
                        <h2>PROVIDER</h2>
                    </div>
                    <div className='email-accounts'>

                        {
                            emailAccounts.map((account, index) => {
                                return (
                                    <div className={`email-account ${account.accountType === 'GMAIL' ? 'gmail' : 'outlook'}`} key={index}>
                                        <h2 className='email'>{account.accountEmail}</h2>
                                        {account.accountType === 'GMAIL' ? (
                                            <img src={googleIcon} className='service-provider' alt="Google Icon" />
                                        ) : (
                                            <img src={microsoftIcon} className='service-provider' alt="Microsoft Icon" />
                                        )}
                                        <button className='disconnect-account-btn' onClick={() => handleDisconnectBtnClick(account.accountEmail)}>Disconnect</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> : (
                    <AddMailBox />
                )
            )}
        </div>
    )
}

export default UserEmailAccountsPage;


         

 