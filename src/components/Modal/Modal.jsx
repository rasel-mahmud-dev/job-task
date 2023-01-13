import React from "react";
import { createPortal } from "react-dom";

import "./styles.scss";

const Modal = ({ isOpen, className, onClose, children }) => {
    return createPortal(
        <div
            className={`modal ${className} ${
                isOpen ? "open-modal" : "close-modal"
            }`}
        >
            {children}
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;