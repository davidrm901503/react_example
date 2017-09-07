
import React, { Component } from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';


class Container extends Component {
  render() {
    document.title="pepe";
    return (
      <div className="container" style={{marginTop: 80 + 'px'}}>
        <div className="row row-offcanvas row-offcanvas-right">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    );
  }
}

export default Container;

