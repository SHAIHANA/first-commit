
import React, { useState } from 'react';
import { MDBCollapse} from 'mdb-react-ui-kit';
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import usericon from  '../assets/usericon.png'
function Profile() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <h6 className='fw-bolder'>Profile Update !</h6>
                </div>
                <div className='col-6'>
                    <button className='btn'onClick={toggleOpen} style={{lfloat:'right'
                     }}><MdOutlineSystemUpdateAlt className='fs-3 ' /></button>
                </div>
            </div>
            <MDBCollapse open={isOpen}>
            <div className='row text-center'>
                <label >
                    <input type="file" style={{display:'none'}} />
                    <img src={usericon} alt=""  width={'90%'} height={'280px'} className='mb-3'/>
                    <input type="text"  className='form-control mb-3' placeholder='Username'/>
                    <input type="text"  className='form-control mb-3' placeholder='LinkedIn'/>
                    <input type="text"   className='form-control mb-3'  placeholder='GitHub'/>
                    <button className='btn btn-success nt-4 mb-3'>Update</button>
                </label>
            </div>
            </MDBCollapse>
        </div> 
    )
}

export default Profile