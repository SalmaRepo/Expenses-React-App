import Income from "./components/Income/Income";
import ContextProvider from "./contexts/ContextProvider";
import { MainContext } from "./contexts/mainContext";
import './App.css';

function App() {
  return( 
  
<ContextProvider>
  <p>hi</p>
 <Income/>

</ContextProvider>

  );
}

export default App;
