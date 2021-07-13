import React from 'react'

import PropTypes from 'prop-types';





const Navbar= ({icon,title}) => {
  

  
    return (
      <nav className ='navbar bg-primary'>
        <h1>
          <i className ={icon} />{title}
        </h1>
      </nav>
    )
}




Navbar.defaultProps ={                //if we dont mention anything in the App.js in the navbar tag,then automatically these default props will apply
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes={                          //if we put in anything other than (string.isrequired) then it will show an error
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};


export default Navbar










// from es7 react snippe extension - just write forclass based component -rce