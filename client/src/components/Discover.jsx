import React from "react";

import "../styles/Discover.css";
import Opportunities from "./Discover/Opportunities";
import OpportunityDetailCard from "./Discover/OpportunityDetailCard";

const Discover = () => {

    return <>
        <div className="container discover d-flex pb-4 m-4 dim-white-text">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <div className="pt-4"></div>
                    <div className="pt-4"></div>
                    <div className="pt-4"></div>
                    <div className="pt-4"></div>
                    <div className="pt-4 discover-heading switzer-font">
                        Discover
                        <div className="discover-heading-bold-text">
                            Prime Opportunities
                        </div>
                    </div>
                    <div className="opportunities-list-container w-75 pt-4">
                        <Opportunities />
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                    <OpportunityDetailCard id="1" />
                </div>
            </div>
        </div>
    </>;
};

export default Discover;