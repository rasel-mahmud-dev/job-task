import React from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import FormFooter from "../FormFooter/FormFooter";

const SignUp = ({ onChange, onSwitchTab }) => {
    return (
        <div className="input-box">
            <Input
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={onChange}
            />
            <Input
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={onChange}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={onChange}
            />
            <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={onChange}
            />

            <Button>Sign Up</Button>

            <FormFooter>
                <p className="para-link text-center mt-20">
                    Already have an account?
                    <a className="link" onClick={()=>onSwitchTab(1)}>
                        {" "}
                        Login
                    </a>
                </p>
                <p className="para-link text-center mt-10">
                    By signing up, you are agree with our
                    <a
                        className="link text-underline"
                        href="src/components/SignUp/SignUp#"
                    >
                        {" "}
                        Terms & Conditions
                    </a>
                </p>
            </FormFooter>
        </div>
    );
};

export default SignUp;
