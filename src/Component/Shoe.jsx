import React from 'react'
import { useParams } from "react-router-dom";
export const Shoe = () => {
    const {slug} = useParams();
    const shoe = shoes[slug];

    if(!shoe){
        return <h2>Not Found!</h2>;
    }
    const {name , img} = shoe;
    return (
        <div>
            <h2>
                {name}
            </h2>
            <img src={img} alt={name}/>
        </div>
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