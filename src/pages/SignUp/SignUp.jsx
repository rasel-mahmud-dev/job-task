import React, {useState} from 'react';


import Button from "../../components/Button/Button";

const SignUp = () => {


    const [tab, setTab] = useState(1)

    function handleSwitchTab(tabNo) {
        setTab(tabNo)
    }


    return (
        <form className="form">
            <div>
                <img src="/images/React-icon.svg.png"/>
            </div>

            <p className="form-para">lorem50 sdfsdf sdf sdf sdf sdf
                lorem50 sdfsdf sdf sdf sdf sdf lorem50 sdfsdf sdf sdf sdf sdf
            </p>

            <div className="form-tab-root">
                <Button onClick={() => handleSwitchTab(1)} type="button"
                        className={`${tab === 1 ? "active-tab-btn" : ""}`} as="text">Login</Button>

                <Button onClick={() => handleSwitchTab(2)} type="button"
                        className={`${tab === 2 ? "active-tab-btn" : ""}`} as="text">Signup</Button>
            </div>

        </form>
    );
};

export default SignUp;