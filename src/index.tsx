import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BasicFormRoute } from './routes/basic-form';
import { BasicFormSuccessRoute } from './routes/basic-form-success';
import { HomeRoute } from './routes/home';
import App from './App';

import './App.css';
import { oidcConfig } from './Keycloak';
import { AuthProvider } from 'react-oidc-context';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
