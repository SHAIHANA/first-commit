import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function View() {
    return (
        <div className='row'>
            <div className='col border shadow p-3'>
                <div className='row '>
                    <div className='col-8'>
                      <h5>Project Name</h5>

                    </div>
                    <div className='col-4 '>
                        <CiEdit className='fs-3 text-success fw-bolder me-2' />
                        <FaLink  className='fs-3 text-info fw-bolder me-2' />
                        <FaGithub  className='fs-3 text-dark fw-bolder me-2' />
                        <MdDelete  className='fs-3 text-danger fw-bolder me-2' />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default View 