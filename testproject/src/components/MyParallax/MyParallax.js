import React from 'react';
import './MyParallax.css';
import { Link } from 'react-router-dom';

const MyParallax = () => (
   <div>
      <div className="pimg1">
         <div className="ptext">

            <span className="border"> ALL CLEARANCE ITEMS </span>
         </div>
      </div>
 
      <section className="section section-light">
         <h3>BUY ONE GET ONE FREE</h3>
         <h1 id="h1-align">50% OFF</h1>
         <p>On selected products*</p>
         <h2 id="h2-align"><Link to="/shop">SHOP NOW</Link></h2>
      </section>

      <div className="pimg2">
         <div className="ptext">
            <span className="border"> WINTER EXTENDED SALE </span>
         </div>
      </div>
 
      <section className="section section-dark">
         <h2>CHOOSE THE BEST FOR YOUR PARTY OUTFIT</h2>
         <h4 id="h4-align">Party season is upon us! Get ready for it with a rock 'n' roll attitude. Leather jackets, graphics and all-black everything. Electric guitar not included.</h4>
        
      </section>

      <div className="pimg3">
         <div className="ptext">
            <span className="border"> HOLIDAY GIFT GUIDE </span>
         </div>
      </div>
 
      <section className="section section-dark">
         <h3>IMPRESS YOUR NEAREST AND DEAREST WITH YOUR GIFT-GIVING SKILLS</h3>
         <h1 id="h1-align2">BUY ONE GET ONE 50% OFF</h1>
         <h2 id="h2-align2"><Link to="/shop">SHOP GIFTS</Link></h2>
      </section>

        <section className="section section-footer">
         <p>HOME MEN WOMEN ACCESSORIES HOTLIST ABOUT</p>

         <p>Shipping Store Locator FAQ Login Sign Up Contact</p>
<hr />
         © 2019 DeViant Clothing. All Rights Reserved.
      </section>
    

   </div>
  
)

export default MyParallax;