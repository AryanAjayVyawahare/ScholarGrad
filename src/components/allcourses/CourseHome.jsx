import React from "react"
import Back from "../common/back/Back"
import Header from "../common/header/Header"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
    <Header/>
      <Back title='Explore Scholarship' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
