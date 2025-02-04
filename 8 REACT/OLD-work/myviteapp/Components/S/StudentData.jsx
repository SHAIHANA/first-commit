import React from 'react'

function StudentData({studentName,isPresent}) {
  // console.log(props);
    //Child COMPONENT
  return (
    <div style={{width:'500px', height: '500px', backgroundColor: 'green'}}> 
      <h1 style={{textAlign:'center'}}>StudentData</h1>
        <h3>Student Name: {studentName} </h3>
        <h3>Studenr status: {isPresent ? "Active" :"inactive"}</h3> 
    </div>
  )
}

export default StudentData