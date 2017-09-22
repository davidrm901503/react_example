import React, { Component } from 'react';
var classNames = require('classnames');
class MegaCol extends Component {

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