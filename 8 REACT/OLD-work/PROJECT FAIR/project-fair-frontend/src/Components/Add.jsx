import React from 'react'
import { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,

} from 'mdb-react-ui-kit';

function Add() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
    return (
        <div>
            <button className='btn btn-dark' style={{ float: 'right' }} onClick={toggleOpen}>Add</button>
          
            <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>ProjecT Name</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className='row'>
                                <div className='col-6'>
                                  <label >
                                    <input type="file" style={{display:'none'}} />
                                    <img src="https://www.downloadclipart.net/medium/44265-complete-add-images.png" width={'100%'} alt="" />
                                  </label>
                                </div>
                                <div className='col-6'>
                                   

                                        <input className='form-control mb-3' placeholder='Title' type="text" />
                                        <input className='form-control mb-3' placeholder='Language' type="text" />
                                        <input className='form-control mb-3' placeholder='GitHub' type="text" />
                                        <input className='form-control mb-3' placeholder='Website' type="text" />
                                        <input className='form-control mb-3' placeholder='Title' type="text" />
                                        <textarea className='form-control mb-3' placeholder='OverView' type="text"></textarea> 

                                        <div className='d-flex justify-content-evenly'>
                                            <button type='submit' className='btn btn-success'>Add</button>
                                            <button  onClick={toggleOpen}type='submit' className='btn btn-dark'>Cancel</button>
                                        </div>


                                   

                                </div>
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}

export default Add