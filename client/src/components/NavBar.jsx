import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png";

import "../styles/NavBar.css";

const NavBar = () => {
    return <>
        <div className="container pt-4">

            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <img src={Logo} alt="logo-image" />
                </a>

                <ul className="nav nav-pills w-50 d-flex justify-content-between">
                    <li className="nav-item">
                        <Link to="/" className="nav-link navbar-text-color-white">
                            Opportunities
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link navbar-text-color-white">
                            How It Works
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link navbar-text-color-white">
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item btn btn-outline-light navbar-sign-in-btn">Sign In</li>
                </ul>
            </header>
        </div>

    </>;
};


export default NavBar;