import React from 'react'

import PropTypes from 'prop-types';

import {Link} from 'react-router-dom'








  //read this
 //this user, has come  from APP (as a state in APP)  to USER as prop then in USER , we mapped it to USERITEM as a prop again  
 
function UserItem ({user : { login , avatar_url, html_url }}) {                             //or arrow function         const UserItem =()=>{       ////////we destructured the user by opening and writing, login,avatar_url
  

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



//now we are pulling the details of user from USER.JS > state so remove this state
        // state = {                                                                   //state is just a jsobject,, which can store values for being used in the class based component
        //   id: 'id',
        //   login:' mojombo',
        //   avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',                    //avatar url  stored in component state,weare outputing in the img 
        //   html_url: 'https://github.com/mojombo'                     //we have stuff in our state, now use it in our render
        // };
  
  

                                                //this is because we passed in a prop of user in USERS.JS
  //      const {login,avatar_url,html_url } =props.user;                   //this {} is used for destructuring, pulling out some states //by this we dont need ---   this.state. ---   to be written everywhere in {}

  return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style= {{ width: '60px'}} />     
        <h3> {login}</h3>

        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
             
      </div>
    );
  
};                                //so we have some user-item component and some state within our component




UserItem.propTypes ={ 
  user: PropTypes.object.isRequired,
};


export default UserItem