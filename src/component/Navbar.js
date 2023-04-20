import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
  const [state,setState]= useState({
    search:""
  })
  const navigate=useNavigate()
  const handler=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
const submitData=async()=>{
    try {
      const responseOfAxios= await axios.post("http://localhost:4500/manager",{
        search:(state.search),
        start:"0"
      })
      if(responseOfAxios.data.length>=1){
        console.log(responseOfAxios.data,"datatatatatat")
      }else{
        alert("Serach is not valid")
        navigate("/");
      }
    } catch (error) {
      alert("Serach is not valid")
      navigate("/")
    }
}
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-black ">
  <div className="container-fluid ">
    <NavLink className="navbar-brand text-white" to="/">Urban Shop</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/clothes">Cloths</NavLink>
        </li>
        <li className="nav-item dropdown ">
          <NavLink className="nav-link  text-white dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu  bg-black">
            <li><NavLink className="dropdown-item text-white bg-black" to="sports">Sport Shoes</NavLink></li>
            <li><NavLink className="dropdown-item text-white bg-black" to="/casual">Casual Shoes</NavLink></li>
            {/* <li><hr className="dropdown-divider " /></li> */}
            <li><NavLink className="dropdown-item text-white bg-black"   to="/sneakers">Sneakers</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/register">Register</NavLink>
        </li>
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 text-black"  name="search" value={state.search} onChange={handler} type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success text-white " onClick={submitData} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </> 
  )
}

export default Navbar