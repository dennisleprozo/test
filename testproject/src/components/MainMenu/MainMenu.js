import React, { Component } from 'react';
import dsolo from '../../images/dsolo.png'
import { Link } from 'react-router-dom'
import './Menu.css'


class MainMenu extends Component {
   render() {
      return (
         <div>
            <h1  style={{backgroundColor: "#ddd"}}>
               <Link to="/">
                  <img src={ dsolo } id="logo" alt="logo"></img>  
               </Link>Deviant
            </h1>
            <div style={{backgroundColor: "gray"}}>
               Main Navigation Bar
            </div>

         </div>
      );
   }
}

export default MainMenu;

