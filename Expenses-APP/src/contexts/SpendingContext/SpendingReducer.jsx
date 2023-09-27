export function spendingReducer(state, action) {
  switch (action.type) {
    case "setSpendingType":
      return { ...state, spendingType: action.payload };
    case "setSpending":
      localStorage.setItem(
        "spendingData",
        JSON.stringify({
           ...state,
          spending: action.payload, 
          spendingData: {
            ...state.spendingData,
            [state.spendingType]: state.spendingData[state.spendingType]
              ? state.spendingData[state.spendingType] +
                parseInt(action.payload)
              : parseInt(action.payload),
          },
          dailyData:{
            ...state,
            dailyData:[...state.dailyData,{[new Date().toDateString()]:state.spendingData}]
          }  
        })
      );
      return {
        ...state,
        spending: action.payload,
        spendingData: {
          ...state.spendingData,
          [state.spendingType]: state.spendingData[state.spendingType]
            ? state.spendingData[state.spendingType] + parseInt(state.spending)
            : parseInt(action.payload),
        },
        
      };

    /* case "setSpendingData":
      for (let spendingType in state.spendingData) {
        if (spendingType === state.spendingType) {
          return {
            ...state,
            spendingData: {
              ...state.spendingData,
              [spendingType]:
                state.spendingData[spendingType] + parseInt(state.spending),
            },
          };
        }
      }
      return {
        ...state,
        spendingData: {
          ...state.spendingData,
          [state.spendingType]: parseInt(state.spending),
        },
      }; */
    case "setTotalSpending":
      return {
        ...state,
        totalSpending: Object.values(state.spendingData).reduce((acc, data) => {
          acc += parseInt(data);
          return acc;
        }, 0),
      };
    case 'setDailyData':
      return {
        ...state,
        dailyData:[...state.dailyData,{[new Date().toDateString()]:state.spendingData}]
      }  
    default:
      return state;
  }
}

export const initialSpendingState = {
  spendingType: "Food",
  spending: 0,
  spendingData: localStorage.getItem("spendingData")
  ? JSON.parse(localStorage.getItem("spendingData"))
  : {},
  totalSpending: 0,
  dailyData:[],
};
