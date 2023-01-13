import React from "react";

import Button from "../Button/Button";
import Input from "../Input/Input";
import FormFooter from "../FormFooter/FormFooter";

export const signUpInputFields = {
    firstName: {
        name: "firstName",
        type: "text",
        placeholder: "First Name",
        validateData: {
            required: "First Name Required",
        },
    },
    lastName: {
        name: "lastName",
        type: "text",
        placeholder: "Last Name",
        validateData: {
            required: "Last Name Required",
        },
    },
    email: {
        name: "email",
        type: "email",
        placeholder: "Enter email",
        validateData: {
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

const SignUp = ({ onChange, errors, onSwitchTab }) => {
    return (
        <div className="input-box">

            {/**** render dynamically input fields *****/}
            {Object.keys(signUpInputFields).map(inputKey=>(
                <Input
                    key={inputKey}
                    {...signUpInputFields[inputKey] }
                    error={errors[inputKey]}
                    onChange={(e)=>onChange(e, signUpInputFields[inputKey].validateData)}
                />
            ))}

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
