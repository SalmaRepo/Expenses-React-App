import { useContext, useState, useRef, useEffect } from "react";
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/spendingContext";
import "./history.css";
export default function History() {
  const { incomeState } = useContext(IncomeContext);
  let selectedHistoryDate = useRef();
  const { spendingState } = useContext(SpendingContext);
  let initialHistory = localStorage.getItem("historyToggle")
    ? localStorage.getItem("historyToggle")
    : false;
  const [history, setHistory] = useState(initialHistory);
  let previousSelectedDate = localStorage.getItem("selectedDate")
    ? localStorage.getItem("selectedDate")
    : new Date().toDateString();
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
  const [dateSelected, setDateSelected] = useState(false);
  console.log(spendingState.dailyData);

  console.log(selectedDate);
  let found = [];
  let finalFound = {};
  let spendingCategoryHistory = [];
  let spendingValueHistory = [];

  useEffect(() => {
    if (!dateSelected) {
      setDateSelected(new Date().toDateString());
    }
      

    console.log(found);
  }, []);

  console.log(spendingState.dailyData)

  if(!dateSelected){
   found= spendingState?.dailyData?.map((data, i) => {
        return data[selectedDate];
      });

  finalFound = found.length >= 1 ? found.slice(-1)[0] : { noDATA: 0 };
  spendingCategoryHistory = Object.keys(finalFound);
  spendingValueHistory = Object.values(finalFound);


  }else if (dateSelected) {
    found = JSON.parse(localStorage.getItem("spendingData"))
      ? JSON.parse(localStorage.getItem("spendingData")).dailyData.map(
          (data, i) => (data[selectedDate] ? data[selectedDate] : false)
        )
      : spendingState.dailyData
      ? spendingState.dailyData.map((data, i) => {
          return data[selectedDate] ? data[selectedDate] : false;
        })
      : false;
    finalFound = found.slice(-1)[0] ? found.slice(-1)[0] : { NoDataFound: "0" };
    spendingCategoryHistory = Object.keys(finalFound);
    spendingValueHistory = Object.values(finalFound);
  }
  console.log(found)

  /*  if(!dateSelected){
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
   }else if(dateSelected){
    found=JSON.parse(localStorage.getItem("spendingData"))
    ? JSON.parse(
        localStorage.getItem("spendingData")
      ).dailyData.dailyData.map((data, i) => data[selectedDate]?data[selectedDate]:false)
    :  spendingState.dailyData.length>=1?spendingState.dailyData.map((data, i) => {
      
      return data[selectedDate]?data[selectedDate]:false
    }):false;
  finalFound = found.slice(-1)[0]?found.slice(-1)[0]:{NoDataFound:'0'};
  spendingCategoryHistory =Object.keys(finalFound);
  spendingValueHistory = Object.values(finalFound);
  } */

  console.log(found);
  console.log(finalFound);

  return (
    <div className="historyContainer">
      <h3>
        History of Spendings on{" "}
        <span className="selectedDate">{selectedDate}</span>
      </h3>

      <input
        className="historyDate"
        type="date"
        onChange={(e) => {
          setSelectedDate(new Date(e.target.value).toDateString());
          setDateSelected(true);
          localStorage.setItem(
            "selectedDate",
            new Date(e.target.value).toDateString()
          );
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

      <div className="historyData">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "50%",

            alignItems: "center",
          }}
        >
          {spendingCategoryHistory.map((data) => {
            return (
              <p className="spendingHistoryType">
                {data[0].toUpperCase() + data.slice(1)}
              </p>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {spendingValueHistory.map((data) => {
            return (
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                {data} EUR
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// import { useContext, useState, useRef } from "react";
// import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
// import { SpendingContext } from "../../contexts/SpendingContext/spendingContext";
// import './history.css'
// export default function History() {
//   const { incomeState } = useContext(IncomeContext);
//   let selectedHistoryDate = useRef();
//   const { spendingState } = useContext(SpendingContext);
//   let initialHistory = localStorage.getItem("historyToggle")
//     ? localStorage.getItem("historyToggle")
//     : false;
//   const [history, setHistory] = useState(initialHistory);
//   let previousSelectedDate=localStorage.getItem('selectedDate')?localStorage.getItem('selectedDate'):''
//   const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
//   const [dateSelected, setDateSelected] = useState(false);
//   console.log(spendingState.dailyData);

//   console.log(selectedDate);
//   let found = [];
//   let finalFound = {};
//   let spendingCategoryHistory = [];
//   let spendingValueHistory = [];

//   if(!dateSelected){
//     found=JSON.parse(localStorage.getItem("spendingData"))
//     ? JSON.parse(
//         localStorage.getItem("spendingData")
//       ).dailyData.dailyData.map((data, i) => data[selectedDate])
//     :  spendingState.dailyData.length>=1?spendingState.dailyData.map((data, i) => {

//       return data[selectedDate]
//     }):false;
//   finalFound = found.length>=1?found.slice(-1)[0]:{noDATA:0};
//   spendingCategoryHistory =Object.keys(finalFound);
//   spendingValueHistory = Object.values(finalFound);
//   }else if(dateSelected){
//     found=JSON.parse(localStorage.getItem("spendingData"))
//     ? JSON.parse(
//         localStorage.getItem("spendingData")
//       ).dailyData.dailyData.map((data, i) => data[selectedDate]?data[selectedDate]:false)
//     :  spendingState.dailyData.length>=1?spendingState.dailyData.map((data, i) => {

//       return data[selectedDate]?data[selectedDate]:false
//     }):false;
//   finalFound = found.slice(-1)[0]?found.slice(-1)[0]:{NoDataFound:''};
//   spendingCategoryHistory =Object.keys(finalFound);
//   spendingValueHistory = Object.values(finalFound);
//   }

//   console.log(found);
//   console.log(finalFound);

//   return (
//     <div className="historyContainer">
//       <h3>History of Spendings on <span className="selectedDate">{selectedDate}</span></h3>

//         <input
//         className="historyDate"
//           type="date"
//           onChange={(e) =>{
//             setSelectedDate(new Date(e.target.value).toDateString());
//             setDateSelected(true)
//             localStorage.setItem('selectedDate',new Date(e.target.value).toDateString())
//           }}
//         />

//      {/*  <button
//         onClick={() => {

//           setHistory(!history);
//           localStorage.setItem('historyToggle',!history)
//         }}
//       >
//         +
//       </button> */}

//       <div
//         className="historyData"
//       >

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap:'1rem',
//             width:'50%',

//             alignItems:'center'

//           }}
//         >
//           { (
//               spendingCategoryHistory.map((data) => {
//                 return (
//                   <p
//                     className="spendingHistoryType"
//                   >
//                     {data[0].toUpperCase()+data.slice(1)}
//                   </p>
//                 );
//               })
//             ) }
//         </div>
//         <div style={{ display: "flex", flexDirection: "column", width: "50%",gap:'1rem', alignItems:'center' }}>
//           { (
//               spendingValueHistory.map((data) => {
//                 return (
//                   <p
//                     style={{
//                       display: "flex",
//                       flexDirection: "column",
//                       width: "50%",
//                     }}
//                   >
//                     {data} EUR
//                   </p>
//                 );
//               })
//             ) }
//         </div>
//       </div>
//     </div>
//   );
// }
