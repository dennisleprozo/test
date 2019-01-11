import React, { Component } from 'react';
import './Search.css'
import MainMenu from '../MainMenu/MainMenu';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateCart } from '../../dux/reducer'
import {Button} from 'react-bootstrap'

class Search extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         filteredString: '',
         productItems: [],
         products: [],
      };
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

   handleChange( filter ) {
      this.setState({ filteredString: filter })
   }

   render() {
      let filteredProducts = this.state.products.filter((prod, i) => {
         console.log('my prod', prod)
         const lower = prod.prod_type.toLowerCase()
         return (
            lower.includes( this.state.filteredString ));
      }).map((prod, i) => {
         return <div key={i}>

                  <img src={prod.img} id="thumb-img" alt="242x200"></img>
                  <h4> The { prod.prod_name }</h4>
                  <h5> { prod.description }</h5>
                           <p style={{"fontSize": "14px"}}>  Price:  { prod.price }
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                              <Button 
                                 onClick={ () => this.addToCart(prod.prod_id) }bsStyle="primary">Add to cart
                              </Button>
                           </p>
         </div>
      })
      
      return (
         <div className='align' >
            <MainMenu />
         
            <div className="ui segment">
               <form className="ui form">
                  <div className="ui container">
                     <label id="prod-search" >PRODUCT SEARCH</label>

                     <input 
                        onChange={ e => this.handleChange( e.target.value )}
                        type='text'
                     />
                     <div id="card-box">
                        { filteredProducts }
                     </div>

                  </div>
               </form>
            </div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   const { prod_id } = state
   return { prod_id }
}

export default connect(mapStateToProps, {updateCart}) (Search);

