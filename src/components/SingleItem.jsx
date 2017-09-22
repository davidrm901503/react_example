import React, { Component } from 'react';


class SingleItem extends Component {
 
  render() {
    return (
       <li><a style={this.props.itemStyle} href={this.props.href}>{this.props.title}</a> </li>
    );
  }
}

export default SingleItem;
