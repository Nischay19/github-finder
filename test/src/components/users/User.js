import React, { Component } from 'react'

import Spinner from '../layout/spinner';

import PropTypes from 'prop-types';

 class User extends Component {
  




  componentDidMount(){                                           //thisfires of right after component is loaded
    
    this.props.getUser(this.props.match.params.login);                //so all the user state data in the app.js is being passed in here to getuser prop. and now lets extract all the data       //this.props.match.params.login --  this is put in the getuser prop and that is the username    ..    so that we can get all the user data     // we gwt the aram from the path='/user/:login' in the Route tag.
    
 
  }
  
  
  render() {                                   //no state but lifecycle method



    const {                          //this is all the data we get in the this.props.user which is given by theupi. so here is where we get and store all the data here
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      followig,
      public_repos,
      public_gists,
      hireable
    }  = this.props.user; 

    const { loading } =this.props;

    if (loading)

    return (
      <div>
           
      </div>
    )
  }
}

// User.propTypes ={
//   loading: 
// }


export default User
