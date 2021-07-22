import React, { Component } from 'react'

import PropTypes from 'prop-types';








class Search extends Component {
  
  state={              //state is an object
    text: ''
  }
  
  



  onChange=(e) =>{                                         //we are initialising a method for imput.
    this.setState({ [e.target.name]: e.target.value })                      //this  -- e.target.name ,, will help even if we have different names, like text, email, 
  }



  onSUBmit=(e)=>{
    e.preventDefault();
    if(this.state.text === ''){
       this.props.setAlert('please enter something', 'light');
    }  
    else{

      this.props.searchUsers(this.state.text);      //we created a prop for search which we defined in app.js as a method which is taking in as a parameter  --this.state.text
      this.setState({ text: ''});                  //after doing everything we clear all the fields
  
    }

  }

  






  render() {
    const {showClear, clearUsers} = this.props;                 //this is to remove the this.prop from the props , destructure the code

    return (
      <div>
        <form onSubmit={this.onSUBmit} className="form">
          <input type="text" 
                 name="text"
                 placeholder="Search Users..." 
                 value={this.state.text} 
                 onChange={this.onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        
        {showClear &&(                        //if the this.prop.clearuser is true then we want the button to show.
                          <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        )}
      
      </div>
    )
  }
}


Search.propTypes ={
  searchUsers: PropTypes.func.isRequired,                //as searchusers is a function
  clearUsers: PropTypes.func.isRequired,
  showClear:PropTypes.bool.isRequired,
  setAlert:PropTypes.func.isRequired
};



export default Search
