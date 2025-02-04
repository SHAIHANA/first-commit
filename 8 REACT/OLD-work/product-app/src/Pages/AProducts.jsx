import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import {Col,Row} from 'react-bootstrap'
import { MDBListGroup, MDBListGroupItem, MDBRipple } from 'mdb-react-ui-kit';
import { IoIosStar } from "react-icons/io";
function AProducts() {

    const pathParams =useParams() //pathparams :{ 'id'  :  2}
    console.log(pathParams);

    //object destructure
    const {id} =useParams () //2
    console.log(id);
    //API call for aparticular product = https://dummyjson.com/products/id



    //1 Define base url
  const baseUrl ='https://dummyjson.com/products'


  //4 state ceration--- for holding product detail (datas store cheyan)
const[products, setProducts]=useState({})

  //2 Define API fetching function
 const productfetch = async ()=>{
    const response = await fetch (`https://dummyjson.com/products/${id}`)
   .then (response=>response.json())
   .then (data=>setProducts(data));
   
   }
  console.log(products);
    
  //3 function call
     useEffect(()=> {productfetch()},[])
       
  
  return (
    <div>
        <Row>
            <Col>
            <img src={products.thumbnail} alt="" />
            <h1 className='text-center'> ${products.price}</h1>
            </Col>

            <Col className='p-5'>
<MDBListGroup style={{ minWidth: '22rem' }} light>
    <MDBRipple>
    <MDBListGroupItem tag='a' 
        href='#'
         action 
         noBorders 
         active 
         aria-current='true' 
         className='px-3 text-center fw-bolder bg-success'>
         {products.title}

    </MDBListGroupItem>
    </MDBRipple>

      <MDBRipple>
        <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
          {products.category}
        </MDBListGroupItem>
      </MDBRipple>

      <MDBRipple>
        <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
        {products.description}
        </MDBListGroupItem>
      </MDBRipple>

      <MDBRipple>
        <MDBListGroupItem tag='a' href='#' action noBorders className='px-3'>
        {products.rating}<IoIosStar  className='text-warning fw-bolder  fs- 2 m-1'/>
        
        </MDBListGroupItem>
      </MDBRipple>
    
    
</MDBListGroup>
            </Col>
        </Row>
    </div>
  )
}

export default AProducts