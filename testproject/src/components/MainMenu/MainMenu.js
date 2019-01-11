import React, { Component } from 'react';
import dlogo from '../../images/d3logo.png'
import { Link } from 'react-router-dom'
import './Menu.css'

import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import Log from '../Log/Log';
import {
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";


class MainMenu extends Component {
   constructor(props, context) {
      super(props, context);
  
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: ""
      };
    }
  
    getValidationState() {
      const length = this.state.value.length;
      if (length > 8) return "success";
      else if (length > 5) return "warning";
      else if (length > 0) return "error";
      return null;
    }
  
    handleChange(e) {
      this.setState({ value: e.target.value });
    }

   render() {
      return (
         <div className="dashboard-container">
         <Navbar collapseOnSelect className="navbar_font">
            <Navbar.Header>
               <Link to="/"> <img src={ dlogo } 
                    id="logo" alt="logo"></img>  
               </Link>
               <Navbar.Brand>
                <div id="title">DeViant</div>
               </Navbar.Brand>
                    
               <Navbar.Toggle /> 
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1}> 
                  <Link id="link" to="/products">PRODUCTS</Link>
                </NavItem>
                <NavItem eventKey={2} nocaret> 
                  <Link id="link" to="/shop">SHOP</Link>
                </NavItem>
                <NavDropdown eventKey={3} title="WORLD OF DEVIANT" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Trends</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.2}>
                    <Link id="link" to="/show">SHOW</Link></MenuItem>
                </NavDropdown>
              </Nav>

              <Nav pullRight>
                <NavItem eventKey={1}> 
                  <Link id="link" to="/search">Search</Link>
                </NavItem>
                <NavItem eventKey={2}> <Log /> 
                </NavItem>
                <NavItem eventKey={8}>

                <span className="fa_cart">
                  <Link to="/cart">
                   <i className="fas fa-cart-arrow-down" placement="left" />
                  </Link>
                </span>
              </NavItem>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
    </div>
    );
   }
}

function mapStateToProps(state) {
   const { user } = state;
   return { user };
 }
 
 export default connect(mapStateToProps, { updateUser }) (MainMenu);

