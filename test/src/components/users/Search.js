import React, { Component } from 'react'

class Search extends Component {
  
  state={
    text: ''
  }
  
  
  onChange=(e) =>{                                         //we are initialising a method for imput.
    this.setState({[e.target.name]: e.target.value})                      //this  -- e.target.name ,, will help even if we have different names, like text, email, 
  }

  onSUBmit=(e)=>{
    console.log(this.state.text);  
    e.preventDefault();
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.onSUBmit} className="form">
          <input type="text" name="text" placeholder="Search Users..." 
              value={this.state.text} 
              onChange={this.onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
      </div>
    )
  }
}

export default Search
