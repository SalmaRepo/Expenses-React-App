import { useContext } from "react"
import { MainContext } from "../../contexts/mainContext"

export default function Income(){
    const {setIncome,setIncomeType}=useContext(MainContext)
    return(
        <div>
       
            <select name="income">
                <option value='salary'>Salary</option>
                <option value='shares'>Shares</option>
                <option value='rents'>Rents</option>
            </select>
            
            <input type="text" />
        </div>
    )
}