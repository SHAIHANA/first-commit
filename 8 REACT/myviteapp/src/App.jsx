
import './App.css'
import StudentData from './Components/StudentData'

function App() {
  //parent Component
  // const sName ='Arun'
  const sNAME='shana'
  return (
    <>
    {/* normal data passing */}
     {/* <h1>Student Name : {sName}</h1>  */}

<h1>Student Name:{sNAME}</h1>

     {/* Data passing - component through parent to child data passing */}  
     {/* <StudentData studentName ={sName} isPresnt={false} /> */}
     <StudentData Student={sNAME} isPresent={false}/>           
    </>
  )
}

export default App
