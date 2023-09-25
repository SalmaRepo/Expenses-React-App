import { useContext,useState } from "react"
import { MainContext } from "./mainContext"

export default function ContextProvider({children}){
   const [income,setIncome]=useState(0);
   const [incomeType,setIncomeType]=useState('');
   const [incomeData,setIncomeData]=useState({});
return(
 <MainContext.Provider value={{income,setIncome,incomeType,setIncomeType,incomeData,setIncomeData}}  >
 {children}
 </MainContext.Provider>
)
}