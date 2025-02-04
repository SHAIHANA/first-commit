import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
   const [amount,setAmount]= useState(0)
   const [Year,setYear]= useState(0)
   const [Rate,setRate]= useState(0) 
   //it will  update after the calculation 
   const [Interest,setInterest]= useState(0)
   console.log(amount,Year.Rate);

   const handleinterest=()=>{
    const output=amount*Year*Rate/100
    setInterest(output)
   }
 

  return (
    <>
      <div className='row ' style={{backgroundColor:'greenyellow'}}>
          <div className='col-2'> </div>

        <div className='col-8'>
        <div className=' border border-black
        p-5 m-5 text-center mx-auto w-50'>
          <h3 className='text-center' >Simple Interest Calculator </h3>
        <p>Your Total Interest With Us❤️</p>
        <h3>{Interest}</h3>

       

        {/* inputboxes */}
       <div className='d-flex'>
       <TextField  onChange={e=>setAmount(e.target.value)} id="outlined-basic" label="Amount" variant="outlined" />
        <TextField  onChange={e=>setYear(e.target.value)} id="filled-basic" label="Year" variant="filled" />
        <TextField  onChange={e=>setRate(e.target.value)} id="standard-basic" label="Rate" variant="standard" />
       </div>
        </div>
       {/* button  */}
       <div className='p-3 bg-light shadow'>
       <Button onClick={handleinterest}  variant="contained">Calculate</Button>
       <Button variant="contained">Reset</Button>
       </div>

        </div>
      </div>
    </>
  )
}

export default App
