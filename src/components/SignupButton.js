import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

export class SignupButton extends Component {

    render () {
        const { loginWithRedirect } = this.props.auth0;
        return <button onClick={() => loginWithRedirect({
            screen_hint: "signup"
        })}>Sign Up</button>;
    }
  
};

export default withAuth0(SignupButton);