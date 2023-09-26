import { useContext, useState, useRef } from "react";
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/spendingContext";

export default function History() {
  const { incomeState } = useContext(IncomeContext);
  let selectedHistoryDate = useRef();
  const { spendingState } = useContext(SpendingContext);
  const [history, setHistory] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  console.log(spendingState.dailyData);

  console.log(selectedDate);
  let found = [];
  let finalFound = {};
  let spendingCategoryHistory = [];
  let spendingValueHistory = [];
  if (selectedDate) {
    found = spendingState.dailyData.map((data, i) => data[selectedDate]);
    finalFound = found.slice(-1)[0];
    spendingCategoryHistory = Object.keys(finalFound);
    spendingValueHistory = Object.values(finalFound);
  }

  return (
    <div>
      <h3>History</h3>
      {history && (
        <input
          type="date"
          onChange={(e) =>
            setSelectedDate(new Date(e.target.value).toDateString())
          }
        />
      )}
      <button
        onClick={() => {
          setHistory(!history);
        }}
      >
        +
      </button>
      <div
        style={{
          display: "flex",
          width: "50%",
          flexWrap: "wrap",
          margin:'0 auto'
          
        }}
      >
        {history && <button onClick={() => setHistory(false)}>x</button>}
        {history && selectedDate && (
          <p>History of spendings on {selectedDate}</p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {history &&
            (selectedDate ? (
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
            ) : (
              <p>select the date</p>
            ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          {history &&
             (selectedDate ? (
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
              ) : (
                <p>select the date</p>
              ))}
        </div>
      </div>
    </div>
  );
}