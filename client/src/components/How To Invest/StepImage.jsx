import React from "react";

import KYCImage from "../../assets/images/How To Invest/KYC.png";
import AgreementToSaleImage from "../../assets/images/How To Invest/AgreementToSale.png";
import MarketPlaceImage from "../../assets/images/How To Invest/MarketPlace.png";
import PaymentDetailsImage from "../../assets/images/How To Invest/PaymentDetails.png";
import PaymentOptionsImage from "../../assets/images/How To Invest/PaymentOptions.png";
import RegistrationImage from "../../assets/images/How To Invest/Registration.png";

import "../../styles/How To Invest/StepImage.css";

const StepImage = ({ imageName }) => {
    return <>
        <div className="animate first-image-container" style={{display: `${imageName === "first-step" ? "block" : "none"}`}}>
            <img src={KYCImage} alt="KYC-image" className="KYC-image"/>
            <img src={RegistrationImage} alt="registration-image" className="registration-image"/>
        </div>
        <div className="animate second-image-container" style={{display: `${imageName === "second-step" ? "block" : "none"}`}}>
            <img src={MarketPlaceImage} alt="market-place-image" className="market-place-image"/>
        </div>
        <div className="animate third-image-container" style={{display: `${imageName === "third-step" ? "block" : "none"}`}}>
            <img src={AgreementToSaleImage} alt="market-place-image" className="agreement-to-sale-image"/>
            <img src={PaymentDetailsImage} alt="payment-details-image" className="payment-details-image"/>
            <img src={PaymentOptionsImage} alt="payment-options-image" className="payment-options-image"/>
        </div>
    </>;
};

export default StepImage;