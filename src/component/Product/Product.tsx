import { useContext } from "react";
import { useDispatch } from "react-redux";
import {CartAction} from "../Redux/CartRedux";
import { HearAction } from "../Redux/CartRedux";

interface Product{
    image:any;
    name:string;
    price:number;
    id:number;
}
const Product :React.FC<Product>= (props) => {

    const a = require(`../../img/${props.image}` );
    console.log(a);
    const dispatch = useDispatch();
    const HandleBuyClick = (event:any)=>{
        //event.preventdefault();
        const newitem = {
            id:props.id,
            name:props.name,
            price:props.price,
            quantity:1
        };
       var object = CartAction.INCREMENTCART(newitem);
        dispatch(object);
        
    };
    const HandleReweet = ()=>{
        const item = {
            id:props.id,
            name:props.name,
            price:props.price,
            quantity:1
        };
        var object = CartAction.DECREMENTCART(item);
        console.log(object);
        dispatch(object);
    }
    const HandleHeartClick = ()=>{
        var object = HearAction.INCREMENTHEART({
            quantity:1
        });
        dispatch(object);
    };
    return (    
            
             <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" style={{backgroundImage: `url(${require(`../../img/${props.image}` )})`,backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat' }}>
            <div className="featured__item">
                    <div className="featured__item__pic set-bg" >
                        <ul className="featured__item__pic__hover">
                            <li><a onClick={HandleHeartClick}><i className="fa fa-heart"></i></a></li>
                            <li><a><i className="fa fa-retweet" onClick={HandleReweet}></i></a></li>
                            <li><a  onClick={HandleBuyClick}><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div className="featured__item__text">
                        <h6><a href="#">{props.name}</a></h6>
                        <h5>${props.price}</h5>
                    </div>
            </div>      
        </div>            
    );
};
export default Product;