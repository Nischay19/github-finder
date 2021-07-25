//we are going to write all our actions
// we are going to use TYPES


import React, { useReducer } from 'react';
import axios from 'axios';                       //we wont be making request from app component anymore and will be making request here

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS
} from '../types'



let githubClientId;                                        //now we initialised two variables here because the client ids in env.local is used here.. nad we do not need that to be in our production
let githubClientSecret;

//now we check the environmemts..            //that they are not in the production

if(process.env.NODE_ENV !== 'production') {
  githubClientId =process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} 
else {                                    //now if we are in production then we want to use is  normal global variable
  githubClientId =process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}





// this will be our initial state

const GithubState = props => {              //this is a function
  
  const initialState ={                                           //this is basically our github stte that has o do woth our users
    users: [],
    user: {},
    repos: [],
    loading:false
  }                                              //now the github state is gonna include all of ouractions



            
  //basically to dispatch to our reducer   -- if we call an action it will make a request to github get our response and the we dispatch a type back to reducer
  //user reducer hook here 


const [state, dispatch] = useReducer(GithubReducer, initialState);           //state and dispatch is const so written everywhere.... and we will get it through   hook usereducer  with  --github reducer and--  initialstate





    
//search users
              //search github users
                const  searchusers = async text =>{
                   setLoading();
                    const res =await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);                          //  we have added                 /search/users?q=${text}        this is query and that the text we search is inputed in the url 
                                            //replaced by setusers/loading        //    this.setState({users: res.data.items , loading: false });               //the response from above is stored in     res.data.items      because their is also other stufff in res.data

                    dispatch ({
                      type: SEARCH_USERS,                     // then we get the type of search_users  dispatched with the below data         //  now reducer will be responsible to send the type to any component that requires this
                      payload: res.data.items                 // so we payload the data we want to send through the type
                    });                                                                                                                                       // setUsers(res.data.items);       // we are replacing this whole function calling by the dispatch
                };

//get users
                  const  getUser = async (username) => {     
                    setLoading ();

                    const res =await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);                //  we have added                 /search/users?q=${text}        this is query and that the text we search is inputed in the url 

                    dispatch({                                      //    setUser(res.data);            //  // setLoading();           //the response from above is stored in     res.data.items      because their is also other stufff in res.data   but here we are storing single user data so just res.data
                      type: GET_USERS,
                      payload: res.data     
                    })  
                  }

//get repos
                    const getUserRepos = async (username) => {
                        
                      setLoading();

                      const res =await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);                //  we have added                 /search/users?q=${text}        this is query and that the text we search is inputed in the url 

                      dispatch({                                                            //                       setRepos(res.data);                            // setLoading(false);                   
                        type: GET_REPOS,
                        payload: res.data
                      })
                    }

//clear users
                     const clearusers = () =>{ dispatch({ type : CLEAR_USERS}); };                 //previous code --                   // setUsers([]);  //                  // setLoading(false);
              
//set loading
                    const setLoading =() => 
                      dispatch({ type: SET_LOADING })                  //so we are creating a function that we want to dispatch to our reducer  and we are going to  dispatch is an object that has a type,, and the reducer is going to catch that     // so whenever the function is called above the reducer does is change the loading to true

















//we basically have tp wrap our entire application through provider
//so we are making our entire application available to these state and props
    return <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchusers,
        clearusers,
        getUser,
        getUserRepos
      }}
    >     
      {props.children} 

    </GithubContext.Provider>

}




export default GithubState;