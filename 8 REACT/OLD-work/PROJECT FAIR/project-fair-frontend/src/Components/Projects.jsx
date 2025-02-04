import React from 'react'
import ProjectCard from './ProjectCard'
import { FaSearch } from "react-icons/fa";
function Projects() {
  return (
    <>
    <div  className='text-center container  m-5 p-5 w-100 '>
      <h1 className='mb-5'>All Projects</h1>
      <div className='d-flex justyfy-content-center'>
      <div  className='d-flex w-50'>
      <input className='form-control '  placeholder='Search By Technology' type="text" />
      <FaSearch  className='fs-3 mt-1' style={{marginLeft:'-50px'}}/>
      </div>
      </div>
    </div>
    <div className='row px-5 mb-5'>
      <div className='col'>
        <ProjectCard/>
      </div>
    </div>
    </>
  )
}

export default Projects