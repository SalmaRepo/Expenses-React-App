import LandingPageContext from './contexts/LandingPageContext/LandingPageContextProvider';
import LandingPage from './components/LandingPage/LandingPage';
import Income from './components/Income/Income';
import './App.css';
import IncomeContextProvider from './contexts/IncomeContext/IncomeContextProvider';
import SpendingContextProvider from './contexts/SpendingContext/SpendingContextProvider';
import Spending from './components/Spending/Spending';
import TodayBalance from './components/TodayBalance/TodayBalance';
import History from './components/History/History';

function App() {
  return (
    <>
      <LandingPageContext>
        <LandingPage />
      </LandingPageContext>

      <div
         className='appClassForCalculations'
      >
        <IncomeContextProvider>
          <SpendingContextProvider>
            <TodayBalance />

            <History />
            <Income />
            <Spending />

          </SpendingContextProvider>
        </IncomeContextProvider>
      </div>
    </>
 
  );
}

export default App;
