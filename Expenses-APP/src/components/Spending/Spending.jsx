<<<<<<< HEAD
import { useContext,useRef,useEffect } from "react";
import { SpendingContext } from "../../contexts/SpendingContext/SpendingContext";

export default function Spending(){
    const {spendingState,spendingDispatch}=useContext(SpendingContext);
=======
import { useContext,useRef,useEffect,useState } from "react";
import { IncomeContext } from "../../contexts/IncomeContext/incomeContext";
import { SpendingContext } from "../../contexts/SpendingContext/spendingContext";

export default function Spending(){
    const {incomeState,incomeDispatch}=useContext(IncomeContext)
    const {spendingState,spendingDispatch}=useContext(SpendingContext);
    const [spedingSubmit,setSpendingSubmit]=useState(false);
>>>>>>> 2d7cd8a0ff5a991829687fd4179ad84baeb851e5
    const spendingTypeValue=useRef()
    const spendingValue=useRef()

   
<<<<<<< HEAD
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
=======
/* 
    localStorage.setItem('spendingDataStorage',JSON.stringify(spendingState.spendingData)) */
    
/*      let totalSpending=Object.values(spendingState.spendingData).reduce((acc,data)=>{
        acc+=parseInt(data)
        return acc
    },0)  */ 
   
    if(spedingSubmit){
        spendingValue.current.value=null;
    }

    return (
        <div>
         {/*    <p>totalSpending:${spendingState.totalSpending}</p> */}
   
>>>>>>> 2d7cd8a0ff5a991829687fd4179ad84baeb851e5
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

<<<<<<< HEAD
            <input type="text" placeholder="spentValue" ref={spendingValue} />
=======
            <input type="text" placeholder="200" ref={spendingValue} />
>>>>>>> 2d7cd8a0ff5a991829687fd4179ad84baeb851e5

            <button onClick={()=>{
              spendingDispatch({type:'setSpendingType',payload:spendingTypeValue.current.value})
              spendingDispatch({type:'setSpending',payload:spendingValue.current.value})
<<<<<<< HEAD
=======
              spendingDispatch({type:'setDailyData'})
             spendingDispatch({type:'setTotalSpending'}) 
              setSpendingSubmit(true)
>>>>>>> 2d7cd8a0ff5a991829687fd4179ad84baeb851e5
            }}>Spending Submit</button>
        </div>
    )
}