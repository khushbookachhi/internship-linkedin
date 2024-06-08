import React, { useEffect, useState } from 'react'
import book from '../../assets/book-4986.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SearchInput from '../searchInput/SearchInput';
const Navbar = () => {
   const [path,setPath]=useState("");
   const location=useLocation();
   useEffect(()=>{
    setPath(location.pathname);
   },[location])
   useEffect(()=>{
console.log(path)
   },[path])
  return (
   
    <><nav className="navbar navbar-expand-lg position-absolute top-0 z-3 bg-body-tertiary" style={{"width":"100%"}}>
    <div className="container-fluid">
      <Link to="/" className="navbar-brand fw-bold fs-2 text-danger-emphasis" >Bookself</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className={`nav-link fw-semibold fs-5 ${path==="/"?'active text-danger border-bottom border-danger':''}`} aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={`nav-link fw-semibold fs-5 ${path==="/myBookself"?'active text-danger border-bottom border-danger':''}`} 
            // activeClassName=" active text-danger border-bottom border-danger"
             to="/myBookself">myBookself</NavLink>
          </li>
         
        </ul>
       {/* searchInput  */}
      {path==="/" && <SearchInput/>} 
      </div>
    </div>
  </nav></>
    
  )
}

export default Navbar