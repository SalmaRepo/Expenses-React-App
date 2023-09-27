import { useState, useContext, useEffect } from "react";
// import { SpendingContext } from "./contexts/SpendingContext/SpendingContext";
import { IncomeContext } from "../../contexts/IncomeContext/IncomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/SpendingContext";
export default function TodayBalance() {
  let today = new Date().toDateString();
  /* let initialHistory=localStorage.getItem('historyData')?JSON.parse(localStorage.getItem('historyData')):[]; */
  /* const [dailyData, setDailyData] = useState(initialHistory); */
  const { incomeState } = useContext(IncomeContext);
  const { spendingState } = useContext(SpendingContext);

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

  let todaySpent = spendingState.totalSpending;
  let todayBalance = incomeState.totalIncome - spendingState.totalSpending;
  if (
    parseInt(new Date().getHours()) > 0 &&
    parseInt(new Date().getHours()) <= 24
  ) {
    todaySpent = spendingState.totalSpending;
  } else if (parseInt(new Date().getHours()) === 0) {
    todaySpent = 0;
  }

  console.log(todayBalance);

  return (
    <div>
      <h3>spending for today {new Date().toDateString()}</h3>
      <p>todaySpent={todaySpent}</p>
      <p>Income:${incomeState.totalIncome}</p>
      <p>todayBalance={todayBalance}</p>
    </div>
  );
}
