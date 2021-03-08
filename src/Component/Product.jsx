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
} from "mdbreact";

export const Product = () => {
  return (
    <>
      <MDBContainer>
            <MDBJumbotron style={{ padding: 0 }}>
              <MDBCol>
                <MDBCol className="py-5">
                  <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                    Create your beautiful website with MDBootstrap
                  </MDBCardTitle>
                  <p className="mx-5 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repellat fugiat, laboriosam, voluptatem, optio vero odio nam
                    sit officia accusamus minus error nisi architecto nulla
                    ipsum dignissimos. Odit sed qui, dolorum!
                  </p>
                  <MDBBtn outline color="white" className="mb-5">
                    <MDBIcon icon="clone" className="mr-2"></MDBIcon> View
                    project
                  </MDBBtn>
                </MDBCol>
              </MDBCol>
            </MDBJumbotron>
      </MDBContainer>
      <MDBRow>
        {Object.entries(shoes).map(([slug, { name, img }]) => (
          <MDBCol md="4" style={{ maxWidth: "22rem" }} key={slug}>
            <MDBCard>
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
