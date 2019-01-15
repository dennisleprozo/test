import React, { Component } from 'react';
import Video from '../../video/Dolce.mp4'

class Show extends Component {
     render() {
      return (
         <div>
            <video id="background-video" loop autoPlay>
               <source src={Video} type="video/mp4" />
               <source src={Video} type="video/ogg" />
            </video>
         </div>
      );
   }
}

export default Show;