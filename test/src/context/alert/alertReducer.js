import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'








export default(state, action) => {              //reducer takes i 2 things -- state action  

  switch (action.type) {
    case SET_ALERT:
      return action.payload;                         //we are returning the setalert which is the msg and the type
    
    case REMOVE_ALERT:
      return null;                                    //set the alert back to null
    
    default:
      return state;
  }


}