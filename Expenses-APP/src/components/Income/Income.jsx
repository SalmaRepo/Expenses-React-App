import { useContext,useRef,useEffect, useState } from "react"
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext"

export default function Income(){
   const {incomeState,incomeDispatch}=useContext(IncomeContext);
   const [incomeSubmit,setIncomeSubmit]=useState(false);
    const incomeValue=useRef();
    const incomeTypeValue=useRef();
    console.log(incomeState.incomeData)
  
    
   /*  localStorage.setItem('incomeDataStorage',JSON.stringify(incomeState.incomeData)) */
    
    /*  let totalIncome=Object.values(incomeState.incomeData).reduce((acc,data)=>{
        acc+=parseInt(data)
        return acc
    },0)   
    */
   if(incomeSubmit){
    incomeValue.current.value=null;
   }
   
    return(
        <div>
           {/* <p>{income}</p>
           <p>{incomeType}</p> */}
           
            <select name="income" ref={incomeTypeValue} >
                <option value='salary'>Salary</option>
                <option value='shares'>Shares</option>
                <option value='rents'>Rents</option>
            </select>
            
            <input type="text" ref={incomeValue} placeholder='Income in Numbers' />
            
            <button onClick={()=>{
                incomeDispatch({type:'setIncome',payload:incomeValue.current.value})
                incomeDispatch({type:'setIncomeType',payload:incomeTypeValue.current.value})
                setIncomeSubmit(true)
                incomeDispatch({type:'setTotalIncome'}) 
               }}>Income Submit
            </button>
            
        </div>
    )
}