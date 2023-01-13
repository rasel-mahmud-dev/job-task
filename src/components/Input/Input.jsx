import React from 'react';

import "./input.scss";


const Input = ({error, validateData, ...otherAttr}) => {

    return (
        <div className={`input-wrapper  ${error ? "error-input" : ""} `}>
        <input className="text-input" {...otherAttr}  />
                {error && (
                    <div className="input-error-message">
                        {error}
                    </div>
                )}
        </div>
    );
};

export default Input;