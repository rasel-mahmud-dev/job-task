import React from "react";
import "./socialLogin.scss";

const SocialLogin = () => {
    return (
        <div className="social-items mt-20">
            <li className="social-item">
                <img src="/icons/google.png" alt="" />
            </li>
            <li className="social-item">
                <img src="/icons/facebook.png" alt="" />
            </li>
            <li className="social-item">
                <img src="/icons/twitter.png" alt="" />
            </li>
        </div>
    );
};

export default SocialLogin;