import React from 'react'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function ViewProduct({data}) {
  console.log(data);
  
  return (
    <div className='row '>
      {
        data.map(item=>(
     <div className='col p-5'>
      <MDBCard style={{width:'200px', height:'400px'}} >
      <MDBCardImage src={item.thumbnail} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
          Price :$ {item.price}
        </MDBCardText>
       <Link to={`/products/view/${item.id}`}> <MDBBtn href='#'>View products</MDBBtn> </Link>
      </MDBCardBody>
    </MDBCard>
  
     </div>
    
        ))
      }
    </div>
  )
}

export default ViewProduct