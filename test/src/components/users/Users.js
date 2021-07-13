import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';


const Users=({users ,loading}) => {
  
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


Users.propTypes ={
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}


const userStyle ={
  display:'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1r'
}



export default Users