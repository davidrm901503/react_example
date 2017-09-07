
import React, { Component } from 'react';
import { About, Otro2 } from './About';
import NavBar from './NavBar';
import {
  Route,
  Link,
} from 'react-router-dom'


class Otro extends Component {
  render() {
    document.title="Otra";
    return (
      <div>
       
        <NavBar />
        <div className="container" style={{marginTop: 80 + 'px'}}>
          <div className="row row-offcanvas row-offcanvas-right">
            <h2>Otro Component</h2>
            <ul>
              <li>
                <Link to="/otro/otro1">
               link Subcomponente 1
                </Link>
              </li>
              <li>
                <Link to="/otro/otro2">
               link Subcomponente 2
                </Link>
              </li>
            </ul>
            <Route path={this.props.match.url + "/otro1"} component={About} />

            <Route path="/otro/otro2" component={Otro2} />
          </div>
        </div>

      </div>

    );
  }
}

export default Otro;
