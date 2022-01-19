/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import Phone from "../assets/smartphone.svg"

const Navbar = () => {
    return (
        <div className="navbar-main">
            <div className="navbar-left">
                <img src={Phone} alt='' className="navbar-icon" />
                <a href="#" className="navbar-main-a">Get the App</a>
            </div>
            <ul className="navbar-right">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
