import React, { useEffect, useState } from 'react'
import ViewProduct from './ViewProduct';


function ProductPage() {

  //1 Define base url
  const baseUrl ='https://dummyjson.com/products'

//4 state ceration--- for holding product detail (datas store cheyan)
const[products, setProducts]=useState([])


  //2 Define API fetching function
 const productfetch = async ()=>{
  const response = await fetch (baseUrl)
 .then (response=>response.json())
 .then (arraydata=>setProducts(arraydata.products));
 
 }

console.log(products);



//3 function call
useEffect(()=> {productfetch()},[])


  return (
    <div>
     <ViewProduct data={products}/>
    </div>
  )
}

export default ProductPage