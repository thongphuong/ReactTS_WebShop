import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { useQuery } from "react-query";


interface ListProduct {
    id:number
}

const fetchUsers = async (id:any) => {
    const res = await fetch('https://localhost:7121/Product/' + id);
    return res.json();
  };

const ListProduct : React.FC<ListProduct> = (props) => {
    const { status, data, error, isFetching} = useQuery([props.id], async () => await fetchUsers(props.id),{
        staleTime: 10000
      });
    return (
        
        <div className="row featured__filter">
            {
                status === "success" &&
                data.map((item:any) =>{
                   return ( 
                        <Product key={item.id} name={item.productName} id={item.id} price={item.price} image={item.imageUrl}></Product>
                    )     
                })
            }
        </div>
       
    );
};
export default ListProduct;