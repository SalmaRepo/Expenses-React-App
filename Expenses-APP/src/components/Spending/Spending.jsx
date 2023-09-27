import { useContext,useRef,useEffect } from "react";
import { SpendingContext } from "../../contexts/SpendingContext/SpendingContext";

export default function Spending(){
    const {spendingState,spendingDispatch}=useContext(SpendingContext);
    const spendingTypeValue=useRef()
    const spendingValue=useRef()

   
    useEffect(()=>{
        spendingDispatch({type:'setSpendingData'})
        
    },[spendingState.spending]) 

    console.log(spendingState.spendingData)

    localStorage.setItem('spendingDataStorage',JSON.stringify(spendingState.spendingData))
    
     let totalSpending=Object.values(spendingState.spendingData).reduce((acc,data)=>{
        acc+=parseInt(data)
        return acc
    },0)  
    return (
        <div>
            <p>totalSpending:${totalSpending}</p>
            <label htmlFor="">Spending Categories</label>
            <select name="spending" ref={spendingTypeValue}>
                <option value="food">Food</option>
                <option value="home">Home</option>
                <option value="shopping">Shopping</option>
                <option value="holidays">Holidays</option>
                <option value="fuel">Fuel</option>
                <option value="kids">Kids</option>
                <option value="sports">Sports</option>
            </select>

            <input type="text" placeholder="spentValue" ref={spendingValue} />

            <button onClick={()=>{
              spendingDispatch({type:'setSpendingType',payload:spendingTypeValue.current.value})
              spendingDispatch({type:'setSpending',payload:spendingValue.current.value})
            }}>Spending Submit</button>
        </div>
    )
}