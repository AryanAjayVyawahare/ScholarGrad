import "./App.css"
import { BrowserRouter,Route,Routes} from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
//import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
// import Footer from "./components/common/footer/Footer"
// import Header from "./components/common/header/Header"
import Home from "./components/home/Home"
import Login from "./components/SignIn/LogIn"
import Footer from "./components/common/footer/Footer"
import Result from "./components/Result/Result"

function App() {
  return (
    <>
      <BrowserRouter>
        
         <Routes>     
          <Route exact path='' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/scholarship' element={<CourseHome/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} /> 
          <Route exact path="/result" element={<Result/>}/>
          <Route exact path="/login" element={<Login/>}/>
          </Routes>
          <Footer/>
        {/* <Login/> */}
      </BrowserRouter>
    </>
  )
}

export default App