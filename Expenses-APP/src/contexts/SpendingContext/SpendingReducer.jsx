export function spendingReducer(state, action) {
    switch (action.type) {
      case "setSpendingType":
        return { ...state, spendingType: action.payload };
      case "setSpending":
        return { ...state, spending: action.payload };
      case "setSpendingData":
          for(let spendingType in state.spendingData){
              if(spendingType===state.spendingType){
                  return {
                      ...state,
                      spendingData: {
                        ...state.spendingData,
                        [spendingType]:state.spendingData[spendingType]+parseInt(state.spending),
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
        };
    }
  }
  
  export const initialSpendingState = {
    spendingType: "",
    spending: 0,
    spendingData: localStorage.getItem("spendingDataStorage")
    ? JSON.parse(localStorage.getItem("spendingDataStorage"))
    : {},
  };
  