import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import "./blog.css"
import { NavLink } from "react-router-dom"
//import Head from "../common/header/Head"
import Header from "../common/header/Header"

const Blog = () => {
  return (
    <>
    <Header/>
      <Back title='Blog Post' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />

        </div>
        <div className="postblog">
          <h3>Help us by providing such infomation that you are aware with</h3>
          <div className="postbtn">
            <NavLink to='/contact'><button>Contact us</button></NavLink>
          </div>
        </div>

      </section>
    </>
  )
}

export default Blog
