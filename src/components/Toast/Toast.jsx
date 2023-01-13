import React from "react";

import "./styles.scss";
import Modal from "../Modal/Modal";

const Toast = (props) => {
    const {
        state: { isOpen, data, close },
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => close()}
            className={`toast-success-user-modal`}
        >
            <div>{data}</div>
        </Modal>
    );
};

export default Toast;
