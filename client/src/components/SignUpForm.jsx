import React, { useEffect, useState } from "react";
import axios from "axios";

const SignUpForm = () => {
    const serverURI = import.meta.env.VITE_SERVER_URL;

    console.log("Bro server url " + serverURI);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        age: "",
        password: "",
    });

    const [submitButtonAppear, setSubmitButtonAppear] = useState(false);

    const [formDataInvalidError, setFormDataInvalidError] = useState({
        name: false,
        email: false,
        password: false,
    });

    const checkIfFormDataValid = (data) => {
        function validateEmail(email) {
            var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return emailRegex.test(email);
        }

        function validatePassword(password) {
            return password.length >= 8;
        }

        // console.log("checking form validity");
        // console.log(data);

        setFormDataInvalidError((prev) => {
            return { name: data.name === "", email: !validateEmail(data.email), password: !validatePassword(data.password), country: data.country === "" };
        });


        // console.log(formDataInvalidError);

        return !(data.name === "") && !(data.country === "") && validateEmail(data.email) && validatePassword(data.password);
    };

    const handleFormInputChange = (e) => {
        // console.log("I am Clicked");
        // console.log(e.target);

        setFormData((prev) => {
            console.log(prev);
            return { ...prev, [e.target.id]: e.target.value, };
        });

        if (checkIfFormDataValid({ ...formData, [e.target.id]: e.target.value, })) {
            setSubmitButtonAppear(true);
        }
        else {
            setSubmitButtonAppear(false);
        }
    };

    
    const [submitStatus, setSubmitStatus] = useState(false);
    useEffect(() => {
        const createUser = async (formData) => {
            try {
                const response = await axios.post(`${serverURI}/users`, formData);
                console.log(response.data);
                if (response.data.success) {
                    console.log("Registered Successfully....");
                }
                else {
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error);
                console.log(error.message);
            }
        };
        if (submitStatus === true) {
            createUser(formData);
        }
    }, [submitStatus]);

    const handleSignUpFormSubmitClick = async (e) => {
        e.preventDefault();
        setSubmitStatus(!submitStatus);
    };

    return <>
        <div className="d-flex container contact-form-container">
            <div className="w-50 p-2 m-auto fw-bold contact-form-container-form">
                <div className="container ps-5 pe-5">
                    Please Enter these details
                    <br />
                    (don't worry we don't give your data to anyone):

                    <form className="pt-2 contact-form">
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
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={handleFormInputChange} value={formData.password} type="password" id="password" />
                            <p className="m-0 contact-form-field-error-message" style={{ display: `${formDataInvalidError.password === true ? "block" : "none"}` }}>
                                Please Enter password at least 8 words long.
                            </p>
                        </div>

                        <div className="border-bottom border-dark pt-4 mb-4 contact-form-field">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input onChange={handleFormInputChange} value={formData.country} type="text" id="country" />
                            <p className="m-0 contact-form-field-error-message" style={{ display: `${formDataInvalidError.country === true ? "block" : "none"}` }}>
                                Please Enter a Country name like India etc.
                            </p>
                        </div>

                        <div className="border-bottom border-dark pt-4 mb-4 contact-form-field">
                            <label htmlFor="age" className="form-label">Age</label>
                            <input onChange={handleFormInputChange} value={formData.age} type="number" id="age" />
                            <p className="m-0 contact-form-field-error-message" style={{ display: `${formDataInvalidError.age === true ? "block" : "none"}` }}>
                                Please Enter a Valid age like 14 etc.
                            </p>
                        </div>



                        <button className={`btn btn-outline-dark w-100 border-bottom border-dark ${submitButtonAppear === false ? "disabled" : ""} contact-form-field`}
                            onClick={handleSignUpFormSubmitClick}>
                            Submit
                        </button>

                    </form>
                </div>


            </div>
        </div>
    </>;
};

export default SignUpForm;