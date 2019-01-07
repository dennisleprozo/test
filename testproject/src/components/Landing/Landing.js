import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


class Landing extends Component {
   render() {
      return (
         <div>
           {/* Carousel */}
           <Carousel>

               <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1542838077-7fb322b21b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
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
         </Carousel>

         </div>
      );
   }
}

export default Landing;