import React, { useState } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";
import "./forgetPassword.scss";

const ForgetPassword = ({ email, isOpen, onClose, errors, onChange }) => {
    const inputField = {
        name: "email",
        type: "email",
        placeholder: "Enter email",
        validateData: {
            required: "Email Required",
            regex: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please provide valid email",
            },
        },
    };

    const [result, setResult] = useState("");

    function handleSendResetPasswordMail() {

        // validate input
        if (errors["email"]) {
            return onChange({target: { name: "email", value: ""}}, inputField.validateData)
        }

        // response form server
        setResult(
            `We send a mail you email ${email}. Please Go to your mail inbox.`
        );

        // clear input field;
        onChange({ target: { name: "email", value: "" } });
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                className={`toast-success-user-modal`}
            >
                <h2>Reset Password</h2>

                <p className="mt-10">
                    We will send you a email for create new password.
                </p>
                <br />

                {result && <div className="send-mail-result">{result}</div>}

                <Input
                    {...inputField}
                    error={errors["email"]}
                    value={email}
                    onChange={(e) => onChange(e, inputField.validateData)}
                />
                <Button onClick={handleSendResetPasswordMail} className="mt-10">
                    Request Reset Password
                </Button>
            </Modal>
        </div>
    );
};

export default ForgetPassword;