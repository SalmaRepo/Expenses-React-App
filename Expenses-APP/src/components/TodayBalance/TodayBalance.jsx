import { useState, useContext, useEffect } from "react";
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/spendingContext";
import "./todayBalance.css";
export default function TodayBalance() {
  let today = new Date().toDateString();
  /* let initialHistory=localStorage.getItem('historyData')?JSON.parse(localStorage.getItem('historyData')):[]; */
  /* const [dailyData, setDailyData] = useState(initialHistory); */
  const { incomeState } = useContext(IncomeContext);
  const { spendingState } = useContext(SpendingContext);

  console.log(incomeState.totalIncome, spendingState.totalSpending);
/*   let previousSpendingData = JSON.parse(localStorage.getItem("spendingData"))
    ? JSON.parse(localStorage.getItem("spendingData"))
    : spendingState.spendingData; */
  let previousSpending =/*  spendingState.dailyData[new Date().toDateString()]?spendingState.totalSpending: */JSON.parse(localStorage.getItem("spendingData"))
    ? Object.values(
        JSON.parse(localStorage.getItem("spendingData")).spendingData
      ).reduce((acc, data) => {
        acc += data;
        return acc;
      }, 0)
    : spendingState.totalSpending;
  console.log(previousSpending);

/*   let previousIncomeData = JSON.parse(localStorage.getItem("incomeData"))
    ? JSON.parse(localStorage.getItem("incomeData"))
    : incomeState.incomeData; */
  let previousIncome = JSON.parse(localStorage.getItem("incomeData"))
    ? Object.values(
        JSON.parse(localStorage.getItem("incomeData")).incomeData
      ).reduce((acc, data) => {
        acc += data;
        return acc;
      }, 0)
    : incomeState.totalIncome;
  console.log(previousIncome);

  /*   useEffect(() => {
    setDailyData([
      ...dailyData,
      {
        [today]: {
          incomeForBalance: incomeState.incomeData,
          spendingForBalance: spendingState.spendingData,
        },
      },
    ]);

  
  }, [spendingState.spending]); */

  /* 
  console.log("dailyData", dailyData); */
 /*  console.log(`${new Date().getHours()}.${new Date().getMinutes()}`); */

  let todaySpent=previousSpending;
  let todayBalance = previousIncome - previousSpending;
   if (
    parseInt(new Date().getHours()) > 0 &&
    parseInt(new Date().getHours()) <= 24
  ) {
   todaySpent = /* SON.parse(localStorage.getItem("spendingData"))? JSON.parse(localStorage.getItem("spendingData")).totalSpending:spendingState.totalSpending; */previousSpending
  } else if (parseInt(new Date().getHours()) === 0) {
    todaySpent = 0;
  } 

  console.log(todayBalance);

  return (
    <div className="displays">
   
      <div className="incomeBalanceDisp animateCard">
        <div>
          <h3>Income:</h3>
          <p>{previousIncome} EUR</p>
        </div>

        <div>
          <h3>Balance:</h3>
          <p> {todayBalance} EUR</p>
        </div>
      </div>
      
      <div className="balanceToday animateCard">
      <h3>Expenditure for Today - {new Date().toDateString()}</h3>
      <p>{todaySpent} EUR</p>
      </div>
     
    </div>
  );
}
