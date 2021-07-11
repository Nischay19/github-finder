import React,{ Fragment } from 'react'
import spinner from './spinner.gif';         //we can import images due to webpack module we have downloaded

 

const Spinner = () => {                              //if we have no js inside the return bracket hen we can return directly, without writing te -- return -- 
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style= {{ width: '200px', margin: 'auto', display: 'block' }} />
    </Fragment>
  );
};


export default Spinner