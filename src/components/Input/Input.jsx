import React from 'react';

import "./input.scss";


const Input = ({...otherAttr}) => {
    return (
        <input className="text-input" {...otherAttr} />
    );
};

export default Input;