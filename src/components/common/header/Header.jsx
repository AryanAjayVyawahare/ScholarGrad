import React, { useState } from "react"
import { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = ({login}) => {
  const [click, setClick] = useState(false)
  const[wantLogin,setWantLogin]=useState(true);
  
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/scholarship'>Scholarships</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/result'>Result</NavLink>
            </li>-
            <li>
              <NavLink to='/pricing'>FAQS</NavLink>
            </li>
            <li>
              <NavLink to='/journal'>Journal</NavLink>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            
          <li>
              <Link to='/login'>Login</Link>
            </li>
         

          
          </ul>
          <div className='start'>
            {/* <div className='button'>GET CERTIFICATE</div> */}
            <img src="" alt=""/>
            
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
