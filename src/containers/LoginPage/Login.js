import React from 'react'
import { LoginStyle } from "./Login.style"
const Login = ({loginUrl}) => {
    return (
        <LoginStyle>
            <div>
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
                <a href={loginUrl}>Login with Spotify</a>
            </div>
        </LoginStyle>
    )
}

export default Login
