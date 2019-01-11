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
                  style={{backgroundImage: 'url(Images/slide1.jpg)'}} />
                  <Carousel.Caption>
                     <h2> CLOTHING FOR MEN'S </h2>
                     <h1>Men's Outerwears and Blazers</h1>
                     <hr />
                     <h2>Basic suit features button-up fastening and chest pocket.</h2>
                     <button id="button-style"> $ 750.00 | Buy</button>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <div className="carousel-item" 
                  responsive='true' 
                  style={{backgroundImage: 'url(Images/slide2.jpg)'}} />
                  <Carousel.Caption>
                     <h2 id="h44w"> CLOTHING FOR WOMEN'S </h2>
                     <h1 id="h14w">Women's casual and dressy blouses</h1>
                     <hr />
                     <h2 id="h44w">Maeve woodland blue floral button front blouses</h2>
                     <button id="button-style"> $ 65.00 | Get the look</button>
                  </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <div className="carousel-item" 
                  responsive='true' 
                  style={{backgroundImage: 'url(Images/slide3.jpg)'}} />
                  <Carousel.Caption>
                     <h1 id="h1c"> Coats & Jackets </h1>
                     <hr />
                     <h2 id="h24c">Add Polished professionalism to your collection of working wardrobe with black and white contrast.</h2>
                     <button id="button-style"> $ 1250.00 |  View Collection</button>
                  </Carousel.Caption>
            </Carousel.Item>
         </Carousel>


         </div>
      );
   }
}

export default Landing;