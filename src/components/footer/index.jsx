import React from "react";
import logo from '../../assets/react.svg'
import { Link } from "react-router-dom";
import '../../assets/style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faPinterest } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="bg-black py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="ff text-white">Go to website</h1>
                        <img src={logo} alt="errror" />
                    </div>
                    <div className="col-md-4">
                        <h1 className="ff text-white">Usefull link</h1>
                        <ul className="footerLink">
                            <li><Link to={'/'} className="cursiveFont text-white text-decoration-none">Home</Link></li>
                            <li><Link to={'About'} className="cursiveFont text-white text-decoration-none">About</Link></li>
                            <li><Link to={'portfolio'} className="cursiveFont text-white text-decoration-none">Portfolio</Link></li>
                            <li><Link to={'blogs'} className="cursiveFont text-white text-decoration-none">Blog</Link></li>
                            <li><Link to={'contact'} className="cursiveFont text-white text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <a href="https://www.linkedin.com/in/itzprashant" className="p-2">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" color="orangered" />
                           
                        </a>
                        <a href="https://www.linkedin.com/in/itzprashant" className="p-2">
                            <FontAwesomeIcon icon={faInstagram} size="2x" color="orangered" />
                        </a>
                        <a href="https://www.linkedin.com/in/itzprashant" className="p-2">
                            <FontAwesomeIcon icon={faFacebook} size="2x" color="orangered" />
                        </a>
                        <a href="https://www.linkedin.com/in/itzprashant" className="p-2">
                            <FontAwesomeIcon icon={faPinterest} size="2x" color="orangered" />
                        </a>
                    </div>
                </div>
                <p className="cursiveFont text-white d-flex justify-content-center align-content-between">© Copyright 2025 - already reserved by Mr. prashant.</p>
            </div>
        </footer>
    )
}
export default Footer;