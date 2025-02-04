import React from 'react'

function StudentData({Student,isPresent}) {
  //  console.log(props);
   
    //Objectprops

    //destructuring prosps:{studentName,isPresnt} => {studentName,isPresent} 
    // ------propsin pakaram keys (ispresent) vech kodukunath------

    
    ////////////////Child component///////////


  return (
    //inline styling
    <div style={{width:'500px',height:'200px', backgroundColor:'green'}}>


        <h1 style={{textAlign:'center'}}>StudentData</h1>
        <h3>Student Name :{Student}</h3>
        <h3>Student Status:{isPresent ? "Active" :" inactive"}</h3>
        {/* <h3> Student Name: {studentName}</h3>
        <h3>Student Status: {isPrsent ? "Active" :"Inactive"}</h3> */}
    </div>
  )
}

export default StudentData