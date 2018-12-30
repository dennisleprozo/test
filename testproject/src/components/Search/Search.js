import React, { Component } from 'react';

class Search extends Component {
   state = { term: ''};

   onFormSubmit = event => {
      event.preventDefault();

      console.log(this.state.term);
   }



   render() {
      return (
         <div>
            <form onSubmit={this.onFormSubmit}>
               <input
                  type="text"
                  value={this.state.term}
                  onChange={ e => this.setState({ term: e.target.value })}
               />
            </form>
         </div>
      );
   }
}

export default Search;