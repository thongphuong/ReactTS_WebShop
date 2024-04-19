import  ReactDOM  from "react-dom";
import { Fragment, ReactNode } from "react";
import React from "react";

const modalroot = (document.getElementById("modal-login") as HTMLElement);
interface Modal{
    children:ReactNode
}

const LoginModal :React.FC<Modal> = (props)=>{
    return (<Fragment>
    {ReactDOM.createPortal(props.children,modalroot)}</Fragment>);
};

export default LoginModal;
