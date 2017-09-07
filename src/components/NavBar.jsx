
import React, { Component } from 'react';

import { 
  NavLink
} from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/home">Project name</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">

          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/otro">Otra</NavLink>
          </li>
         
          </ul>
        </div>
      </div>
    </nav>
    );
  }
}

export default NavBar;
