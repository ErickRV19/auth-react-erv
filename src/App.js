import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Logout } from './Logout';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        <Logout />
      </header>
    </div>
  );
}

export default App;
