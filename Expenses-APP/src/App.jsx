import './App.css';
import LandingPageContext from './contexts/LandingPageContext/LandingPageContextProvider';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <>
      <LandingPageContext>
        <LandingPage />
      </LandingPageContext>
    </>
  );
}

export default App;
