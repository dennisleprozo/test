import React, { Component } from 'react';
import './Search.css'
import MainMenu from '../MainMenu/MainMenu';

class Search extends Component {
   state = { term: ''};

   onFormSubmit = event => {
      event.preventDefault();

      console.log(this.state.term);
   }

   render() {
      return (
         <div>
            <MainMenu />
         
            <div className="ui segment">
               <form className="ui form" onSubmit={ event => this.onFormSubmit(event)}>
                  <div className="ui container">
                     <label id="prod-search">PRODUCT SEARCH</label>




                     <input
                        type="text"
                        value={this.state.term}
                        onChange={ e => this.setState({ term: e.target.value })}
                     />





                  </div>

               </form>
         </div>
         </div>
      );
   }
}

export default Search;