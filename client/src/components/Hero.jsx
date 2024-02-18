import React from "react";

import "../styles/Hero.css";

import HeroBannerVideo from "../assets/videos/HeroBannerVideo.mp4";


const Hero = () => {
    return <>
        <video src={HeroBannerVideo} className="w-100 h-75 hero-banner-video" autoPlay loop muted></video>
        <div className="container hero-banner">
            <div className="m-auto hero-text-box">
                <div className="hero-heading w-75 m-auto">
                    <div className="hero-heading-1">
                        Overcome Investment Barriers,
                    </div>
                    <div className="hero-heading-2">
                        Build <span className="hero-heading-bold-italic">Sustainable Wealth  </span>
                    </div>

                </div>
                <p className="hero-text m-2 p-2">
                    Dive into alternative markets with us and set your
                    <br />
                    capital on the path of &nbsp;
                    <span className="hero-text-underline">unparalleled growth.</span>
                </p>
            </div >
        </div >

    </>;
};

export default Hero;