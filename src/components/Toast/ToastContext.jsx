import {createContext, useState} from "react";
import Toast from "src/components/Toast/Toast";



const initialState = {}
export const ToastContext = createContext(initialState)



const PromptProvider= (props) => {


    const [state,  setState] = useState({
        isOpen: false,
        open: openToast,
        close: closeToast,
        data: "",
    })

    function openToast(data){
        setState((p)=>({...p, isOpen: true, data: data}))
    }

    function closeToast(){
        setState((p)=>({...p, isOpen: false, data: ""}))
    }

    return (
        <ToastContext.Provider value={state}>
            <>
                <Toast state={state} />
                {props.children}
            </>
        </ToastContext.Provider>
    )

}



export default PromptProvider
