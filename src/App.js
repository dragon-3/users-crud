import logo from './logo.svg';
import './App.css';
import HomeComponent from './HomeComponent';
import CreateComponent from "./crud/CreateComponent";


function App() {
  return (
    <div className="App">
      <HomeComponent />
      <CreateComponent />
    </div>
  );
}

export default App;
