import Income from "./components/Income/Income";

import "./App.css";
import IncomeContextProvider from "./contexts/IncomeContext/IncomeContextProvider";
import SpendingContextProvider from "./contexts/SpendingContext/SpendingContextProvidr";
import Spending from "./components/Spending/Spending";

function App() {
  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
        backgroundColor: "lightYellow",
        border: "2px solid black",
      }}
    >
      <IncomeContextProvider>
        <Income />
      </IncomeContextProvider>

      <SpendingContextProvider>
        <Spending />
      </SpendingContextProvider>
    </div>
  );
}

export default App;
