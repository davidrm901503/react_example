import React, { Component } from 'react';
import SingleItem from './SingleItem'

class DropItem extends Component {
 
  render() {
    return (
      <li className="dropdown">
          <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.title} <span className="caret"></span></a>
          <ul className="dropdown-menu">
            {this.props.data.map((item,index) => {
              return  <SingleItem key={item.titulo + index} title= {item.titulo} href={item.href}/>
            })}         
          </ul>
        </li>
    );
  }
}

export default DropItem;
