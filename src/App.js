import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
              <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/users/register' element={<RegisterPage/>} />
                <Route path='/users/login' element={<LoginPage/>} />
                <Route path='/home' element={ <HomePage/> } />
              </Routes>
            </Router>
        </div>
    );
}

export default App;
