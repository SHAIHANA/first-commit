import React from 'react'

function Dataset({eName}) {
     console.log(eName);
  return (
    <div>

      {eName}
     {/* {
      eName && //if casel
      <h1> Employee Name :{eName}</h1>
     } */}

{/* 
     {
      eName ? //if else casel
      <h1>Employee Name : {eName}</h1>
      :
      <h1>Nothing to display</h1>
     } */}

    </div>
  )
}

export default Dataset