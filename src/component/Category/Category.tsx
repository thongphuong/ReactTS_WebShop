import React, { useState } from "react";
import ReactDOM from "react-dom";
import {Link,Route, Routes} from 'react-router-dom';
import { useQuery } from "react-query";

const fetchCategory = async () =>{
    const res = await fetch("https://localhost:7121/Category");
    return res.json();
}
const Category = ()=>{

    const {status,data,error} =useQuery(['category'],async () => await fetchCategory(),{
        staleTime:20000
    });
    
    return (<>
        <ul>
           {
                status === "success" && data.map((item:any) =>{
                    return(<li><Link to={item.url}>{item.name}</Link></li>)
                })
           }
                              
        </ul>                
    </>)
}
export default Category;