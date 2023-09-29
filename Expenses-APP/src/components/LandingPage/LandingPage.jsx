import React, { useContext } from 'react';
import { Routes, Route,Link } from 'react-router-dom';

import LoginForm from '../Login/LoginForm';
import SignUpForm from '../SingUp/SignUpForm';
import './landingPage.css';

export default function LandingPage() {

  return (
    <div className='landing-page'>
      <h1>Expenses Tracker APP</h1>
   

      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </div>
  );
}
