import logo from './logo.svg';         //main logo
import './App.css';                   //global css

function App() {                         //app is the function--  components can be functions or classes
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world, yo
        </a>
      </header>
    </div>
  );
}

export default App;              //this is where the app gets exported


//we first make the  app component as a class and after we will learn  making app component as a function