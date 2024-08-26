import React from 'react';
import './LandingPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import Header from '../../Components/NavBar/Header/Header';

function LandingPage() {
  return (
    <div className='intelli-mail-landing-page'>
      <NavBar/>
      <Header/>
    </div>
  )
}

export default LandingPage;
