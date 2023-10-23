import './App.css';
import { MainCompenent } from './components/MainComponent';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainCompenent></MainCompenent>
      </BrowserRouter>
    </div>
  );
}

export default App;
