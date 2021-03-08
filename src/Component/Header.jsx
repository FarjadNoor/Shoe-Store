import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <>
      <MDBNavbar color="special-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Shoe Store</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
      </MDBNavbar>
    </>
    );
  }
}

export default Header;