import React, { useState } from "react";

import "../../styles/Discover/OpportunityDetailCard.css";

import LocationIcon from "../../assets/icons/Location.png";
import PlotDimensionIcon from "../../assets/icons/PlotDimension.jpg";
import PlotTypeIcon from "../../assets/icons/PlotType.jpg";
import AgricultureIcon from "../../assets/icons/Crop.png";
import ElectricityIcon from "../../assets/icons/Thunder.png";
import MaintenanceIcon from "../../assets/icons/Tools.png";
import FenceIcon from "../../assets/icons/Fence.png";
import ContactIcon from "../../assets/icons/Contact.png";

import Greensteps1 from "../../assets/images/Greensteps-1.png";
import Greensteps2 from "../../assets/images/Greensteps-1.png";
import Greensteps3 from "../../assets/images/Greensteps-1.png";


const opportunities = [
    {
        id: "1",
        name: "Greensteps I",
        location: "Alwar, Rajasthan",
        imageURL: Greensteps1,
        type: "Regular Plot",
        dimensions: "2,970 Sq ft*",
        ownership: "Fractional Ownership",
        electricity: true,
        agriculture: true,
        maintenance: true,
        fence: true,
        price: "1.75 Cr",
        pricePerSquareYard: "2900",
        fullPrice: "5,00,000",
    },
    {
        id: "2",
        name: "Greensteps II",
        location: "Alwar, Rajasthan",
        imageURL: Greensteps2,
        type: "Regular Plot",
        dimensions: "2,400 Sq ft*",
        ownership: "Full Ownership",
        electricity: true,
        agriculture: true,
        maintenance: true,
        fence: true,
        price: "1.75 Cr",
        pricePerSquareYard: "2900",
        fullPrice: "5,00,000",
    },
    {
        id: "3",
        name: "Greensteps III",
        location: "Jaipur, Rajasthan",
        imageURL: Greensteps3,
        type: "Regular Plot",
        dimensions: "3,000 Sq ft*",
        ownership: "Govt. Ownership",
        electricity: true,
        agriculture: true,
        maintenance: true,
        fence: true,
        price: "1.75 Cr",
        pricePerSquareYard: "2900",
        fullPrice: "5,00,000",
    },
];

const OpportunityDetailCard = ({ id }) => {
    const [opportunity, setOpportunity] = useState(
        opportunities.find(opportunity => opportunity.id === id)
    );

    return <>
        <div className="ms-4 me-4 opportunity-detail-card">
            <div className="p-4 opportunity-detail-card-image-container" style={{ backgroundImage: `url("${opportunity.imageURL}")` }}>
                <div className="opportunity-detail-card-name">
                    {opportunity.name}
                </div>
                <div className="opportunity-detail-card-location">
                    <img src={LocationIcon} alt="location-icon-image" height={14} />
                    {opportunity.location}
                </div>
            </div>

            <div className="d-flex flex-column p-4 switzer-font opportunity-detail-card-details">
                <div className="mb-4 opportunity-detail-card-tags-container ">
                    <div className="opportunity-detail-card-tags-container-heading">
                        Tags
                    </div>
                    <div className="d-flex opportunity-detail-card-tags-container-tags">
                        <div className="fw-medium border border-dark p-2 me-1 opportunity-detail-card-tags-container-tag-plot-type">
                            <img src={PlotTypeIcon} alt="plot-type-icon" height={14} className="me-2" />
                            {opportunity.type}
                        </div>
                        <div className="fw-medium border border-dark p-2 me-1 opportunity-detail-card-tags-container-tag-plot-dimensions">
                            <img src={PlotDimensionIcon} alt="plot-dimensions-icon" height={14} className="me-2" />
                            {opportunity.dimensions}
                        </div>
                        <div className="fw-medium p-2 me-1 opportunity-detail-card-tags-container-tag-plot-ownership">
                            {opportunity.ownership}
                        </div>
                    </div>
                </div>

                <div className="mb-3 opportunity-detail-card-other-tags-container">
                    <div className="opportunity-detail-card-other-tags-container-heading">
                        Other Tags
                    </div>
                    <div className="d-flex flex-wrap opportunity-detail-card-other-tags-container-tags">
                        <div className="border pe-2 me-2 mb-2 opportunity-detail-card-other-tags-container-tag-electricity" style={{ display: `${opportunity.electricity == false && "none"}` }} >
                            <img src={ElectricityIcon} alt="electricity-icon" className="mt-1 mb-1 ms-2 me-2" height={14} />
                            Electricity
                        </div>
                        <div className="border pe-2 me-2 mb-2 opportunity-detail-card-other-tags-container-tag-agriculture" style={{ display: `${opportunity.agriculture == false && "none"}` }}>
                            <img src={AgricultureIcon} alt="agriculture-icon" className="mt-1 mb-1 ms-2 me-2" height={14} />
                            Agricultural Land
                        </div>
                        <div className="border pe-2 me-2 mb-2 opportunity-detail-card-other-tags-container-tag-maintenance" style={{ display: `${opportunity.maintenance == false && "none"}` }}>
                            <img src={MaintenanceIcon} alt="maintenance-icon" className="mt-1 mb-1 ms-2 me-2" height={14} />
                            Maintenance Inclusive
                        </div>
                        <div className="border pe-2 me-2 mb-2 opportunity-detail-card-other-tags-container-tag-fence" style={{ display: `${opportunity.fence == false && "none"}` }}>
                            <img src={FenceIcon} alt="fence-icon" className="mt-1 mb-1 ms-2 me-2" height={14} />
                            Fence
                        </div>
                    </div>
                </div>


                <div className="mb-4 opportunity-detail-card-price-container">
                    <div className="opportunity-detail-card-price-container-heading">
                        Price
                    </div>
                    <div className="d-flex opportunity-detail-card-price-container-prices">
                        <div className="border pt-4 pb-2 ps-2 rounded w-25 me-2 opportunity-detail-card-price-container-price-box">
                            INR
                            <div className="fw-bold">
                                {opportunity.price}
                            </div>
                        </div>
                        <div className="border rounded w-25 me-2 pt-5 ps-2 fw-bold opportunity-detail-card-price-container-price-box">
                            {opportunity.pricePerSquareYard}/
                            <span className="fw-bold" style={{ fontSize: "0.75rem"}}>
                                Sq yd
                            </span>
                        </div>
                        <div className="border rounded w-25 me-2 ps-1 pt-4 opportunity-detail-card-price-container-price-box">
                            INR
                            <div className="fw-bold">
                                {opportunity.fullPrice}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex opportunity-detail-card-button-container">
                    <button type="button" className="btn btn-dark me-2 dark-background">
                        + Invest Now
                    </button>
                    <button type="button" className="btn btn-light border border-dark">
                        <img src={ContactIcon} alt="contact-icon" /> Contact Us
                    </button>
                </div>
            </div>
        </div>
    </>;
};

export default OpportunityDetailCard;