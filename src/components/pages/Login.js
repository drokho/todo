import React from 'react';
import LoginButton from '../LoginButton';
import SignupButton from '../SignupButton';

function Login() {
    return(
        <React.Fragment>
            <div className="content">
                <h1>You are not logged in.</h1>
                <p>You need to either login or sign up. </p>
                <p><LoginButton /></p>
                <p><SignupButton /></p>
                <p></p>
            </div>
        </React.Fragment>
    )
}

export default Login;