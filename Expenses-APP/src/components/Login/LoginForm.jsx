import React from "react";
import { useRef } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { MainContext } from "../../contexts/LandingPageContext/landingPageContext";

export default function LoginForm() {
  const { state, dispatch } = useContext(MainContext);
const navigate=useNavigate()
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogIn = () => {
    dispatch({
      type: "logIn",
      payload: {
        email: emailRef.current.value,
        password: Number(passwordRef.current.value),
     /*    userData: [
          {
            userId: "",
            incomeData: {
              incomeType: "",
              income: "",
              incomeData: { salary: 0, shares: 0, rents: 0 },
              totalIncome: 0,
            },
          },
          {
            spendingData: {
              userId: "",
              spendingType: "",
              income: "",
              spendingData: {
                food: 0,
                home: 0,
                shopping: 0,
                fuel: 0,
                kids: 0,
                sports: 0,
                holidays: 0,
              },
              totalSpending: 0,
            },
            dailyData: [{ ["Wed Sep 24 2023"]: { holidays: 0 } }],
          },
        ], */
      },
    });
    navigate('/user')
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  console.log(state.activeUser, state.loggedIn);
  return (
    <div>
      <form className="logIn-signUp-form">
        <input type="email" placeholder="Username or Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="button" onClick={handleLogIn}>
          Log In
        </button>
      </form>

      <footer>
        <p>Don't have an account yet? </p>
        <NavLink to="/signup">Sign Up</NavLink>
      </footer>
    </div>
  );
}
