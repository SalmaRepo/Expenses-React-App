import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import LandingPageContext from './contexts/LandingPageContext/LandingPageContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPageContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
      
    </LandingPageContext>

  </React.StrictMode>
);
