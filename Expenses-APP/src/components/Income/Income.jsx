import { useContext, useRef, useEffect, useState } from "react";
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
import "./income.css";


export default function Income() {
  const { incomeState, incomeDispatch } = useContext(IncomeContext);
  const [incomeSubmit, setIncomeSubmit] = useState(false);
  const incomeValue = useRef();
  const incomeTypeValue = useRef();
  console.log(incomeState.incomeData);

  /*  localStorage.setItem('incomeDataStorage',JSON.stringify(incomeState.incomeData)) */

  /*  let totalIncome=Object.values(incomeState.incomeData).reduce((acc,data)=>{
        acc+=parseInt(data)
        return acc
    },0)   
    */
  if (incomeSubmit) {
    incomeValue.current.value = null;
  }

  return (
    <div className="incomeDetails animateCard">
      {/* <p>{income}</p>
           <p>{incomeType}</p> */}
      <h3>
        Enter Your Income Details{" "}
        <span style={{ fontSize: "1rem" }}>(in categories)</span>
      </h3>
      <div className="incomeContainer">
        <div className="selectIncomeContainer">
          <select name="income" ref={incomeTypeValue} className="incomeSelect">
            <option value="salary">Salary</option>
            <option value="shares">Shares</option>
            <option value="rents">Rents</option>
          </select>
          <i className="fa-solid fa-caret-down"></i>
        </div>

        <input
          type="text"
          ref={incomeValue}
          className="inputIncome"
          placeholder="Income in Numbers"
        />

        <button
          className="incomeButton"
          onClick={() => {
            incomeDispatch({
              type: "setIncomeType",
              payload: incomeTypeValue.current.value,
            });
            incomeDispatch({
              type: "setIncome",
              payload: incomeValue.current.value,
            });
            incomeDispatch({ type: "setTotalIncome" });
            setIncomeSubmit(true);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
