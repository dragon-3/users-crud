import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import CrudComponent from "./crud/CrudComponent";
import EditDataComponent from './EditDataComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HomeComponent />
      {/* <CrudComponent /> */}
    </div>
  );
}

export default App;
