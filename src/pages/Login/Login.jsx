import React, {useState} from 'react';

import "./login.scss"
import Button from "../../components/Button/Button";

const Login = () => {


    const [tab, setTab] = useState(1)

    function handleSwitchTab(tabNo) {
        setTab(tabNo)
    }


    return (
       <div className="">
            <Input />
       </div>
    );
};

export default Login;