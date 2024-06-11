import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-i2ffznz2rny8tibg.us.auth0.com"
    clientId="aMvi0geOJHCKi4aSNBuYnefR2wCiPFEp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <App />

  </Auth0Provider>
)
