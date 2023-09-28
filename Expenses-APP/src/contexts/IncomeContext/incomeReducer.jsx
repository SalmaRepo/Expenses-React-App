export function incomeReducer(state, action) {
  switch (action.type) {
     case "setIncomeType":
      return { ...state, incomeType: action.payload }; 
    case "setIncome":
      localStorage.setItem(
        "incomeData",
        JSON.stringify({
          ...state,
         income: action.payload,
          incomeData: {
            ...state.incomeData,
            [state.incomeType]: state.incomeData[state.incomeType]
              ? state.incomeData[state.incomeType] + parseInt(action.payload)
              : parseInt(action.payload),
          }, 
        
        })
      );

      return {
        ...state,
        income: action.payload,
        incomeData: {
          ...state.incomeData,
          [state.incomeType]: state.incomeData[state.incomeType]
            ? state.incomeData[state.incomeType] + parseInt(action.payload)
            : parseInt(action.payload),
        },
      };

 
   /*  case "setIncomeData":
      return { ...state, incomeData: action.payload }; */
    case "setTotalIncome":
    
      return {
        ...state,
        totalIncome:Object.values(state.incomeData).reduce((acc, data) => {
          acc += parseInt(data);
          return acc;
        }, 0),
      };
     
      case 'loggedinUser':
        return {
          ...state,
          userId:action.payload
        }
      
  }
}

export const incomeInitialState = {
  userId:null,
  incomeType: "salary",
  income: 0,
  incomeData: localStorage.getItem("incomeData")
    ? JSON.parse(localStorage.getItem("incomeData"))
    : {},
  totalIncome: 0,
};
