import React, { Component } from 'react';
import SingleItem from './SingleItem'
import DropItem from './DropItem'

class RightSide extends Component {
 
  render() {

    var createItems= function(item,index){
    
     if (item.submenu){
      return <DropItem key={item.titulo + index} title= {item.titulo}  data = {item.submenu}/>
     }
     else{
      return <SingleItem key={item.titulo + index} title= {item.titulo} href={item.href}/>
    }     
  };
    return (
      <ul className="nav navbar-nav navbar-right">    
        {this.props.data.map(createItems)}
      </ul>
    );
  }
}

export default RightSide;
