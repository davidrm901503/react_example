import React, { Component } from 'react';
import NavBar from './components/NavBar'



class App extends Component {

  render() {
    
    return (
      <NavBar data = {this.props.data} >
  
      </NavBar>
    );
  }
}

export default App;
