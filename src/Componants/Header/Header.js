import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1 className="container"><span className="logo1st">COURSE</span><span className="logo2nd" >CAVE</span></h1>
            </div>
            <div className="menu-bar">
                <nav>
                    <NavLink className="menu" to="/">Home</NavLink>
                    <NavLink className="menu" to="/courses">Courses</NavLink>
                    <NavLink className="menu" to="/event">Event</NavLink>
                    <NavLink className="menu" to="/teachers">Teachers</NavLink>
                    <NavLink className="menu" to="/blog">Blog</NavLink>
                    <NavLink className="menu" to="/about">About us</NavLink>
                    <NavLink className="menu" to="/contactus">Contact us</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;