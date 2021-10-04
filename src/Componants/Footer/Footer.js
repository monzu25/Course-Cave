import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container shadow-sm">
            <div className="footer-about">
                <h1><span className="logo1st">COURSE</span><span className="logo2nd" >CAVE</span></h1>
                <p>#12 D Block,<br />Kolpolok Residence,<br />Bakulia, Chittagong-4000 <br /> Bangladesh</p>

            </div>
            <div className="footer-social-icon">
                <h4>Social Icon</h4>

            </div>
            <div className="footer-menu">
                <h4>Menu</h4>
                <p><a href="/home"></a>Home</p>
                <p><a href="/course"></a>Courses</p>
                <p><a href="/event"></a>Event</p>
                <p><a href="/teacher"></a>Teachers</p>
                <p><a href="/about"></a>About</p>
                <p><a href="/blog"></a>Blog</p>
                <p><a href="/Contact"></a>Contact us</p>


            </div>
            <div className="footer-form">
                <h4>Subscribe For Discount</h4>
                <div class="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Input Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                    <button className="btn btn-outline-secondary text-white" type="button" id="button-addon2">Subscribe</button>
                </div>
                <div className="footer-social-icon">
                    <span> <FontAwesomeIcon size="2x" color="#FFFFFF" icon={faFacebook} /></span>
                    <span> <FontAwesomeIcon size="2x" color="#FFFFFF" icon={faInstagram} /></span>
                    <span> <FontAwesomeIcon size="2x" color="#FFFFFF" icon={faTwitter} /></span>

                </div>

            </div>

        </div>

    );
};

export default Footer;