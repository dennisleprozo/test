import React, { Component } from 'react';
import dlogo from '../../images/d3logo.png'
import { Link } from 'react-router-dom'
import './Menu.css'

import { connect } from "react-redux";
import { updateUser } from "../../dux/reducer";
import Log from '../Log/Log';
import SignUp from '../SignUp/SignUp';
import {
  Button,
  Nav,
  Navbar,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl
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
         <Navbar inverse collapseOnSelect className="navbar_font">
            <Navbar.Header>
               <Link to="/"> <img src={ dlogo } id="logo" alt="logo"></img>  
                  </Link>     

               <Navbar.Toggle /> 

            </Navbar.Header>

            <Navbar.Collapse>



    <Nav>
    <NavItem eventKey={1} href="#">
        World of 
      </NavItem>
      <NavItem eventKey={1} href="#">
        Men
      </NavItem>
      <NavItem eventKey={2} href="#">
        Women
      </NavItem>

      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>action</MenuItem>
        <MenuItem eventKey={3.3}>Something else</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>




    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Login
      </NavItem>
      <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button id="button" type="submit">Submit</Button>
    </Navbar.Form>
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
 
 export default connect(
   mapStateToProps,
   { updateUser }
 ) (MainMenu);

