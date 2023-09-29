import LandingPageContext from "./contexts/LandingPageContext/LandingPageContextProvider";
import LandingPage from "./components/LandingPage/LandingPage";
import Income from "./components/Income/Income";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import IncomeContextProvider from "./contexts/IncomeContext/IncomeContextProvider";
import SpendingContextProvider from "./contexts/SpendingContext/SpendingContextProvider";
import Spending from "./components/Spending/Spending";
import TodayBalance from "./components/TodayBalance/TodayBalance";
import History from "./components/History/History";
import { useContext, useState } from "react";
import { MainContext } from "./contexts/LandingPageContext/landingPageContext";

function App() {
  const { state, dispatch } = useContext(MainContext);
  const navigate = useNavigate();
  console.log(state.loggedIn);
  console.log(state.loggedOut);
  console.log(state);
  const handleLogOut = () => {
    dispatch({
      type: 'logOut',
    });
    navigate('/');
  };
  return (
    <>
      {state.loggedIn ? (

        <Routes>

          <Route path='/user' element={
            <div className="appClassForCalculations">
          {/*     <button onClick={()=>{dispatch('logOut'), dispatch('logIn')}}>Logout</button> */}
          
          <div className="header">
            <div style={{display:'flex',width:'30%',alignItems:'center'}}>
            <img
              src="https://i.pinimg.com/600x315/12/48/67/124867274df5c28995b1efbe619edf11.jpg"
              alt=""
            />
            <h2>Expense Tracker</h2>
            </div>
            <div style={{display:'flex',width:'30%',alignItems:'center',gap:'1rem'}}>
            <button className='logOutButton' onClick={handleLogOut}>
                  Log Out
                </button>
            <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" />
            </div>
            
          </div>
          <IncomeContextProvider>
            <SpendingContextProvider>
              <TodayBalance />

              <History />
              <Income />
              <Spending />
            </SpendingContextProvider>
          </IncomeContextProvider>
        </div>
          }/>
        </Routes>
        
      ) : (
        <LandingPage />
      )}
      {/* {state.loggedIn && 
        <div className="appClassForCalculations">
          <IncomeContextProvider>
            <SpendingContextProvider>
           <TodayBalance />

              <History />
              <Income />
              <Spending />
            </SpendingContextProvider>
          </IncomeContextProvider>
        </div>
      }  */}
    </>
  );
}

export default App;
