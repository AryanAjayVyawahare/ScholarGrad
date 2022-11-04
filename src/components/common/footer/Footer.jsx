import React from "react"
import { NavLink } from "react-router-dom"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>ScholarGrad - Stay tune and get the latest update</h1>
            <span>Don't miss the chance to become scholar</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>SCHOLARGRAD</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A Place which helps you to complete your Educational dreams</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
            <NavLink to='/' style={{color:'black'}}> <li> Home</li></NavLink>
             <NavLink to='/about' style={{color:'black'}}> <li>About Us</li></NavLink>
             <NavLink to='/pricing' style={{color:'black'}}> <li>Pricing</li> </NavLink>
            <NavLink to='/courses' style={{color:'black'}}>  <li>Courses</li> </NavLink>
             <NavLink to='/journal' style={{color:'black'}}> <li>Blog</li> </NavLink>
           <NavLink to='/contact' style={{color:'black'}}> <li>Contact us</li>  </NavLink>
            </ul>
          </div>
          <div className='box link'>
            
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
            <NavLink to='/journal' style={{color:'black'}}> 
              <div className='items flexSB'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
              </NavLink>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Shri Sant Gajanan Maharaj College of Engineering Shegoan
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                admin@scholargrad.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | Scholargrad <i className='fa fa-heart'></i> 
        </p>
      </div>
    </>
  )
}

export default Footer
