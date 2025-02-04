
import './App.css'
import Dataset from './Components/Dataset'
import { useEffect, useState } from 'react'
 
function App() {
  //let employee name
  //State creation
  const [employeename,setEmployeeName] = useState('Ann')
  
//setEmployeeName enna set statente use -upadations ariyanulla function an thaze

    const handleAlert =()=>{
      setEmployeeName("Ann Luke")
      alert("Employee name has been changed")
    }
    useEffect(()=>{
      handleAlert()
    },[])

 
//   const handleAlert=()=>{
//     alert ("Login Success")

//   }

// //variable pass cheyunna button anel ()kodkandath aan ee step
//   const handleArguments=(details)=>{
//     alert (details)

//   }

//   //input
   
//     const handleinput=(e)=>{
//   //alert (details)
//       console.log(e.target.value);
//      }
   


  return (
    <>      
    {/* //   <div>Hello World</div>

    //   <button onClick={handleAlert} style={{backgroundColor:'black', color:'white',padding:'10px',width:'200px'}}>Login</button>
      
    //   <button onClick={()=>handleArguments("login : Username , password")} style={{backgroundColor:'orange',color:'white',padding:'10px', margin:'10px',width:'200px'}}>LOGIN</button><br />
      
    //  <input onChange={(e)=>handleinput(e)} type="text" placeholder='Enter Data'style={{margin:'10px', padding:'8px'}} /> */}
     <Dataset eName = {employeename} />

    </>
  )
}

export default App
