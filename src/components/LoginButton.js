import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

export class LoginButton extends Component {

    render () {
        const { loginWithRedirect } = this.props.auth0;
        return <button onClick={() => loginWithRedirect()}>Log In</button>;
    }
  
};

export default withAuth0(LoginButton);