import React from "react";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBJumbotron,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand
} from "mdbreact";

export const Product = () => {
  return (
    <>
      <MDBNavbar color="stylish-color" dark expand="md">
      <MDBContainer className='d-flex justify-content-center'>
        <MDBNavbarBrand>
          <Link to='/'><strong className="white-text">Shoe Store by Farjad</strong></Link>
        </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer>
        <MDBRow>
          {Object.entries(shoes).map(([slug, { name, img }]) => (
            <MDBCol md="4" xl="3" key={slug} className="my-3">
              <MDBCard className="h-100 d-inline-block">
                <Link to={`/product/${slug}`}>
                  <MDBCardImage
                    className="img-fluid"
                    src={img}
                    alt={name}
                    waves
                  />
                </Link>
                <MDBCardBody>
                  <MDBCardTitle>{name}</MDBCardTitle>
                  {/* <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <Link to={`/product/${slug}`}>
                  <MDBBtn href="#">Click</MDBBtn>
                </Link> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mar-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordn-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};
