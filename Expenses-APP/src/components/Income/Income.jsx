import { useContext,useRef,useEffect } from "react"
import { MainContext } from "../../contexts/mainContext"

export default function Income(){
    const {setIncome,setIncomeType,income,incomeType,setIncomeData,incomeData}=useContext(MainContext);
    const incomeValue=useRef();
    const incomeTypeValue=useRef();
    console.log(incomeData);
    useEffect(()=>{
        setIncomeData({...incomeData,[incomeType]:income})
    },[income])

    let totalIncome=Object.values(incomeData).reduce((acc,data)=>{
        acc+=parseInt(data)
        return acc
    },0)
    return(
        <div>
           {/* <p>{income}</p>
           <p>{incomeType}</p> */}
           <p>total Income:{totalIncome}</p>
            <select name="income" ref={incomeTypeValue} >
                <option value='salary'>Salary</option>
                <option value='shares'>Shares</option>
                <option value='rents'>Rents</option>
            </select>
            
            <input type="text" ref={incomeValue} />
            <button onClick={()=>{
                setIncome(incomeValue.current.value),
                setIncomeType(incomeTypeValue.current.value)
               }}>Income Submit
            </button>
        </div>
    )
}