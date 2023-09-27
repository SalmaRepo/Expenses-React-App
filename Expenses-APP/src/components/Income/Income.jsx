import { useContext,useRef,useEffect } from "react"
import { IncomeContext } from "../../contexts/IncomeContext/IncomeContext";
// import { IncomeContext } from "../../contexts/IncomeContext/incomeContext"

export default function Income(){
   const {incomeState,incomeDispatch}=useContext(IncomeContext)
    const incomeValue=useRef();
    const incomeTypeValue=useRef();
    console.log(incomeState.incomeData)
     useEffect(()=>{
        incomeDispatch({type:'setIncomeData',payload:{...incomeState.incomeData,[incomeState.incomeType]:incomeState.income}})
        
    },[incomeState.income]) 
    
    localStorage.setItem('incomeDataStorage',JSON.stringify(incomeState.incomeData))
    
     let totalIncome=Object.values(incomeState.incomeData).reduce((acc,data)=>{
        acc+=parseInt(data)
        return acc
    },0)  
    return(
        <div>
           {/* <p>{income}</p>
           <p>{incomeType}</p> */}
           <p>total Income:${totalIncome}</p>
            <select name="income" ref={incomeTypeValue} >
                <option value='salary'>Salary</option>
                <option value='shares'>Shares</option>
                <option value='rents'>Rents</option>
            </select>
            
            <input type="text" ref={incomeValue} />
            <button onClick={()=>{
                incomeDispatch({type:'setIncome',payload:incomeValue.current.value})
                incomeDispatch({type:'setIncomeType',payload:incomeTypeValue.current.value})
               }}>Income Submit
            </button>
        </div>
    )
}