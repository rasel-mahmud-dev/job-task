import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PromptProvider from "src/components/Toast/ToastContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PromptProvider>
            <App />
        </PromptProvider>
    </React.StrictMode>
);
