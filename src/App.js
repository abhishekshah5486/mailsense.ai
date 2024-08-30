import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import UserEmailAccountsPage from './Pages/UserEmailAccountsPage';
import AddAccountPage from './Pages/AddAccountPage';
import {Routes, Route, Link } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider';
import { useEffect , useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function App() {
    const [loading , setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      },2000)
    })

    if(loading){
      return <div>Loading...</div>
    }
    return (
      <UserContextProvider>
          <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/users/register' element={<RegisterPage/>} />
              <Route path='/users/login' element={<LoginPage/>} />
              <Route path="/home/email-accounts" element={<ProtectedRoute><UserEmailAccountsPage/></ProtectedRoute>} />
              <Route path="/home/add-account" element={<ProtectedRoute><AddAccountPage/></ProtectedRoute>} />
          </Routes>
      </UserContextProvider>
    );
}

export default App;
