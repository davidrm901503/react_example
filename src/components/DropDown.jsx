import React, { Component } from 'react';
 class DropDown extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewChildrens:this.props.visible
      }
  }

  hideOpen(e){
    if (window.innerWidth > 769)
      {
        this.setState({ viewChildrens: false});   
      }
    
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.hideOpen.bind(this));
  }

  viewChildrens(e){
    e.preventDefault();
    if (window.innerWidth < 768)     
        this.setState({ viewChildrens: !this.state.viewChildrens});      
  }
  render() {
    var styles ={
      display:this.state.viewChildrens ? "block" : "none "
    }
    return <li >
            <a href="#">{this.props.title}
              <span onClick = {this.viewChildrens.bind(this)} className="indicator">+</span>
              </a>
            <ul className="dropdown" style = {styles}>
              {this.props.children}
            </ul>
          </li>
           }
}
DropDown.defaultProps= {
  visible :false 
};

export default DropDown;