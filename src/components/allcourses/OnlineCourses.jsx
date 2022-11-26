import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { useState } from "react"
import axios from "axios"

const OnlineCourses = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState([]);


  return (
    <>
      <section className='online' style={{ marginBottom: '7rem' }}>
        <div className='container'>
          <Heading subtitle='COURSES' title='Scolarships for' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box' onClick={() => {
                axios.get(`http://localhost:8083/scholarship/${val.url}`).then(res => {
                  if (res.data.length != 0) {
                    setIsClicked(true);
                    setData(res.data);
                  }
                  else {
                    alert("No Scholarship Available at this moment");
                  }
                }).catch(err => {
                  console.log(err);
                  console.log("Server Error");
                })

              }}>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {
        isClicked ?
          <>
            <div className="tablecontainer">
              <Heading subtitle='' title=' Scolarships' />
              <div className="maintable">
                <table>
                  <tr>
                    <td>Scholarshipname</td>
                    <td>Department</td>
                    <td>Category</td>
                    <td>State</td>
                    <td>Concession</td>
                    <td>Standard</td>
                    <td>Apply</td>
                  </tr>
                  {
                    
                    data.map((val)=>(
                      <>
                      <tr>
                      <td>{val.scholarshipname} </td>
                      <td>{val.department}</td>
                      <td>{val.category}</td>
                      <td>{val.state}</td>
                      <td>{val.concession}</td>
                      <td>{val.standard}</td>
                      <td><a href="">Apply now</a></td>
                    </tr>
                      </>
                    ))
                  }
                </table>

                <button className='primary-btn' style={{width:'7rem'}} on onClick={()=>{setIsClicked(false)}}> Close</button> 
              </div>
            </div>
          </>
          : <></>
      }
    </>
  )
}

export default OnlineCourses
