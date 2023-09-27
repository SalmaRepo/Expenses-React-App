import { useReducer } from "react";
import { SpendingContext } from "./SpendingContext";
import { initialSpendingState, spendingReducer } from "./SpendingReducer";

export default function SpendingContextProvider({ children }) {
    const [spendingState,spendingDispatch]=useReducer(spendingReducer,initialSpendingState)
  return (
    <SpendingContext.Provider value={{spendingState,spendingDispatch}}>{children}</SpendingContext.Provider>
  );
}
