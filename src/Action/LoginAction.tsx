import { UserAction } from "../component/Redux/CartRedux";
import { LoginFormAction } from "../component/Redux/CartRedux";
import  secureLocalStorage  from  "react-secure-storage";
type info = {username:string,password:string};
const LoginAction =  (UserInfo : info) => {
    return  async (dispatch :any)=>{
        const sendInfo =  async (UserInfo :any) => {
            return  fetch("https://localhost:7121/AccountApi/Login", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "omit",
                redirect: "follow",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin":'*',
                    "Access-Control-Allow-Methods":'POST,PATCH,OPTIONS'
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify(UserInfo) 
              });
        };
        try{
            console.log("sending happen...");
            const data = await  sendInfo(UserInfo);
           var result = await data.json();
            const user =  UserAction.UPDATEUSER({
                username:result.userName,
                login:true
            });
            dispatch(user);
            const state = LoginFormAction.SETLOGINFORM({
                ModalState:false
            });
            dispatch(state);
            //secureLocalStorage.setItem("login",UserState.login);
            //secureLocalStorage.setItem("username",UserState.username);

        }
        catch(error){
            console.log(error);
            return;
        }   
     }
    
};
export default LoginAction;