import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
 import { Auth0Provider } from '@auth0/auth0-react';


//it is used to inject all jsx code of App.js File in a 'root' id of div element.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-wsmqsv15cvnji2yy.us.auth0.com"
        clientId="OhdVnnXX4vK1jFqeNnr3BhnZ10RIpUN2"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>,
    );
