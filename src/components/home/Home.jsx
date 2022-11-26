import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import Contact from "../contact/Contact"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const Home = () => {
  return (
    <>
    <Header login={false}/>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
      
    </>
  )
}

export default Home
