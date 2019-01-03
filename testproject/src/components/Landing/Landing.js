import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class Landing extends Component {
   render() {
      return (
         <div>
           {/* Carousel */}
           <Carousel>
               <Carousel.Item>
                  <div className="carousel-item" responsive='true' style={{backgroundImage: 'url(Images/ems.jpg)'}} />
                     <Carousel.Caption>
                        <h1>DEVIANT APPAREL</h1>
                    </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <div className="carousel-item" responsive='true' style={{backgroundImage: 'url(Images/yeezy-boost-700-mauve-wallpaper-4k.jpg)'}} />
                     <Carousel.Caption>
                        <h1>DeViant Pants</h1>
                     </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
               <div className="carousel-item" responsive='true' style={{backgroundImage: 'url(Images/watch.jpg)'}} />
                     <Carousel.Caption>
                        <h1>DeViant Collection</h1>
                     </Carousel.Caption>
               </Carousel.Item>
            </Carousel>

         </div>
      );
   }
}

export default Landing;