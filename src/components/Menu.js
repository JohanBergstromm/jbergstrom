import React, { Component } from 'react';

class Header extends Component {
  render() {
  	console.log(this.props)
    return (
      <div className="header">
        <ul>
        	<li>{this.props.test}</li>
        	<li>{this.props.test}</li>
        	<li>{this.props.test}</li>
        </ul>
      </div>
    );
  }
}

export default Header;
