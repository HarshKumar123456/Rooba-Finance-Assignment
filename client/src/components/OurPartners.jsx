import React from "react";

import Partners1Image from "../assets/images/Partners1.png";
import Partners2Image from "../assets/images/Partners2.png";
import WhiteGradientImage from "../assets/images/WhiteGradient.png";
import ForwardButtonImage from "../assets/images/Forward.png";


import "../styles/OurPartners.css";

const OurPartners = () => {
    return <>
        <div className="p-1 our-partners-container white-background switzer-font">
            <div className="container col-8 pb-4 border-bottom text-center fw-semibold our-partners-container-heading">
                Our Partners
            </div>
            <div className="container col-8 d-flex our-partners-container-logo-container">
                <img src={Partners1Image} alt="partners-image" />
                <div className="image-with-white-gradient">
                    <img src={Partners2Image} alt="partners-image" />
                    <img src={WhiteGradientImage} alt="white-gradient-image" className="w-75 white-gradient-image" />
                </div>
                <img src={ForwardButtonImage} alt="forward-button-image" className="forward-button-image" />
            </div>
            <div className="p-4"></div>
            <div className="p-4"></div>
            <div className="p-4"></div>
            <div className="p-4"></div>
        </div>
    </>;
};

export default OurPartners;