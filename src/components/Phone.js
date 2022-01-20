import React from "react";

const Phone = () => {
    return (
        <div className="email-container">
            <input type="email" name="email" placeholder="Phone" className="email-content"/>
            <select className="phone-select">
                    <option>91</option>
                    <option>92</option>
                    <option>93</option>
                    <option>94</option>
                    <option>95</option>
                </select>
            <button className="email-button">Share App Link</button>
        </div>
    )
}

export default Phone;