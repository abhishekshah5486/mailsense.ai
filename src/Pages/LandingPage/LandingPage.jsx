import React, {useEffect} from 'react';
import './LandingPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import Header from '../../Components/Header'
import UserContext from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(UserContext);
  
  useEffect(() => { 
    if (currentUser){
      navigate('/home/email-accounts');
    }
  }, [currentUser, navigate])

  return (
    <div className='intelli-mail-landing-page'>
      <NavBar/>
      <Header/>
    </div>
  )
}
export default LandingPage;
