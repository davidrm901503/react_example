import React, { Component } from 'react';
 class Link extends Component {

  render() {
    return <li >
              <a href={this.props.title}>{this.props.title}</a>
              {this.props.children}
            </li>
           }
}

export default Link;