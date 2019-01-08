import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Landing.css';


class Landing extends Component {
   render() {
      return (
         <div>
           {/* Carousel */}
           <Carousel>
            <Carousel.Item>
               <div className="carousel-item" 
                  responsive='true' 
                  style={{backgroundImage: 'url(Images/slide1.jpg)'}} 
               />
                  <Carousel.Caption>
                     <h1>Men</h1>
                     <hr />
                     <h4>Suits</h4>

                     <button id="button-style">Shop</button>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <div className="carousel-item" 
                  responsive='true' 
                  style={{backgroundImage: 'url(Images/slide2.jpg)'}} 
               />
                  <Carousel.Caption>
                     <h1 id="h14w">Women</h1>
                     <hr />
                     <h4 id="h44w">Casuals</h4>
                     <button id="button-style">Shop</button>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <div className="carousel-item" 
                  responsive='true' 
                  style={{backgroundImage: 'url(Images/slide3.jpg)'}} 
               />
                  <Carousel.Caption>
                     <h1>Coats</h1>
                     <button id="button-style">Shop</button>
                  </Carousel.Caption>
            </Carousel.Item>
         </Carousel>

         </div>
      );
   }
}

export default Landing;