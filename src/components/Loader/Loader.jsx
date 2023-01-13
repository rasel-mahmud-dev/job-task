import React from "react";

import "./loader.scss";

const Loader = ({ size, className = "" }) => {
    return (
        <div className={`loader-root ${className}`}>
            <div className={`loading ${size} `}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Loader;
