import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Auth0Provider
    domain="dev-bftghue8.us.auth0.com"
    clientId="8RY64mMzqF7b0lzcVwFzAdHEvgosIH7z"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>, document.getElementById('root')
);

serviceWorker.register();

