import React, { useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from "./containers/404/404";
import Home from "./containers/HomePage/Home";
import Login from "./containers/LoginPage/Login";
import { loginUrl } from "./spotifyCredentials"
import { AuthContext } from "./context/AuthProvider"

const Router = () => {

    const { loggedIn,getLog } = useContext(AuthContext);

    const ifLoggedIn = (props) =>{
        if (loggedIn === true) {return (<Home />)}
        else {return(<Login {...props} loginUrl={loginUrl}/> )}
    }
    useEffect(() => {
        const Log = getLog();
        console.log(Log);
    }, [getLog])

    return (
        <Switch>
            <Route exact path="/" render={ifLoggedIn} />
            <Route path="/login"  render={ifLoggedIn} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router
