import React ,{useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
                    // import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';




const Users=() => {
  
  const githubContext =useContext(GithubContext);          // so we initialize with a lower case g    // now as  we have written this we can bring in any state/value from github state


  const {loading ,users} =githubContext;              // so we just destructurized it so that we dont have to change anything in the below code... just like we destructured it in props.

                            // state={
                            //   users:[
                            //     {                     
                            //       id: '1',
                            //       login:'mojombo',
                            //       avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',                   
                            //       html_url: 'https://github.com/mojombo'                   
                            //     },
                            //     {                     
                            //       id: '2',
                            //       login:'defunkt',
                            //       avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',                   
                            //       html_url: 'https://github.com/defunkt'                   
                            //     },
                            //     {                     
                            //       id: '3',
                            //       login:'pjhyett',
                            //       avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',                   
                            //       html_url: 'https://github.com/pjhyett'                   
                            //     }                                                                                  //hardcoded 3 users

                            //   ]       //will loop this array in the render method by using map(hig order array method)
                            // }




  if(loading){
    
    return <Spinner />

  } else{

        return (
          <div style={userStyle}>
            {users.map(user => (    <UserItem key={user.id} user={user} />    )                   // this user variable repreents entire array, and now we are passing it as a prop to UserItems
                      )}
          </div>
        )


  }

}


              // Users.propTypes ={
              //   users: PropTypes.array.isRequired,
              //   loading: PropTypes.bool.isRequired
              // }


const userStyle ={
  display:'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1r'
}



export default Users