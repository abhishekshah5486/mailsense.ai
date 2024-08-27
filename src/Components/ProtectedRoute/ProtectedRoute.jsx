import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

const ProtectedRoute = ({element, ...rest}) => {
    const {currentUser} = React.useContext(UserContext);
    return (
        <Route 
        {...rest} 
        element={currentUser?.isLoggedIn? element : <Navigate to='/users/login' />} 
        />
    )
}
export default ProtectedRoute;
