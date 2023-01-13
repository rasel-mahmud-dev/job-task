import React, {useEffect, useState} from "react";

import "./joinForm.scss";

import Button from "../../components/Button/Button";
import Login, {loginInputFields} from "../../components/Login/Login";
import SignUp, {signUpInputFields} from "../../components/SignUp/SignUp";
import validator from "../../utils/Validator";




const JoinForm = () => {
    const [tab, setTab] = useState(1);

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });


    function handleSwitchTab(tabNo) {
        setTab(tabNo);
    }

    const [userInput, setUserInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });


    function handleChange(e, validateData) {
        const { name, value } = e.target;
        setUserInput((prevState) => ({
            ...prevState,
            [name]: value.trim(),
        }));


        // validateData will pass from login and register component
        let errorMsg = validator(validateData, value)
        setErrors((prevState) => {

            let updateErrorMessage  = {...prevState}
            if(errorMsg){
                updateErrorMessage[name] = errorMsg
            } else {
                updateErrorMessage[name] = ""
            }
            return updateErrorMessage
        });
    }

    function handleSubmit(evt) {
        // prevent page load when submit form
        evt.preventDefault();

        let updateErrorMessage = {...errors}
        if (tab === 1) {
            // handle user login

            for (let inputName in loginInputFields) {
                let validateData  = loginInputFields[inputName]?.validateData
                if(validateData) {
                    let errorMsg = validator(validateData, userInput[inputName])
                    updateErrorMessage[inputName] = errorMsg
                }
            }


        } else {
            // handle user registration
            for (let inputName in signUpInputFields) {
                let validateData  = signUpInputFields[inputName]?.validateData
                if(validateData) {
                    let errorMsg = validator(validateData, userInput[inputName])
                    updateErrorMessage[inputName] = errorMsg
                }
            }
        }


        // update error state
        setErrors(updateErrorMessage)
    }



     // Reset Error Message when tab change
    function resetErrorMessageTabChange(){
        setErrors({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        })
    }
    useEffect(()=>{
       resetErrorMessageTabChange()
    }, [tab])





    return (
        <form className="form" onSubmit={handleSubmit} >
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
