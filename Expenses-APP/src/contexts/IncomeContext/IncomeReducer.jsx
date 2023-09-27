export function incomeReducer(state, action) {
    switch (action.type) {
      case "setIncome":
        return { ...state, income: action.payload };
      case "setIncomeType":
        return { ...state, incomeType: action.payload };
      case "setIncomeData":
        return { ...state, incomeData: action.payload };
    }
  }
  
  export const incomeInitialState = {
    income: 0,
    incomeType: "",
    incomeData: localStorage.getItem("incomeDataStorage")
      ? JSON.parse(localStorage.getItem("incomeDataStorage"))
      : {},
  };