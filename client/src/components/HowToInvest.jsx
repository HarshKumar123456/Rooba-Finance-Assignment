import React, { useState } from "react";

import HowToInvestImage from "../assets/images/HowToInvest.png";
import BlackArrowImage from "../assets/images/BlackArrow.png";


import "../styles/HowToInvest.css";
import Steps from "./How To Invest/Steps";
import StepImage from "./How To Invest/StepImage";

const HowToInvest = () => {
    const [stepImage, setStepImage] = useState("first-step");

    const onStepClick = (step) => {
        // console.log("I am in how to invest" + step);
        setStepImage(step);
    };

    return <>
        <div className="pb-5 white-background how-to-invest-container">
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 mb-5 p-4 how-to-invest-container-heading">
                        <div className="d-flex flex-wrap align-items-end how-to-invest-container-heading-image-container">
                            <img src={HowToInvestImage} alt="how-to-invest-image" />
                            <img src={BlackArrowImage} alt="black-arrow-image" className="how-to-invest-black-arrow-image" />
                        </div>

                        <div className="p-5"></div>

                        <Steps stepClick={onStepClick} />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 d-flex flex-column justify-content-center pt-5 how-to-invest-image-container">
                        <StepImage imageName={stepImage} />
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <hr />
        </div>
    </>;
};

export default HowToInvest;