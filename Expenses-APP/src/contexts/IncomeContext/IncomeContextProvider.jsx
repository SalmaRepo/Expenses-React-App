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
