import React, { useEffect, useState} from 'react'

function Counter() {
  
    const[counter,setCounter] = useState(0)
    const Increment=()=>
      {
       setCounter(counter+1)
      }

    
    const Decrement=()=>
      {
       setCounter(counter>0 ? counter-1:counter=0)
      }
     
    const Reset =()=>
      {
        setCounter(0)
      }  



// function auto(){
//   const [count, setCount]=useState(0);
// }
//     //define the callback function
//     useEffect (() =>{
//       const updateCount =() => {
//          setCounter(newCount=>newCount+1);
//       }
//     });

//       const interval = setInterval(newCount,1000) 




  return (

<div className='container border border-2 border-dark p-5 m-5'>

{/*        
        <div className='text-center'>
        <h1>count: {auto}</h1>
        </div> */}

        

        <div className='d-flex justify-content-evenly'>

                <button onClick={Increment} className='btn btn-success'>Increment</button>
                <button onClick={Decrement} className='btn btn-danger'>Decrement</button>
                <button onClick={Reset} className='btn btn-dark'>Reset</button>

        </div>
       
</div>
  )
}

export default Counter;