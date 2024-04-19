import  ReactDOM  from "react-dom";
import { Fragment, ReactNode } from "react";


const modalroot = document.getElementById("modal-login") as HTMLElement;
interface LoginModal{
    children:ReactNode
}
const LoginModal :React.FC<LoginModal> = (props:LoginModal)=>{
    if (!modalroot) {
        return null;
    }
    return (<Fragment>
    {ReactDOM.createPortal(props.children,modalroot)}</Fragment>);
};

export default LoginModal;
