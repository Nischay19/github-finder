//any changes to the state are going to go through this stuff
//reducer is just a function which sends the actions which diff components require

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USERS
} from '../types'



export default(state, action) => {              //reducer takes i 2 things -- state action  



  switch(action.type){                    // we just need to evaluvate the type\    that was sent to reducer in the object along with possible paylaod
    
    case SEARCH_USERS:                                     // so search users s just a type to convey and tell the reducer to change the states of the corresponding actions inwhich the type is used 
      return {
        ...state,
        users: action.payload,                                  //so when searchuser is called then we dispatch and put users to the payoad.
        loading:false
      };
    case GET_USERS:
      return{
        ...state,
        user: action.payload,
        loading:false
      };
    case GET_REPOS:
      return{
        ...state,
        repos: action.payload,
        loading:false
      };
    case CLEAR_USERS:
      return{
        ...state,
        users: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,                                                //we just wanna return what is in the state // so we can only opy the stateand change that not original state..  ..  so we can do that by copying the state by spreader function ...
        loading: true
      };
    default : 
      return state;
  }
}