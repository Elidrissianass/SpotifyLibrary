import React, { useState } from 'react'
import { getToken } from "../spotifyCredentials"

export const AuthContext = React.createContext();

const AuthProvider = (props) => {

    const [ loggedIn, setLoggedIn ] = useState(false);
    const token = getToken();

    const getLog = () => {
        
        if (token.access_token == null) 
        { setLoggedIn(false); }
        else 
        { setLoggedIn(true); return(token.access_token) }
    }

    return (
        <AuthContext.Provider value={{loggedIn,getLog}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

