import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCart } from "../../dux/reducer";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainMenu from '../MainMenu/MainMenu';

import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

import "./Cart.css";

// updateCart in dux
// take cart component
// mapStateToProps dux then render cart

class Cart extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      show: true,
      total: 0
    };
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.getCart = this.getCart.bind(this);
  }
  handleDismiss() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  //stripe token request
  onToken = token => {
    token.card = void 0;
    axios
      .post("/api/payment", {
        token,
        amount: Math.floor(this.state.total * 100)
      })
      .then(res => {
        console.log(res);

        axios.delete("/api/empty_cart").then(() => {
          this.getCart();
          // this.getTotal()
        });
      });
  };

  componentDidMount() {
    this.getTotal();
    this.getCart();
  }


// sum price item in cart
  getTotal() {
    axios.get('/api/getTotal').then(res => {
      console.log(res);
      this.setState({
        total: res.data[0].sum
      });
    });
  }
// read cart in dux
  getCart() {
    axios.get('/api/getCart').then(res => {
      console.log(res.data);
      this.props.updateCart(res.data);
    });
  }

// delete item from cart
  removeFromCart(cartId) {
    axios.delete(`/api/removeFromCart/${cartId}`)
        .then( res => {
          this.props.updateCart(res.data); 
    })
        .then( this.getTotal() );
  }

// decrease number of item in cart
  decreaseQuantity(cartId, quantity) {
    axios.delete(`/api/decreaseCart/${cartId}/${quantity}`)
          .then( res => {
   console.log(res)
            this.props.updateCart(res.data)
          }).then( this.getTotal() )
          .then( this.getTotal() )
  }
// put items in cart
  increaseQuantity(cartId, quantity) {
    axios.put(`/api/increaseCart/${cartId}/${quantity}`)
          .then(res => {
  console.log(res)
        this.props.updateCart(res.data)
    }).then(this.getTotal())
    .then(this.getTotal())
}


  render() {
    let displayCart = this.props.cart.map( (cartItem, i) => {
      return (
        <div key={i} id="content-img">

          <img src={cartItem.img} id="thumb-img" alt="4x2"></img>
          <h4>{cartItem.prod_name}</h4>
          <h4 style={{"fontSize": "14px"}}> Price: {cartItem.price}</h4>


          <div>
            <Button
              className="btn-props"
              onClick={() => this.decreaseQuantity(cartItem.cart_id, cartItem.quantity)}
              bsStyle=""> -  
            </Button>        
            <Button
              className="btn-props2"
              onClick={() => this.increaseQuantity(cartItem.cart_id, cartItem.quantity)}
              bsStyle="">  +  </Button>

            <h4>Quantity: {cartItem.quantity}</h4>
          </div>




                    {/* remove */}
          <Button id="del-btn"
            onClick={() => this.removeFromCart(cartItem.cart_id)}
             bsStyle="danger"> Delete </Button>
        </div>
      );
    });

    return (
      <div>
        <MainMenu />

        <Alert bsStyle="info" onDismiss={this.handleDismiss}>
          <h3> Shopping Cart</h3>
          <h2 id="sub-total"> Subtotal: $ 
            <span id="span-line">
              {this.state.total}
            </span>
          </h2>

          <Link to='/' id="shop-more"> Shop More Items
          <br />
          {/* Stripe Checkout */}
            <StripeCheckout
              className="nbsp"
              // stripe header
              name="DeViant"
              description="Thanks you!"
              token={this.onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
            <hr/>
          </Link>
          



          <div id="cart-container">
            {displayCart}
          </div>
         




        </Alert>
      </div>
    );

  }
}

function mapStateToProps(state) {
  const { cart } = state;
  return { cart };
}

export default connect(
  mapStateToProps,
  { updateCart }
)(Cart);
