import React from 'react';            //main library
import ReactDOM from 'react-dom';         //which is on rendering the main browser
import App from './App';                         //the main app component

ReactDOM.render(                                 //method -- takes in two thing  -- 1.what you wan to render(app component)      2. where you want to render
  <React.StrictMode>
    <App />                                       
  </React.StrictMode>,                              //1. app component           //  this is getting rendered to root (id) in one only index.html page --and so it is a single page  application
  document.getElementById('root')                  //2.  where you want to render it - id --root(in index.html - rember this) 
);
