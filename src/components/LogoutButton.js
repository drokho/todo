import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

export class LogoutButton extends Component {

    render () {
        const { logout } = this.props.auth0;
        return <button onClick={() => logout({returnTo: "http://localhost:3000/login"})}>Log Out</button>;
    }
  
};

export default withAuth0(LogoutButton);