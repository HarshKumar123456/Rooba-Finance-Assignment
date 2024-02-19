import React from "react";

import "../../styles/Why You Need/ReasonCard.css";

const ReasonCard = ({title,content}) => {
    return <>
        <div className="container border d-flex flex-column justify-content-end ps-4 pe-4 pb-4 switzer-font reason-card-container">
            <div className="pb-4 reason-card-container-title">
                {title}
            </div>
            <div className="reason-card-container-content">
                {content}
            </div>
        </div>
    </>;
};

export default ReasonCard;