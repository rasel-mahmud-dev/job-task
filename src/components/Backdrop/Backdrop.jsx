import React from "react";
import { createPortal } from "react-dom";

import "./backdrop.scss";

const Backdrop = ({ isOpen, backdropClass="", onClose, children }) => {
    return createPortal(
        <div onClick={onClose}
            className={`backdrop ${backdropClass} ${
                isOpen ? "open-backdrop" : "close-backdrop"
            }`}
        >
            {children}
        </div>,
        document.getElementById("backdrop-root")
    );
};

export default Backdrop;