import React, { Component } from 'react'

import PropTypes from 'prop-types';


export class Navbar extends Component {
  
  static defaultProps ={                //if we dont mention anything in the App.js in the navbar tag,then automatically these default props will apply
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  static propTypes={                          //if we put in anything other than (string.isrequired) then it will show an error
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className ='navbar bg-primary'>
        <h1>
          <i className ={this.props.icon} />{this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar












// from es7 react snippe extension - just write forclass based component -rce