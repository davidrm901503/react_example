
import React, { Component } from 'react';
import NavBar from './NavBar';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Footer from './Footer';


class Main extends Component {
  render() {
    document.title="Home";
    return (
      
      <div>
        <NavBar />
        <div className="container" style={{marginTop: 80 + 'px'}}>
          <div className="row row-offcanvas row-offcanvas-right">
            <LeftSide />
            <RightSide />
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default Main;

