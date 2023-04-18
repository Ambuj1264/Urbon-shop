import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Clothes from './component/Clothes'
import './component/Style.css'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clothes" element={<Clothes/>}/>
      </Routes>
    <Footer />
    </BrowserRouter>

    </>
  )
}

export default App