
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route,Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import Pagenotfound from './Pages/Pagenotfount'
import AProducts from './Pages/AProducts'
function App() {


  return (
    <>
    <Header/>
       <Routes>
      {/* http://localhost:5173/ - HOME PAGE */}
        <Route path= "/" element={<HomePage/>}/>

        {/* http://localhost:5173/product - PRODUCT PAGE */}
        <Route path="products" element={<ProductPage/>}/>

        {/* http://localhost:5173/ -VIEW A PARTICULAR PRODUCT PAGE - HOME PAGE */}
        <Route path="/products/view/:id" element={<AProducts/>}/>

        {/* PAGE NOT FOUND */}
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
