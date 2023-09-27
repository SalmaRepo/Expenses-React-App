import { useContext, useRef, useEffect, useState } from "react";
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/spendingContext";
import "./spending.css";

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
  console.log(spendingState.spendingData);

  if (spedingSubmit) {
    spendingValue.current.value = null;
  }

  return (
    <div className="spendingDetails">
      {/*    <p>totalSpending:${spendingState.totalSpending}</p> */}
  <h3>Enter Your Expenses<span style={{ fontSize: "1rem" }}>(in categories)</span></h3>
      <div className="spendingContainer">
        <div className="selectSpendingContainer">
          <select name="spending" ref={spendingTypeValue} className='spendingSelect'>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="shopping">Shopping</option>
            <option value="holidays">Holidays</option>
            <option value="fuel">Fuel</option>
            <option value="kids">Kids</option>
            <option value="sports">Sports</option>
          </select>
          <i className="fa-solid fa-caret-down"></i>
        </div>

        <input type="text" className='inputSpending' placeholder="Expenses in Numbers" ref={spendingValue} />

        <button className="spendingButton"
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
          Submit
        </button>
      </div>
    </div>
  );
}
