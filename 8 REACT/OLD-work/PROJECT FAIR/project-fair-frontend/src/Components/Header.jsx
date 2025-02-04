import React from 'react'
import { SiPolymerproject } from "react-icons/si";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='light'>
        <MDBContainer>
          <MDBNavbarBrand href='#'>
          <SiPolymerproject style={{fontSize:'40px'}} />
            <h1 className='mx-4'>PROJECT FAIR</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar> 

  

</div>
  )
}

export default Header