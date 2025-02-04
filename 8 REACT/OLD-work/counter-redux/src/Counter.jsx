import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset,increment,decrement, incrementByAmount} from './Redux/CounterSlice'

function Counter() {
  const dispatch=useDispatch()
  const count =useSelector((state)=>state.CounterReducer.count)
  const [amount,setAmount]=useState("")
  



  const handleIncrement=()=>{
    if(amount==""){
      alert("please provide values properly")
    }
    else{
      //update values in to store
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }

  }
  return (
    <>
    <div>
        
<div> <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
      
  <div className=' d-flex justify-content-center align-items-center border rounded p-3 w-90 flex-column m-3 '>
        
        <h1 style={{fontSize:'50px',color:"white"}}>{count}</h1>

        <div>
           <div className='btn btn-warning' onClick={()=>dispatch(increment())}>Increment</div>
           <div className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</div>
           <div className='btn btn-success' onClick={()=>dispatch(decrement())}>Decrement</div>
        </div>  
       
       
        <div className='d-flex mt-5'>
            <input onChange={e=>setAmount(e.target.value)} value={amount} type="text"  placeholder='enter amount to be incrementd' className='form-control'/>
           <button  onClick={handleIncrement}className='btn btn-primary ms-3'>Increment Amount</button>
        </div>  
   </div>
</div>
    </div>
    </div>
    </>
  )
}

export default Counter