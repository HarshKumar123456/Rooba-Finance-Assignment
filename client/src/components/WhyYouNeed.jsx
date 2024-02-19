import React from "react";

import "../styles/WhyYouNeed.css";
import ReasonCard from "./Why You Need/ReasonCard";

const reasons = [
    {
        id: "1",
        heading: "Access to innovation",
        explanation: "Gain early access to disruptive technologies and innovative companies not available on public markets.",
    },
    {
        id: "2",
        heading: "Customization",
        explanation: "Innovative investment structures & strategies can be tailored more effectively in private markets.",
    },
    {
        id: "3",
        heading: "Emerging market exposure ",
        explanation: "Unlock untapped potential by investing in burgeoning markets with high growth prospects that are attainable through private market participation.",
    },
    {
        id: "4",
        heading: "Diversification",
        explanation: "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets ",
    },
    {
        id: "5",
        heading: "Strategic influence ",
        explanation: "Private market investments often grant investors greater control and influence over business decisions and strategies. ",
    },
    {
        id: "6",
        heading: "Strategic influence ",
        explanation: "Private market investments often grant investors greater control and influence over business decisions and strategies.",
    },

];

const WhyYouNeed = () => {
    return <>
        <div className="pt-5 why-you-need-container">
            <div className="m-auto pt-5 why-you-need-container-heading">
                <div className="why-you-need-container-heading-1">
                    Why you need exposure
                </div>
                <div className="pb-5 why-you-need-container-heading-2">
                    to private markets
                </div>
            </div>

            <div className="d-flex flex-wrap m-auto mb-5 pb-5 why-you-need-container-reason-cards">
                {reasons && reasons.map((reason) => {
                    return <ReasonCard
                        key={reason.id}
                        title={reason.heading}
                        content={reason.explanation}
                    />
                })}
            </div>

            <hr />
            <div className="p-4"></div>
        </div>
    </>;
};

export default WhyYouNeed;