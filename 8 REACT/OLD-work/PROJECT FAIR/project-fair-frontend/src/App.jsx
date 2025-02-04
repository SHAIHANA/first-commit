
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Auth from './PAGES/Auth.jsx'
import Dashboard from './PAGES/Dashboard.jsx'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Home from './PAGES/Home'
import PageNoteFound from './PAGES/PageNoteFound'
import Footer from './Components/Footer'
// import View from './Components/View.jsx'
function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register={true} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/*' element={<PageNoteFound />} />

      </Routes>
     
      <Footer />
  

    </>
  )
}

export default App
