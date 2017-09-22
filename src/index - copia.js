import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar'
import registerServiceWorker from './registerServiceWorker';

var companyTitle= "Titulo";
var navBarItems=[
  {
    titulo:"Menu 1",
    href:"#"
  },
  {
    titulo:"Menu 2",
    href:"#"
  },
  {
    titulo:"Drop1 Down",
    href:"#",
    submenu:[
      {
        titulo:"Menu 1",
        href:"#"
      },
      {
        titulo:"Menu 2",
        href:"#"
      }
    ]
  }
];
var navBarItemsRight=[
  {
    titulo:"Menu 1",
    href:"#"
  },  
  {
    titulo:"Drop1 Down",
    href:"#",
    submenu:[
      {
        titulo:"Menu 1",
        href:"#"
      },
      {
        titulo:"Menu 2",
        href:"#"
      }
    ]
  }
]


ReactDOM.render(
  <NavBar bgColor="black" colorLink="white" title={companyTitle} data = {navBarItems} data_r = {navBarItemsRight} >
  
  </NavBar>,document.getElementById('root')
);

registerServiceWorker();

