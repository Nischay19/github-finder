
import React, {  Fragment ,Component } from 'react';                                 //   Instead of writing REACT.COMPONENT , we include our --  React , { COMPONENT }  here
                                                                //import logo from './logo.svg';                      - we deleted it     //main logo
import './App.css';                                            //global css

import Navbar from './components/layout/Navbar'
import UserItem from './components/users/UserItem';


class App extends Component {                         //app is the function--  components can be functions or classes            --rn we have class  ---  
                                                               //we have to extend the core react component    --   adding the React.Component CLASS    --which includes all the lifecycle methods and all



  render(){                                           //to return from a class , we need a method. and that is render    ...    and so put all the return part init
                                                          // const person =',john doe'                           // we can create  variables

                                                          //   const fun = () => ' here is the function output'              //create function and return it too

                                                          //   //function_method = () => 'Bars, return of the method';         //this is part of the class so , write  --- this.function_name
                                                        
                                                          // const loading =false;

                                                          // // if (loading){
                                                          // //   return <h4> Loading...</h4>
                                                          // // }

                                                          // //another way of conditionals-- through &&
                                                          // const showname =true;

    return ( 
    <div className="App">  
      
                                                                        {/* {loading ? <h4>Loading...</h4> : <h3> conditional through ternary operator and conditional through  -- {showname && person} </h3>}              
                                                                    
                                                                          <h1>Hello from React {person.toUpperCase() }</h1>  
                                                                          
                                                                          <Fragment>
                                                                            <h2>hello again ,but not as a div, this is returned by a function- {fun()}</h2>
                                                                          </Fragment> */}
    
    
      <h1>hello from App.js</h1>
      <Navbar title='Github finder' icon= 'fab fa-github' />
      <UserItem />
    </div>
    );                                                              //this is JSX -almost like html    -- javascript syntax extension
  }
  
}






/*//   DIFFERENCE bw JSX and HTML   

      -instead of class we have className
      - for attribute used in the Label tag -- use htmlFor instead
      
      -JSX has to have one parent element --  like a div surrounding the h1,p ... tags 
          -if we write h2 tag then----   LINTING ERROR,PARSING ERROR     -- adjacet  jsx elts must be enclosed in a tag 
      
      --- if we want no div for the parent element 
      use FRAGMENT
      
*/

/*
      -- so we can write javascript in {} in jsx tags
      -- we can involve variables like we did in the js
      -- we can even output functions
      -- 
 */













export default App;              //this is where the app gets exported







//we first make the  app component as a class and after we will learn  making app component as a function