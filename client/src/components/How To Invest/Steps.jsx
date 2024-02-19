import React, { useState } from "react";

import "../../styles/How To Invest/Steps.css";
import { Link } from "react-router-dom";

const Steps = (props) => {
    const [selectedStep, setSelectedStep] = useState("first-step");

    const handleClickOnStep = (step) => {
        // console.log("I am clicked");
        // console.log(step);
        setSelectedStep(step);
        // console.log(selectedStep);
        props.stepClick(step);
    };


    return <>
        <div className="d-flex flex-column w-100 pb-4 pt-5 pe-4 white-background steps-list">

            <div id="first-step" className={`steps-item steps-item-border ${selectedStep === "first-step" ? "selected" : ""}`} onClick={() => {
                handleClickOnStep("first-step")
            }}>
                <div className="border-bottom ms-4 pb-2 d-flex justify-content-between step-heading-container">
                    <div className="switzer-font step-heading">
                        Create Account
                    </div>
                    <div className="step-plus-icon">
                        +
                    </div>
                </div>

                <div className="ms-4 mt-3 w-75 step-detail-container" style={{ display: `${selectedStep === "first-step" ? "block" : "none"}` }}>
                    Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets
                </div>

            </div>

            <Link className="ms-4 mt-4 mb-5 ps-4 pe-4 btn btn-light border border-dark" style={{display: `${selectedStep === "first-step" ? "inline-block" : "none"}`,borderRadius: 0,width: "fit-content"}}>
                Start Now <img className="ps-4 how-to-invest-black-arrow-image" src="/src/assets/images/BlackArrow.png" alt="black-arrow-image" />
            </Link>

            <div id="second-step" className={`steps-item ${selectedStep === "second-step" ? "selected steps-item-border" : ""} ${selectedStep === "third-step" && "steps-item-border"}`} onClick={() => {
                handleClickOnStep("second-step")
            }}>
                <div className="border-bottom ms-4 pb-2 pt-4 d-flex justify-content-between step-heading-container">
                    <div className="switzer-font step-heading">
                        Discover Opportunities
                    </div>
                    <div className="step-plus-icon">
                        +
                    </div>
                </div>

                <div className="ms-4 mt-3 w-75 step-detail-container" style={{ display: `${selectedStep === "second-step" ? "block" : "none"}` }}>
                    Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets
                </div>
            </div>

            <div id="third-step" className={`steps-item ${selectedStep === "third-step" ? "selected steps-item-border" : ""}`} onClick={() => {
                handleClickOnStep("third-step")
            }}>
                <div className="border-bottom ms-4 pb-2 pt-4 d-flex justify-content-between step-heading-container">
                    <div className="switzer-font step-heading">
                        Invest with Flexibility
                    </div>
                    <div className="step-plus-icon">
                        +
                    </div>
                </div>

                <div className="ms-4 mt-3 w-75 step-detail-container" style={{ display: `${selectedStep === "third-step" ? "block" : "none"}` }}>
                    Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets
                </div>
            </div>


        </div>
    </>;
};

export default Steps;