import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import "./AppPage.css";
import dashboardimg from '../dashboard.png'

export const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div id="apppage">
        <MDBView>
          <MDBMask className="white-text gradient" />
          <MDBContainer fluid
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="d-flex justify-content-center white-text align-items-center">
            <MDBRow>
              <MDBCol md="6" className="text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Finding Your Perfect Shoes
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    A React App using react-router-dom and Material design Bootstrap. Click the below button to view products.
                  </h6>
                  <MDBBtn outline color="white" onClick={()=>{
                      navigate('/product')
                  }}>
                    View Products
                  </MDBBtn>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <MDBAnimation type="pulse"  delay="1s" infinite>
                    <img
                      src={dashboardimg}
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    )
}
