import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.css';
import {  BrowserRouter as Router,  Route,  Redirect} from 'react-router-dom'
import Main from './components/Main';
import Otro from './components/Otro';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router basename="/">
    <div>
      <Redirect to="/home" />
      <Route path="/home" component={Main} />
      <Route path="/otro" component={Otro} />
    </div>
  </Router>,
  document.getElementById('root'));

registerServiceWorker();

