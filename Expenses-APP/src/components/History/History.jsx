import { useContext, useState, useRef } from "react";
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/spendingContext";

export default function History() {
  const { incomeState } = useContext(IncomeContext);
  let selectedHistoryDate = useRef();
  const { spendingState } = useContext(SpendingContext);
  let initialHistory=localStorage.getItem('historyToggle')?localStorage.getItem('historyToggle'):false
  const [history, setHistory] = useState(initialHistory);
  let previousSelectedDate=localStorage.getItem('selectedDate')?localStorage.getItem('historyToggle'):''
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [dateSelected,setDateSelected]=useState(false);
  console.log(spendingState.dailyData);

  console.log(selectedDate);
  let found = [];
  let finalFound = {};
  let spendingCategoryHistory = [];
  let spendingValueHistory = [];
  
  if(!dateSelected){
    found=JSON.parse(localStorage.getItem("spendingData"))
    ? JSON.parse(
        localStorage.getItem("spendingData")
      ).dailyData.dailyData.map((data, i) => data[selectedDate])
    :  spendingState.dailyData.length>=1?spendingState.dailyData.map((data, i) => {
      
      return data[selectedDate]
    }):false;
  finalFound = found.length>=1?found.slice(-1)[0]:{noDATA:0};
  spendingCategoryHistory =Object.keys(finalFound);
  spendingValueHistory = Object.values(finalFound);
  }else if(dateSelected){
    found=JSON.parse(localStorage.getItem("spendingData"))
    ? JSON.parse(
        localStorage.getItem("spendingData")
      ).dailyData.dailyData.map((data, i) => data[selectedDate]?data[selectedDate]:false)
    :  spendingState.dailyData.length>=1?spendingState.dailyData.map((data, i) => {
      
      return data[selectedDate]?data[selectedDate]:false
    }):false;
  finalFound = found.length>=1?found.slice(-1)[0]:{noDATA:0};
  spendingCategoryHistory =Object.keys(finalFound);
  spendingValueHistory = Object.values(finalFound);
  }
   
  console.log(found)
  console.log(finalFound)

  return (
    <div>
      <h3>History</h3>

        <input
          type="date"
          onChange={(e) =>{
            setSelectedDate(new Date(e.target.value).toDateString());
            setDateSelected(true)
            localStorage.setItem('selectedDate',new Date(e.target.value).toDateString())
          }}
        />
      
     {/*  <button
        onClick={() => {
          
          setHistory(!history);
          localStorage.setItem('historyToggle',!history)
        }}
      >
        +
      </button> */}
      <div
        style={{
          display: "flex",
          width: "50%",
          flexWrap: "wrap",
          margin: "0 auto",
        }}
      >
        {<button onClick={() => setHistory(false)}>x</button>}
        { (
          <p>History of spendings on {selectedDate}</p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          { (
              spendingCategoryHistory.map((data) => {
                return (
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    {data}
                  </p>
                );
              })
            ) }
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          { (
              spendingValueHistory.map((data) => {
                return (
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "50%",
                    }}
                  >
                    {data}
                  </p>
                );
              })
            ) }
        </div>
      </div>
    </div>
  );
}
