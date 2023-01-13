import React, { useState } from "react";

import "./login.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormFooter from "../FormFooter/FormFooter";


export const loginInputFields = {
    email: {
        name: "email",
        type: "email",
        placeholder: "Enter email",
        validateData: {
            regex: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: "Please provide valid email"},
            required: "Email Required",
        },
    },

    password: {
        type: "password",
        name: "password",
        placeholder: "Enter password",
        validateData: {
            required: "Password required",
            minLength: { value: 6, message: "Password should be min 6 character" },
        }
    },
};


const Login = ({ onChange, onSwitchTab, errors }) => {


    return (
        <div className="input-box">

            {/**** render dynamically input fields *****/}
            {Object.keys(loginInputFields).map(inputKey=>(
                <Input
                    key={inputKey}
                    {...loginInputFields[inputKey] }
                    error={errors[inputKey]}
                    onChange={(e)=>onChange(e, loginInputFields[inputKey].validateData)}
                />
            ))}


            <Button>LOGIN</Button>

            <FormFooter  resetPasswordLink="#">
                <p className="para-link text-center mt-20">
                    Don't have an account?
                    <a className="link" onClick={()=>onSwitchTab(2)}>
                        {" "} Create new now
                    </a>
                </p>
                <p className="para-link text-center mt-10">
                    By signing up, you are agree with our
                    <a className="link text-underline" href="#">
                        {" "} Terms & Conditions
                    </a>
                </p>
            </FormFooter>

        </div>
    );
};

export default Login;
