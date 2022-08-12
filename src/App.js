import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import CrudComponent from "./crud/CrudComponent";
import EditDataComponent from './EditDataComponent';
import UpdateComponent from './crud/UpdateComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch
} from "react-router-dom";


function App() {
  return (
      <div className="App">
      <Router>
        <>
          <Switch>
          
            <Route path="/:id" exact component={UpdateComponent} /> 
            <Route path="/" component={HomeComponent} />
            </Switch>
        </>
      </Router> 
      </div>

  );
}

export default App;
