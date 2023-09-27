<<<<<<< HEAD
import { useContext, useState, useReducer } from "react";

import { incomeInitialState, incomeReducer } from "./IncomeReducer";
import { IncomeContext } from "./IncomeContext";

export default function IncomeContextProvider({ children }) {
  const [incomeState, incomeDispatch] = useReducer(
    incomeReducer,
    incomeInitialState
  );
  return (
    <IncomeContext.Provider value={{ incomeState, incomeDispatch }}>
      {children}
    </IncomeContext.Provider>
  );
}
=======
import { useContext,useState,useReducer } from "react"
import { IncomeContext } from "./incomeContext"
import { incomeInitialState, incomeReducer } from "./incomeReducer"

export default function IncomeContextProvider({children}){
   const [incomeState,incomeDispatch]=useReducer(incomeReducer,incomeInitialState)
return(
 <IncomeContext.Provider value={{incomeState,incomeDispatch}}  >
 {children}
 </IncomeContext.Provider>
)
}
>>>>>>> 2d7cd8a0ff5a991829687fd4179ad84baeb851e5
