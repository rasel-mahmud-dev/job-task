import React, { useState } from "react";

import "./login.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormFooter from "../FormFooter/FormFooter";


const Login = ({ onChange, onSwitchTab, errors }) => {

    const inputFields = {
        email: {
            name: "email",
            type: "email",
            placeholder: "Enter email",
            validate: {
                required: "Email Required",
            },
        },

        password: {
            type: "password",
            name: "password",
            placeholder: "Enter password",
            validate: {
                required: "Password required",
                minLength: { value: 6, message: "Password should be min 6 character" },
            }
        },
    };

    return (
        <div className="input-box">


            {Object.keys(inputFields).map(inputKey=>(
                <Input {...inputFields[inputKey] } error={errors[inputKey]} onChange={onChange} />
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
