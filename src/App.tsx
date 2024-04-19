import   './logo.svg';
import './App.css';
import ListProduct from './component/Product/ListProduct';
import { useState } from 'react';
import CartContext from './context/CartContext';
import {Link,Route, Routes} from 'react-router-dom';
import LoginForm from './component/Login/LoginForm';
import LoginModal from './component/Modal/LoginModal';
import Cart from './component/Cart/Cart';
import Popup from 'reactjs-popup';
import { LoginFormAction } from './component/Redux/CartRedux';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRef,useEffect } from "react";
import { UserAction } from './component/Redux/CartRedux';
import  secureLocalStorage  from  "react-secure-storage";
import Category from './component/Category/Category';
import LoginContext from './context/LoginContext';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { rootstate } from './component/Redux/CartRedux';
function App() {

    const dispatch = useDispatch();
    const FormState = useSelector((state :rootstate) =>  state.LoginFormState);
    const UserState = useSelector((state :rootstate) => state.UserState);
    const iniref = useRef<any>();

    const SignOut = () =>{
         const user =  UserAction.UPDATEUSER({
            username:'',
             login:false
         });
         dispatch(user);
         
         secureLocalStorage.removeItem("login");
         secureLocalStorage.removeItem("username");

    }

    const signInGoogle = useGoogleLogin({
        onSuccess: async ({ access_token }) => {
            const userInfo = await axios.get(
              'https://www.googleapis.com/oauth2/v3/userinfo',
              { headers: { Authorization: `Bearer ${access_token}` } },
            );

            const user =  UserAction.UPDATEUSER({
                username:userInfo.data.email,
                 login:true
             });
             dispatch(user);     

             secureLocalStorage.setItem("login",true);
             secureLocalStorage.setItem("username",userInfo.data.email);
             hideLoginForm();
            
          },
        onError: (error) => console.log('Login Failed:', error)
    });

    const showLoginForm = () => {
        const state = LoginFormAction.SETLOGINFORM({
            ModalState:true
        });
        dispatch(state);
    }

    const hideLoginForm = () => {

        const state = LoginFormAction.SETLOGINFORM({
            ModalState:false
        });
        dispatch(state);
    }

    useEffect(() => {

        var state = secureLocalStorage.getItem("login");
        var name = secureLocalStorage.getItem("username");
        if(state && UserState.login == false){
            const user =  UserAction.UPDATEUSER({
                username:name,
                 login:state
             });
             dispatch(user);
        }
        const checkIfClickedOutside = (e:any) => {
            if (iniref.current && !iniref.current.contains(e.target)) {
                hideLoginForm();
            }      
        };

        document.addEventListener("click", checkIfClickedOutside,true)
        return () => {
          document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [])
    
    return (
                // <CartContext.Provider value={{cart,handleCartState}}>
        <LoginContext.Provider value={signInGoogle}>
        <div>
            <div className="humberger__menu__overlay"></div>
            <div className="humberger__menu__wrapper">
            <div className="humberger__menu__logo">
                <a href="#"><img src="img/logo.png" alt=""/></a>
            </div>
            <LoginModal>{FormState && <LoginForm onref={iniref} onClose={hideLoginForm}/>}</LoginModal> 
            <div className="humberger__menu__widget">
                <div className="header__top__right__language">
                    <img src="img/language.png" alt=""/>
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                        <li><a href="#">Spanis</a></li>
                        <li><a href="#">English</a></li>
                    </ul>
                </div>
                <div className="header__top__right__auth">            
                {
                    //UserState.login ?  <a><i className="fa fa-user"></i> Login</a> : <p> UserState.username </p>

                }
                </div>
            </div>
            <nav className="humberger__menu__nav mobile-menu">
                <ul>
                    <li className="active"><Link to="">Home</Link></li>
                    <li><Link to="">Shop</Link></li>
                    <li><Link to="">Pages</Link>
                        <ul className="header__menu__dropdown">
                            <li><Link to="">Shop Details</Link></li>
                            <li><Link to="">Shop Cart</Link></li>
                            <li><Link to="">Check Out</Link></li>
                            <li><Link to="">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
            </nav>
            <div id="mobile-menu-wrap"></div>
            <div className="header__top__right__social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-pinterest-p"></i></a>
            </div>
            <div className="humberger__menu__contact">
                <ul>
                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                </ul>
            </div>
        </div>

        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                <div className="header__top__right__language">
                                    <img src="img/language.png" alt=""/>
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li><a href="#">Spanis</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth" id="openLogin">
                                    {/* <a onClick={showLoginForm}><i className="fa fa-user"></i> Login </a>  */}
                                    {
                                        UserState.login === false ? <div><a onClick={showLoginForm}><i className="fa fa-user"></i> Login </a>                                
                                        </div>  : 
                                        <div style={{display:'inline-flex'}}> <p> {UserState.username }</p> <a onClick={SignOut}> Sign Out </a></div>


                                    }                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className="active"><a href="./index.html">Home</a></li>
                                <li><a href="./shop-grid.html">Shop</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li><Link to="">Shop Details</Link></li>
                                        <li><Link to="">Shoping Cart</Link></li>
                                        <li><Link to="">Check Out</Link></li>
                                        <li><Link to="">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="">Blog</Link></li>
                                <li><Link to="">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                   <Cart></Cart>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header> 
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars"></i>
                                <span>All departments</span>
                            </div>
                           <Category></Category>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?"/>
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                            <div className="hero__text">
                                <span>FRUIT FRESH</span>
                                <h2>Vegetable <br />100% Organic</h2>
                                <p>Free Pickup and Delivery Available</p>
                                <a href="#" className="primary-btn">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        <section className="featured spad">
            <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".oranges">Oranges</li>
                                    <li data-filter=".fresh-meat"><Link to="/meat">Fresh Meat</Link></li>
                                    <li data-filter=".vegetables"><Link to="/vegetable">Vegetables</Link></li>
                                    <li data-filter=".fastfood">Fastfood</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        { <Routes>
           <Route path="/vegetable" element={<ListProduct id={2}/>}>
          </Route> 
          <Route path="/meat" element={<ListProduct id={1}/>}>
          </Route>
            
        </Routes>
        }
        </div> 
                 </LoginContext.Provider>
       
    );
}

export default App;
