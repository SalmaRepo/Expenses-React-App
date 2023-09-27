import { useContext, useRef, useEffect, useState } from "react";
// import { IncomeContext } from "./contexts/IncomeContext/IncomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/SpendingContext";
import { IncomeContext } from "../../contexts/IncomeContext/IncomeContext";
// import { SpendingContext } from "./contexts/SpendingContext/SpendingContext";

export default function Spending() {
  const { incomeState, incomeDispatch } = useContext(IncomeContext);
  const { spendingState, spendingDispatch } = useContext(SpendingContext);
  const [spedingSubmit, setSpendingSubmit] = useState(false);
  const spendingTypeValue = useRef();
  const spendingValue = useRef();

  /* 
    localStorage.setItem('spendingDataStorage',JSON.stringify(spendingState.spendingData)) */

  /*      let totalSpending=Object.values(spendingState.spendingData).reduce((acc,data)=>{
        acc+=parseInt(data)
        return acc
    },0)  */

  if (spedingSubmit) {
    spendingValue.current.value = null;
  }

  return (
    <div>
      {/*    <p>totalSpending:${spendingState.totalSpending}</p> */}

      <label htmlFor="">Spending Categories</label>
      <select name="spending" ref={spendingTypeValue}>
        <option value="food">Food</option>
        <option value="home">Home</option>
        <option value="shopping">Shopping</option>
        <option value="holidays">Holidays</option>
        <option value="fuel">Fuel</option>
        <option value="kids">Kids</option>
        <option value="sports">Sports</option>
      </select>

      <input type="text" placeholder="200" ref={spendingValue} />

      <button
        onClick={() => {
          spendingDispatch({
            type: "setSpendingType",
            payload: spendingTypeValue.current.value,
          });
          spendingDispatch({
            type: "setSpending",
            payload: spendingValue.current.value,
          });
          spendingDispatch({ type: "setDailyData" });
          spendingDispatch({ type: "setTotalSpending" });
          setSpendingSubmit(true);
        }}
      >
        Spending Submit
      </button>
    </div>
  );
}
