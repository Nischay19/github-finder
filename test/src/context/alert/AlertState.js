//we are going to write all our actions
// we are going to use TYPES

import React, { useReducer } from 'react';

import AlertContext from './alertContext';
import AlertReducer from './alertReducer'



import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'






// this will be our initial state
const AlertState = props => {             
  
  const initialState = {                                     //or   --  const initialState = null;
    alert: null 
  };                                           



            
//basically to dispatch to our reducer   -- if we call an action it will make a request to github get our response and the we dispatch a type back to reducer
//user reducer hook here 

const [state, dispatch] = useReducer(AlertReducer, initialState);                                                                        //state and dispatch is const so written everywhere.... and we will get it through   hook usereducer  with  --github reducer and--  initialstate







//set alert action
    const  setAlert = ( msg,type) =>{

      dispatch({
        type: SET_ALERT,
        payload: { msg ,type }
      });
      setTimeout( () =>  dispatch({ type: REMOVE_ALERT }) ,   5000 );                                      //so the dispatch remove alert is sent to reducer after 5 seconds
    };














//we basically have tp wrap our entire application through provider
//so we are making our entire application available to these state and props
    return (
    <AlertContext.Provider
      value={{

        alert: state,
        setAlert

      }}
    >     
      {props.children} 

    </AlertContext.Provider>
  );
};




export default AlertState;