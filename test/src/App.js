import React from 'react';
//    import logo from './logo.svg';            - we deleted it     //main logo
import './App.css';                   //global css

function App() {                         //app is the function--  components can be functions or classes
  return ( 
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  );
}

export default App;              //this is where the app gets exported


//we first make the  app component as a class and after we will learn  making app component as a function