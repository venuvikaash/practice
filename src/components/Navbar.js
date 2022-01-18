/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const Navbar = () => {
    return (
        <div className="navbar-main">
            <a href="#" className="navbar-main-a">Get the App</a>
            <ul className="navbar-right">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
