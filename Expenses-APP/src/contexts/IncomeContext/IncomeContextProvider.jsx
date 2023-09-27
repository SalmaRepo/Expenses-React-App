import { useContext, useState, useReducer } from "react";
import { IncomeContext } from "./IncomeContext";
import { incomeInitialState, incomeReducer } from "./IncomeReducer";

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
