import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import {Routes, Route, Link } from 'react-router-dom';
import authService from './appwrite/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect , useState } from 'react';

function App() {
    const navigate = useNavigate();
    const [loading , setLoading] = useState(true);

    useEffect(() => {
      const autoRedirect = async () => {
        const user = await authService.checkAuthState();
        if (user){
          navigate('/home');
        }
      }
      autoRedirect();
    }, [navigate]);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      },2000)
    })

    if(loading){
      return <div>Loading...</div>
    }
    return (
          <Routes>
              <Route path='/' element={<LandingPage/>} />
              <Route path='/users/register' element={<RegisterPage/>} />
              <Route path='/users/login' element={<LoginPage/>} />
              <Route path='/home' element={ <HomePage/> } />
          </Routes>
    );
}

export default App;
