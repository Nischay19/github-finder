import React , {useState} from 'react';

import PropTypes from 'prop-types';







const Search = ({searchUsers, showClear , clearUsers ,setAlert}) => {
  
                                                            //so here with usestate hook we have crated a text state here
  const [text, setText] = useState('');                 //we only have one piece of state, so destructurize., and create a method to change the state={setText}  .. then we set it USESTATE( ' DEFAULT VALUE FOR IT ' )      
  
  


                                    //as we are using functional components so just add const infront of any finction you are using
  const   onChange=(e) =>{                                         //we are initialising a method for imput.

                                    //        this.setState({ [e.target.name]: e.target.value })                      //this  -- e.target.name ,, will help even if we have different names, like text, email, 
      setText(e.target.value);     //insteado of above, we just write the value we want to set the state to
  }



   const onSUBmit=(e)=>{

    e.preventDefault();
    if(text === ''){
       setAlert('please enter something', 'light');
    }  
    else{

      searchUsers(text);      //we created a prop for search which we defined in app.js as a method which is taking in as a parameter  --this.state.text
      setText('');                  //after doing everything we clear all the fields
  
    }

  }

  






                            // render() {
                           //    const {showClear, clearUsers} = this.props;        //props not come like this in functiojal components               //this is to remove the this.prop from the props , destructure the code

    return (
      <div>
        <form onSubmit={onSUBmit} className="form">
          <input type="text" 
                 name="text"
                 placeholder="Search Users..." 
                 value={text} 
                 onChange={onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        
        {showClear &&(                        //if the this.prop.clearuser is true then we want the button to show.
                          <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        )}
      
      </div>
    )
  
}








Search.propTypes ={
  searchUsers: PropTypes.func.isRequired,                //as searchusers is a function
  clearUsers: PropTypes.func.isRequired,
  showClear:PropTypes.bool.isRequired,
  setAlert:PropTypes.func.isRequired
};



export default Search
