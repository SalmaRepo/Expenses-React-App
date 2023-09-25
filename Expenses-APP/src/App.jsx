
import Income from "./components/Income/Income";
import ContextProvider from "./contexts/ContextProvider";
import { MainContext } from "./contexts/mainContext";
import './App.css';

function App() {
  return( 
  
<ContextProvider>

<Income/>

</ContextProvider>

  );
}

export default App;