import React from 'react'
import { useParams, Link } from "react-router-dom";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";

export const Shoe = () => {
    const {slug} = useParams();
    const shoe = shoes[slug];

    if(!shoe){
        return <h2>Not Found!</h2>;
    }
    const {name , img} = shoe;
    return (
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Product Detail
          </h2>
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src={img}
                  alt={name}
                />
                <a>
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <Link to="/Product" className="green-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="angle-double-left" className="pr-2" />
                  Shoes
                </h6>
              </Link>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>{name}</strong>
              </h3>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus et aut
                officiis debitis.
              </p>
              <MDBBtn color="success" size="md" className="waves-light ">
                Buy
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    )
}

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