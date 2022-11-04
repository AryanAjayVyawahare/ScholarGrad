import React from "react"
import { NavLink } from "react-router-dom"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SCHOLARGRAD' title='Best Scholarship Portal' />
            <p>Gateway to scholarship world</p>
            <div className='button'>
              
              <button className='primary-btn' onClick={()=>{console.log("clicked");}}>SIGN UP<i className='fa fa-long-arrow-alt-right'></i> 
              </button>
             
               <button>LOG IN <i className='fa fa-long-arrow-alt-right'></i> 
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
