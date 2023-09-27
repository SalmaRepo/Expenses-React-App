import { useReducer } from "react";
import { SpendingContext } from "./spendingContext";
import { initialSpendingState, spendingReducer } from "./spendingReducer";

export default function SpendingContextProvider({ children }) {
    const [spendingState,spendingDispatch]=useReducer(spendingReducer,initialSpendingState)
  return (
    <SpendingContext.Provider value={{spendingState,spendingDispatch}}>{children}</SpendingContext.Provider>
  );
}
