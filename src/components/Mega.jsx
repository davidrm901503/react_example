import React, { Component } from 'react';
class Mega extends Component {
  constructor(props) {
      super(props);
      this.state = {
        toogleChildren:this.props.visible
      }
  }
  
  toogleChildren(e){
    e.preventDefault();
    if (window.innerWidth < 768)
      {
        this.setState({ toogleChildren: !this.state.toogleChildren});
      }
    
  }
  render() {

    const childWithProp = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {visible: this.state.toogleChildren ? "block": "none"});
  });
     return <li >
              <a href="#">{this.props.title} <span onClick = {this.toogleChildren.bind(this)} className="indicator">+</span></a>
              {childWithProp}
            </li>
          }
}
Mega.defaultProps= {
  visible :false 
};
export default Mega;