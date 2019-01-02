import React, { Component } from 'react';
import MainMenu from '../MainMenu/MainMenu';
import Landing from '../Landing/Landing';

class Dash extends Component {
   render() {
      return (
         <div>
            <MainMenu />
            <Landing />
            {/* <Footer /> */}
         </div>
      );
   }
}

export default Dash;