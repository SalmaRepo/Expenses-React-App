import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../contexts/LandingPageContext/landingPageContext';

export default function LoginForm() {
  const { state, dispatch } = useContext(MainContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogIn = () => {
    dispatch({
      type: 'logIn',
      payload: {
        email: emailRef.current.value,
        password: Number(passwordRef.current.value),
      },
    });
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };
  console.log(state.activeUser, state.loggedIn);
  return (
    <div>
      <form className='logIn-signUp-form'>
        <input type='email' placeholder='Username or Email' ref={emailRef} />
        <input type='password' placeholder='Password' ref={passwordRef} />
        <button type='button' onClick={handleLogIn}>
          Log In
        </button>
      </form>

      <footer>
        <p>Don't have an account yet? </p>
        <NavLink to='/signup'>Sign Up</NavLink>
      </footer>
    </div>
  );
}
