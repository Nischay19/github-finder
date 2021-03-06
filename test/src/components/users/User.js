import React, {Fragment, Component } from 'react'

import Spinner from '../layout/spinner';
import Repos from '../Repos/Repos';



import PropTypes from 'prop-types';


import {Link} from 'react-router-dom';

 class User extends Component {
  




  componentDidMount(){                                           //thisfires of right after component is loaded
    
    this.props.getUser(this.props.match.params.login);                //so all the user state data in the app.js is being passed in here to getuser prop. and now lets extract all the data       //this.props.match.params.login --  this is put in the getuser prop and that is the username    ..    so that we can get all the user data     // we gwt the aram from the path='/user/:login' in the Route tag.
    this.props.getUserRepos(this.props.match.params.login);
 
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
      following,
      public_repos,
      public_gists,
      hireable
    }  = this.props.user; 

    const { loading, repos } =this.props;

    if (loading){
      return <Spinner/>;
    }

    return (
      <Fragment>
          <Link to='/' className='btn btn-light'> Back to Search </Link>

          Hireable: {' '}
          {hireable 
              ?  <i className="fas fa-check text-success" />
              :  <i className="fas fa-time-circle text-danger" /> }

          <div className="card grid-2">
            <div className="all-center">
                    <img src={avatar_url}
                       className="round-img"
                        alt="" 
                        style ={{width : '150px'}} />
                        <h1>{name}</h1>
                        <p>{location}</p>
                </div>
                <div>
                  {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                          </Fragment>
                          )}
                    <a href={html_url} className="btn btn-dark my-1"> Visit Github Profile </a>

                <ul>
                  <li>
                    {login && <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>}
                  </li>
                </ul>     

                
                <ul>
                  <li>
                    {blog && <Fragment>
                      <strong>Website: </strong> {blog}
                    </Fragment>}
                  </li>
                </ul>     

            </div>
          </div>

        <div className="card text-center">
          <div className="badge badge-primary"> Followers : {followers}</div>
          <div className="badge badge-success"> Following : {following}</div>
          <div className="badge badge-light"> Public Repos : {public_repos}</div>
          <div className="badge badge-dark"> Public gists : {public_gists}</div>
        </div>
          
          <Repos repos={repos} />
      </Fragment>
    )
  }
}

User.propTypes ={
  loading:PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired                         //we have added repos as a prop in app.js in user component
};


export default User;
