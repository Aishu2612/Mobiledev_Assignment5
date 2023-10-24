import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Assignment - 5
        </a>
      </header>
      <div>
        <UserDetails/>

      </div>
    </div>
  );
}

export default App;
