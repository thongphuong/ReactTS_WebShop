import React from "react";
type LoginContextType = () => void;
const LoginContext = React.createContext<LoginContextType>(
   () => {});

export default LoginContext;