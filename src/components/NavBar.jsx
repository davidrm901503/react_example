
import React, { Component } from 'react';
import SingleItem from './SingleItem'
import DropItem from './DropItem'
import RightSide from './RightSide'


class NavBar extends Component {
  render() {
    var estilos = {
    background:this.props.bgColor
   };
   var itemStyle = {
     color:this.props.colorLink     
   };

   var createItems= function(item,index){
    
     if (item.submenu){
      return <DropItem key={item.titulo + index} title= {item.titulo}  data = {item.submenu}/>
     }
     else{
      return <SingleItem key={item.titulo + index} title= {item.titulo} href={item.href}/>
    }     
  };

    return (
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="">{this.props.title}</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
       <li className="active"><a href="">Link <span className="sr-only">(current)</span></a></li>
       {this.props.data.map(createItems)}
      </ul>
      <RightSide data = {this.props.data_r}/>
    </div>
  </div>
</nav>
    );
  }
}

export default NavBar;
