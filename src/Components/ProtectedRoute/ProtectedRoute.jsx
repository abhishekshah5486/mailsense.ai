import React, {useContext} from 'react';
import { Route, Navigate } from 'react-router-dom';
import UserContext from '../../Context/UserContext';

const ProtectedRoute = ({children}) => {
    const { currentUser } = useContext(UserContext);

    // If the user is not logged in, redirect to the login page
    console.log(currentUser);
    if (!currentUser?.isLoggedIn) {
        return <Navigate to="/" />;
    }

    // If the user is logged in, render the element
    return children;
}
export default ProtectedRoute;
