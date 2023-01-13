import React, { useState } from "react";

import "./login.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import FormFooter from "../FormFooter/FormFooter";


const Login = ({ onChange, onSwitchTab }) => {
    return (
        <div className="input-box">
            <Input name="email" onChange={onChange} type="email" placeholder="Email Address"/>
            <Input name="password" onChange={onChange} type="password" placeholder="Password" />

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
