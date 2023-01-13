import React from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

const FormFooter = (props) => {
    const { isHasPasswordReset , onOpenResetPasswordModal} = props;

    return (
        <div>
            {isHasPasswordReset && (
                <a onClick={onOpenResetPasswordModal}
                    className="forgot-password-link link text-end block"
                >
                    Forgot Password?
                </a>
            )}

            <p className="text-mute text-center mt-10">or login with</p>

            {/***** social login button *****/}
            <SocialLogin />

            {/**** other form footer context ****/}
            {props.children}
        </div>
    );
};

export default FormFooter;