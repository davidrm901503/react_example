import React, { Component } from 'react';
 class Link extends Component {
  constructor(props) {
      super(props);
  }
  
  render() {
    return <li >
              <a href={this.props.title}>{this.props.title}</a>
              {this.props.children}
            </li>
           }
}

export default Link;