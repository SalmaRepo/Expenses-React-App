import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../Login/LoginForm';
import SignUpForm from '../SingUp/SignUpForm';
import './landingPage.css';

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <h1>Expenses APP</h1>

      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
    </div>
  );
}
