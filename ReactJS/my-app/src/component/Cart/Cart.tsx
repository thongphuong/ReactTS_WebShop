import React from "react";
import { useSelector } from "react-redux";

const Cart = () =>{

    const cartqty  = useSelector((state :any) =>  state.Cart.totalquantity);
    const cartprice  = useSelector((state :any) =>  state.Cart.totalprice);
    const heartqty = useSelector((state :any) => state.Heart.totalquantity);
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