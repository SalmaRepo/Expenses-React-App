import { useContext,useState } from "react"
import { MainContext } from "./mainContext"

export default function ContextProvider({child}){
   const [income,setIncome]=useState(0);
   const [incomeType,setIncomeType]=useState('');
   const [incomeData,setIncomeData]=useState({});
return(
 <MainContext.Provider value={{income,setIncome,incomeType,setIncomeType,incomeData,setIncomeData}}  >
 {child}
 </MainContext.Provider>
)
}