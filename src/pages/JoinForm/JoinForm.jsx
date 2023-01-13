import React, { useEffect, useState } from "react";

import "./joinForm.scss";

import Button from "components/Button/Button";
import Login, { loginInputFields } from "components/Login/Login";
import SignUp, { signUpInputFields } from "components/SignUp/SignUp";
import validator from "src/utils/Validator";
import useToast from "src/hooks/useToast";
import ForgetPassword from "components/ForgetPassword/ForgetPassword";

const JoinForm = () => {
    const toast = useToast();

    const [tab, setTab] = useState(1);

    // input error state
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    // open forget password modal state
    const [isOpenForgotPasswordModal, setOpenForgotPasswordModal] =
        useState(false);

    // tab switcher handler
    function handleSwitchTab(tabNo) {
        setTab(tabNo);
    }

    // user input state
    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    // user input change  handler
    function handleChange(e, validateData) {
        const { name, value } = e.target;
        setUserInput((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));

        // if not pass validateData then skip checking validation
        if (!validateData) return;

        // validateData will pass from login and register component
        let errorMsg = validator(validateData, value);
        setErrors((prevState) => {
            let updateErrorMessage = { ...prevState };
            if (errorMsg) {
                updateErrorMessage[name] = errorMsg;
            } else {
                updateErrorMessage[name] = "";
            }
            return updateErrorMessage;
        });
    }

    // form submit handler
    function handleSubmit(evt) {
        // prevent page load when submit form
        evt.preventDefault();

        let updateErrorMessage = { ...errors };
        let isFormCompleted = true;
        if (tab === 1) {
            // handle user login

            for (let inputName in loginInputFields) {
                let validateData = loginInputFields[inputName]?.validateData;
                if (validateData) {
                    let errorMsg = validator(
                        validateData,
                        userInput[inputName]
                    );
                    updateErrorMessage[inputName] = errorMsg;
                    if (errorMsg) isFormCompleted = false;
                }
            }
        } else {
            // handle user registration
            for (let inputName in signUpInputFields) {
                let validateData = signUpInputFields[inputName]?.validateData;
                if (validateData) {
                    let errorMsg = validator(
                        validateData,
                        userInput[inputName]
                    );
                    updateErrorMessage[inputName] = errorMsg;
                    if (errorMsg) isFormCompleted = false;
                }
            }
        }

        // update error state
        setErrors(updateErrorMessage);

        // only shop success popup if all data are valid
        if (isFormCompleted) {
            return toast.open(renderSuccessJSX());
        }

        // now time to connect with server ...........
    }

    // Reset Error Message when tab change
    function resetErrorMessageTabChange() {
        let newState = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        setErrors(newState);
        setUserInput(newState);
    }

    useEffect(() => {
        resetErrorMessageTabChange();
    }, [tab]);

    function renderSuccessJSX() {
        return (
            <div className="user-login-success">
                <h2>Your Done!</h2>
                <img src="/icons/check-mark.png" />
            </div>
        );
    }

    // open modal for forgot password component
    function openForgetPasswordHandler(isOpen = false) {
        setOpenForgotPasswordModal(isOpen);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <ForgetPassword
                onClose={() => openForgetPasswordHandler()}
                isOpen={isOpenForgotPasswordModal}
                errors={errors}
                onChange={handleChange}
                email={userInput.email}
            />

            <div className="form-image">
                <img src="/images/React-icon.svg.png" alt="login-image" />
            </div>

            <p className="form-para mt-20">
                {tab === 1
                    ? "Welcome back, Please login to your account."
                    : "To join us please create a account. We will try out best service to you"}
            </p>

            <div className="form-tab-root">
                <Button
                    onClick={() => handleSwitchTab(1)}
                    type="button"
                    className={`w-full ${tab === 1 ? "active-tab-btn" : ""}`}
                    as="text"
                >
                    Login
                </Button>

                <Button
                    onClick={() => handleSwitchTab(2)}
                    type="button"
                    className={`w-full ${tab === 2 ? "active-tab-btn" : ""}`}
                    as="text"
                >
                    Signup
                </Button>
            </div>

            <div className="form-tab-content">
                {tab === 1 ? (
                    <Login
                        onOpenResetPasswordModal={() =>
                            openForgetPasswordHandler(true)
                        }
                        errors={errors}
                        onSwitchTab={handleSwitchTab}
                        onChange={handleChange}
                    />
                ) : (
                    <SignUp
                        errors={errors}
                        onSwitchTab={handleSwitchTab}
                        onChange={handleChange}
                    />
                )}
            </div>
        </form>
    );
};

export default JoinForm;
