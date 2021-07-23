import React, {  Fragment ,Component } from 'react'                                //   Instead of writing REACT.COMPONENT , we include our --  React , { COMPONENT }  here
                                                                //import logo from './logo.svg';                      - we deleted it     //main logo
import './App.css';                                            //global css

import Navbar from './components/layout/Navbar'
            //import UserItem from './components/users/UserItem';                      //we replaced this with users.js
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About'
import User from './components/users/User';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';











class App extends Component {                         //app is the function--  components can be functions or classes            --rn we have class  ---  
                                                               //we have to extend the core react component    --   adding the React.Component CLASS    --which includes all the lifecycle methods and all
    



  state ={                                                    //now we all the fetched data from the github api in this  state    ,, this is in the fetchdata from axios bracket,,,,, in which we setState the array to      res.data
    users: [],
    user:{},
    repos: [],

    loading: false,                                            //untill the data is shown, show this spin  ,, we change it when get the data by ----  setState()
    alert: null
  }





      // this is for the 30 users we had called through didmount

                          // async componentDidMount(){                              //lifcycle method -- Its one ex is render            
                            
                          //   this.setState({ loading: true});

                          //   const res =await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);                //this cient id,secret is so that we dont run out of requests

                          //   this.setState({users: res.data , loading: false });
                          // }







// create the function/method which you defined the search->prop too
    //search github users
  searchusers = async text =>{
    this.setState({loading: true});

    const res =await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);                //  we have added                 /search/users?q=${text}        this is query and that the text we search is inputed in the url 

    this.setState({users: res.data.items , loading: false });               //the response from above is stored in     res.data.items      because their is also other stufff in res.data

    console.log(text);
  };



  //get single github user
  getUser = async (username) => {
     
    this.setState({loading: true});

    const res =await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);                //  we have added                 /search/users?q=${text}        this is query and that the text we search is inputed in the url 

    this.setState({user: res.data , loading: false });                   //the response from above is stored in     res.data.items      because their is also other stufff in res.data


  }

  //Get users Repos
  getUserRepos = async (username) => {
     
    this.setState({loading: true});

    const res =await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);                //  we have added                 /search/users?q=${text}        this is query and that the text we search is inputed in the url 

    this.setState({repos: res.data , loading: false });                   //the response from above is stored in     res.data.items      because their is also other stufff in res.data


  }





  //clear users from state
  clearusers= () =>{
    this.setState({  users: [],   loading: false});
  };


  //set alert
  setalert =(msg,type) =>{
    this.setState({ alert : {msg , type} });
    setTimeout( () => this.setState({alert: null })  , 5000 )
  };


  render(){                                           //to return from a class , we need a method. and that is render    ...    and so put all the return part init

    const {users, user, repos , loading}= this.state;    //destructuring

                                                          // const person =',john doe'                           // we can create  variables

                                                          //   const fun = () => ' here is the function output'              //create function and return it too

                                                          //   //function_method = () => 'Bars, return of the method';         //this is part of the class so , write  --- this.function_name
                                                        
                                                          // const loading =false;

                                                          // // if (loading){
                                                          // //   return <h4> Loading...</h4>
                                                          // // }

                                                          // //another way of conditionals-- through &&
                                                          // const showname =true;


    return (                                 //everything should be in  --  ROUTER TAG
      
    <Router>
      <div className="App">  
      
                                                                        {/* {loading ? <h4>Loading...</h4> : <h3> conditional through ternary operator and conditional through  -- {showname && person} </h3>}              
                                                                    
                                                                          <h1>Hello from React {person.toUpperCase() }</h1>  
                                                                          
                                                                          <Fragment>
                                                                            <h2>hello again ,but not as a div, this is returned by a function- {fun()}</h2>
                                                                          </Fragment> */}
    
    
      <h1>hello from App.js</h1>
        <Navbar 
          title='Github finder' 
          icon= 'fab fa-github' />
      
      <div className="container">
        <Alert alert={this.state.alert}/>
        <Switch>    
          <Route 
            exact path='/' 
            render={props => (
            <Fragment>

              <Search 
                searchUsers={this.searchusers} 
                clearUsers={this.clearusers}  
                showClear={users.length > 0 ? true : false}
                setAlert={this.setalert}
              />   
              <Users  
                loading={loading} 
                users={users} 
              />   

            </Fragment>
          )} />

          <Route exact path='/about' component={About}/>   
          
          <Route exact path='/user/:login' render={props => (
            <User 
              {... props}
              getUser={this.getUser}
              getUserRepos={this.getUserRepos}
              user={user}
              repos={repos}
              loading={loading}/>
          )} />       

        </Switch>
      </div>
      </div>

    </Router>
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