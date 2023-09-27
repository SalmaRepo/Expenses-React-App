import { useReducer } from "react";
import { initialSpendingState, spendingReducer } from "./SpendingReducer";
import { SpendingContext } from "./SpendingContext";

export default function SpendingContextProvider({ children }) {
    const [spendingState,spendingDispatch]=useReducer(spendingReducer,initialSpendingState)
  return (
    <SpendingContext.Provider value={{spendingState,spendingDispatch}}>{children}</SpendingContext.Provider>
  );
}
