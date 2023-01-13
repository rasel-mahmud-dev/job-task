import React, { useState } from "react";

import "./joinForm.scss";

import Button from "../../components/Button/Button";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";

const JoinForm = () => {
    const [tab, setTab] = useState(1);

    function handleSwitchTab(tabNo) {
        setTab(tabNo);
    }

    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserInput((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));
    }

    function handleSubmit(evt) {
        // prevent page load when submit form
        evt.preventDefault();

        if (tab === 1) {
            // handle user login
        } else {
            // handle user registration
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-image">
                <img src="/images/React-icon.svg.png" alt="login-image" />
            </div>

            <p className="form-para mt-20">
                { tab === 1
                    ? "Welcome back, Please login to your account."
                    : "To join us please create a account. We will try out best service to you"
                }
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
                        onSwitchTab={handleSwitchTab}
                        onChange={handleChange}
                    />
                ) : (
                    <SignUp
                        onSwitchTab={handleSwitchTab}
                        onChange={handleChange}
                    />
                )}
            </div>
        </form>
    );
};

export default JoinForm;
