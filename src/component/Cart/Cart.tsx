import React from "react";

import { useSelector } from "react-redux";
import { rootstate } from "../Redux/CartRedux";


const Cart = () =>{
    
    const cartqty  = useSelector((state:rootstate) =>  state.CartState.totalquantity);
    const cartprice  = useSelector((state:rootstate) =>  state.CartState.totalprice);
    const heartqty = useSelector((state:rootstate) => state.HeartState.totalquantity);
    return (
        <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-heart"></i> <span>{heartqty}</span></a></li>
                                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>{cartqty}</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>${cartprice}</span></div>
                        </div>
                    </div>
    )
};
export default Cart;