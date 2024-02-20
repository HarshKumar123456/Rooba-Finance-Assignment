import React, { useState } from "react";

import "../styles/ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        query: "",
    });

    const [submitButtonAppear, setSubmitButtonAppear] = useState(false);

    const [formDataInvalidError, setFormDataInvalidError] = useState({
        name: false,
        email: false,
        phone: false,
    });

    const checkIfFormDataValid = (data) => {
        function validateEmail(email) { 
            var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return emailRegex.test(email);
        }

        function validatePhone(phone) { 
            var phoneRegex = /^(\+91-|\+91|0)?\d{10}$/; 
            return phoneRegex.test(phone);
        }

        // console.log("checking form validity");
        // console.log(data);

        setFormDataInvalidError((prev) => {
            return { name: data.name === "",email: !validateEmail(data.email), phone: !validatePhone(data.phone) };
        });


        // console.log(formDataInvalidError);

        return !(data.name === "") && validateEmail(data.email) && validatePhone(data.phone);
    };

    const handleFormInputChange = (e) => {
        // console.log("I am Clicked");
        // console.log(e.target);

        setFormData((prev) => {
            console.log(prev);
            return { ...prev, [e.target.id]: e.target.value, };
        });

        if (checkIfFormDataValid({...formData,[e.target.id]: e.target.value,})) {
            setSubmitButtonAppear(true);
        }
        else {
            setSubmitButtonAppear(false);
        }
    };



    return <>
        <div className="d-flex contact-form-container">
            <div className="w-50 text-white p-5 d-flex flex-column justify-content-end contact-form-container-heading">
                <div className="contact-form-container-heading-1">
                    Ready to
                </div>
                <div className="fst-italic ps-2 contact-form-container-heading-2">
                    transcend
                </div>
                <div className="ps-4 contact-form-container-heading-3">
                    the ordinary?
                </div>
            </div>

            <div className="w-50 p-5 fw-bold contact-form-container-form">
                <div className="container ps-4 pe-4">
                    Click here to start your journey into the future of private market investments. For more information, connect with us directly through the contact form below.

                    <form className="pt-4 contact-form">
                        <div className="border-bottom border-dark pt-4 mb-4 mt-4 contact-form-field">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input onChange={handleFormInputChange} value={formData.name} type="text" placeholder="Your name here" id="name" />
                            <p className="m-0 contact-form-field-error-message" style={{ display: `${formDataInvalidError.name === true ? "block" : "none"}` }}>
                                Name is Required.
                            </p>
                        </div>
                        <div className="border-bottom border-dark pt-4 mb-4 contact-form-field">
                            <label htmlFor="email" className="form-label">Email ID</label>
                            <input onChange={handleFormInputChange} value={formData.email} type="email" id="email" />
                            <p className="m-0 contact-form-field-error-message" style={{ display: `${formDataInvalidError.email === true ? "block" : "none"}` }}>
                                Please Enter a Valid Email like someone@gmail.com etc.
                            </p>
                        </div>
                        <div className="border-bottom border-dark pt-4 mb-4 contact-form-field">
                            <label htmlFor="phone" className="form-label">Phone no.</label>
                            <input onChange={handleFormInputChange} value={formData.phone} type="tel" id="phone" />
                            <p className="m-0 contact-form-field-error-message" style={{ display: `${formDataInvalidError.phone === true ? "block" : "none"}` }}>
                                Please enter a valid phone no. like +919865432109
                            </p>
                        </div>
                        <div className="border-bottom border-dark pt-4 mb-4 contact-form-field">
                            <label htmlFor="query" className="form-label">Your Query</label>
                            <input onChange={handleFormInputChange} value={formData.query} type="text" placeholder="( if any )" id="query" className="ps-1" />
                        </div>
                        <button className={`btn btn-outline-dark w-100 border-bottom border-dark ${submitButtonAppear === false ? "disabled" : ""} contact-form-field`}>
                            Submit
                        </button>

                    </form>
                </div>


            </div>
        </div>
    </>;
};

export default ContactForm;