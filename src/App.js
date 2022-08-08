import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import CrudComponent from "./crud/CrudComponent";


function App() {
  return (
    <div className="App">
      <HomeComponent />
      <CrudComponent />
    </div>
  );
}

export default App;
