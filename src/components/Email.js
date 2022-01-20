import React from "react";

const Email = () => {
    return (
        <div className="email-container">
            <input type="email" name="email" placeholder="E-Mail" className="email-content"/>
            <button className="email-button">Share App Link</button>
        </div>
    )
}

export default Email;