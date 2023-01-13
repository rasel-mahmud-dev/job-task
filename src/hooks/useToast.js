import React, { useContext } from "react";
import { ToastContext } from "src/components/Toast/ToastContext";

function usePrompt() {
    const toast = useContext(ToastContext);
    return toast
}

export default usePrompt