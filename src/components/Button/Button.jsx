import React from 'react';
import "./button.scss"

const Button = ({ className = "", as="", ...attr}) => {

    let btnType = "btn-solid"

    if(as === "text"){
        btnType = "btn-text"
    }

    return (
        <button className={`btn ${btnType} ${className} `} {...attr} />
    );
};

export default Button;