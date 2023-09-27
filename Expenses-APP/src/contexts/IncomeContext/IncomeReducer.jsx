export function incomeReducer(state, action) {
  switch (action.type) {
    case "setIncome":
      localStorage.setItem(
        "incomeData",
        JSON.stringify({
          ...state,
          income: action.payload,
          incomeData: {
            ...state.IncomeData,
            [state.incomeType]: state.incomeData[state.incomeType]
              ? state.incomeData[state.incomeType] + parseInt(state.income)
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

    case "setIncomeType":
      return { ...state, incomeType: action.payload };
    case "setIncomeData":
      return { ...state, incomeData: action.payload };
    case "setTotalIncome":
      return {
        ...state,
        totalIncome: Object.values(state.incomeData).reduce((acc, data) => {
          acc += parseInt(data);
          return acc;
        }, 0),
      };
  }
}

export const incomeInitialState = {
  income: 0,
  incomeType: "salary",
  incomeData: localStorage.getItem("incomeData")
    ? JSON.parse(localStorage.getItem("incomeData"))
    : {},
  totalIncome: 0,
};
