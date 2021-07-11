import React, { Component } from 'react'

 class UserItem extends Component {
  

          // //u dont need a constructor to start a state  
          //   constructor(){
          //     super();                    // we needto call this js method(function)
          //     this.state= {                     //state is just a jsobject
          //       id: 'id',
          //       login:' mojombo',
          //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',                    //avatar url  stored in component state,weare outputing in the img 
          //       html_url: 'https://github.com/mojombo'                     //we have stuff in our state, now use it in our render
          //     };
          // }


  state = {                                                  //state is just a jsobject,, which can store values for being used in the class based component
    id: 'id',
    login:' mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',                    //avatar url  stored in component state,weare outputing in the img 
    html_url: 'https://github.com/mojombo'                     //we have stuff in our state, now use it in our render
  };
  
  
  render() {

    const {login,avatar_url,html_url } =this.state                   //this {} is used for destructuring, pulling out some states //by this we dont need ---   this.state. ---   to be written everywhere in {}

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style= {{ width: '60px'}} />     
        <h3> {login}</h3>

        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">More</a></div>     
      </div>
    )
  }
}                                //so we have some user-item component and some state within our component

export default UserItem