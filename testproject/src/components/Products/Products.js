import React, { Component } from 'react';
import './Products.css';
import axios from 'axios'
import { connect } from 'react-redux';
import { updateCart } from '../../dux/reducer'
import MainMenu from '../MainMenu/MainMenu';


class Products extends Component {
   constructor(props) {
      super(props);
      this.state = {
         productItems: [],
         products: []
      }
      this.addToCart = this.addToCart.bind(this)
   }

   componentDidMount() {
      axios.get('/api/getAll')
           .then(res => this.setState({
               products: res.data
            }))
   }


   addToCart(prodId) {
     axios.post(`/api/cart/${prodId}`).then(res => {
        this.props.updateCart(res.data)
     })
     console.log('prodId', prodId)
   }

   render() {
      let displayProducts = this.state.products.map( (product, i) => {
         console.log(product)
         return(
               <div key={i} id="img-container">
                  <img src={product.img} id="thumb-img" alt="120x100"></img>
                  <h4 id='h4size'> The { product.prod_name }</h4>
                  {/* <h5> { product.description }</h5> */}
                  {/* <p style={{"fontSize": "14px"}}>  Price:  { product.price }
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                     <Button 
                        onClick={ () => this.addToCart(product.prod_id) }bsStyle="primary">Add to cart
                     </Button>
                  </p> */}

               </div>

         )
      })

     return (
      <div className='align' >
         <MainMenu />
         <div id="content">
            {displayProducts}
         </div>

      </div>
     )
   }
}

function mapStateToProps(state) {
   const { prod_id } = state
   return { prod_id }
}


export default connect(mapStateToProps, {updateCart}) (Products);