
import './App.css'
import StudentData from '../Components/S/StudentData'

function App() {
  //Parent Component
  
const sName ="ARUN"//string interpollation aanu ith -oru componentinte akath data pass cheyikan
  return (
    <>
      <h1>Student Name : {sName}</h1>
      <StudentData studentName={sName} isPresent/>
     </>
  )
}

export default App
