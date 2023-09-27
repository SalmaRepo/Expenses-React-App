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
        style={{
          width: '50%',
          margin: '0 auto',
          backgroundColor: 'lightYellow',
          border: '2px solid black',
          padding: '2rem',
        }}
      >
        <IncomeContextProvider>
          <SpendingContextProvider>
            <TodayBalance />
            <Income />
            <Spending />

            <History />
          </SpendingContextProvider>
        </IncomeContextProvider>
      </div>
    </>
  );
}

export default App;
