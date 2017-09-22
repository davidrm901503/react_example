import React, { Component } from 'react';
var classNames = require('classnames');
class MegaItem extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    const classes = {};
    classes["megamenu"] = true;  
    classes[this.props.tipo] = true;    
    const attrs = {  
      className: classNames(classes)   ,
      style: {
        display:this.props.visible
      }
    };
    return <div {...attrs}>
              <div className="megamenu-row">
                {this.props.children}
                  
              </div>
            </div>
           }
}

export default MegaItem;