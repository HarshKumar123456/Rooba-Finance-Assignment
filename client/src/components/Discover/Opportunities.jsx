import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/Discover/Opportunities.css";

import ArrowImage from "../../assets/images/Arrow.jpg";

const Opportunities = () => {
    const [selectedOpportunity, setSelectedOpportunity] = useState("first-opportunity");

    const handleClickOnOpportunity = (e) => {
        setSelectedOpportunity(e.target.id);
        console.log(selectedOpportunity);
    };


    return <>
        <div role="list" className="d-flex flex-wrap justify-content-between p-0 pt-4 opportunity-list dim-white-text">
            <div role="listitem" id="first-opportunity" className={`pb-2 pe-4 opportunity-item ${selectedOpportunity == "first-opportunity" ? "selected" : ""}`} onClick={handleClickOnOpportunity}>
                Greensteps I
            </div>
            <div role="listitem" id="second-opportunity" className={`pb-2 pe-4 opportunity-item ${selectedOpportunity == "second-opportunity" ? "selected" : ""}`} onClick={handleClickOnOpportunity}>
                Greensteps II
            </div>
            <div role="listitem" id="third-opportunity" className={`pb-2 pe-4 opportunity-item ${selectedOpportunity == "third-opportunity" ? "selected" : ""}`} onClick={handleClickOnOpportunity}>
                Greensteps III
            </div>
        </div>

        <div className="pt-4"></div>
        <div className="pt-4"></div>
        <div className="pt-4"></div>
        <div className="opportunity-paragraphs">

            <div className="pb-4 opportunity-para-1">
                In a world where the hustle and bustle of a metropolitan city can wear you down, everyone deserves a place to escape to
                <div className="fw-bold">
                    — a real 'home away from home.'
                </div>
            </div>

            <div className="opportunity-para-2">
                That's precisely what we're here to offer you. Our carefully curated real estate opportunities provide you with the perfect retreat from the urban chaos, all while potentially securing a solid investment in your future.

            </div>

            <div className="pt-4"></div>
            <div className="pt-4"></div>

            <Link to={"/"} className="fw-bold d-flex align-items-center opportunity-learn-more-link">
                Learn More <img src={ArrowImage} alt="arrow-image" />
            </Link>
        </div>
    </>;
};

export default Opportunities;