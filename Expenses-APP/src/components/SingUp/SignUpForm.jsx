import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../contexts/LandingPageContext/landingPageContext';

export default function SignUpForm() {
  const { state, dispatch } = useContext(MainContext);
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = () => {
    dispatch({
      type: 'signUp',
      payload: {
        userName: userNameRef.current.value,
        email: emailRef.current.value,
        password: Number(passwordRef.current.value),
      },
    });

    userNameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  console.log(state.users);
  return (
    <div>
      <form className='logIn-signUp-form'>
        <input
          type='text'
          placeholder='Choose your username'
          ref={userNameRef}
        />
        <input type='email' placeholder='Email address' ref={emailRef} />
        <input
          type='password'
          placeholder='Set your password'
          ref={passwordRef}
        />
        <button type='button' onClick={handleSignUp}>
          Sign Up
        </button>
      </form>

      <footer>
        <p>Already have an account? </p> <NavLink to='/'>Log In</NavLink>
      </footer>
    </div>
  );
}
