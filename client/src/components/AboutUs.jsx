import React from "react";

import "../styles/AboutUs.css";

const AboutUs = () => {
    return <>
        <div className="pt-5 about-us-container white-background">
            <div className="container pb-5 about-us-container-heading-container">
                <div className="about-us-container-heading-container-heading-1">
                    <span className="fw-bold fst-italic pe-2">
                        We’re more
                    </span>
                    than an
                </div>
                <div className="about-us-container-heading-container-heading-2">
                    investment club
                </div>
            </div>

            <div className="container col-8 pb-5 m-auto text-center about-us-container-text-container">
                Our state-of-the-art platform ensures provenance through an unbroken chain of custody, and rigorous independent due diligence, both legal and financial. We're not just helping you invest; we're revolutionizing how investments are made, offering a dynamic approach that transcends traditional boundaries. Connect with a community of visionaries, and embark on an exclusive journey where innovation meets your financial aspirations.
            </div>
        </div>
    </>;
};

export default AboutUs;