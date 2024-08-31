import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import { getCurrentUser } from "../APICalls/userAccounts";

const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    // Whenever currentUser changes, update localStorage
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await getCurrentUser();
                console.log(response);
                if (response && response.success){
                    const currentUser = response.user;
                    setCurrentUser(currentUser);
                }
                else setCurrentUser(null);
            } catch (err) {
                console.log(err.message);
                setCurrentUser(null);
            }
        }
        fetchCurrentUser();
    }, []);

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
