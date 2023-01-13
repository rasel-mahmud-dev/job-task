import React from "react";
import { createPortal } from "react-dom";

import "./styles.scss";
import Backdrop from "components/Backdrop/Backdrop";

const Modal = ({ isOpen, className="", onClose, children }) => {
    return createPortal(
        <div>
            <Backdrop isOpen={isOpen} onClose={onClose} />
            <div
                className={`modal ${className} ${
                    isOpen ? "open-modal" : "close-modal"
                }`}
            >
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;
