
import React from "react";
const CartContext = React.createContext(
   { 
        array:[],
        handleCartState:(object:{})=>{
        }  
   }
);

export default CartContext;