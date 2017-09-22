import React, { Component } from 'react';
var classNames = require('classnames');
class MegaCol extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    const classes = {};
    classes[this.props.tipo] = true;    
    const attrs = {  
      className: classNames(classes)     
    };
    return <div {...attrs}>                         
             {this.props.children}
          </div>
           }
}

export default MegaCol;