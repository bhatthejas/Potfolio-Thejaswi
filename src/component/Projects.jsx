import React from 'react'
import Style from "../component/projects.module.css"
const Projects = () => {
  return (
    <div className={Style.projectsect}>
      <h1>PROJECTS</h1>
    <div className={Style.project}>
      <div className={Style.projects}>
        <h2>Get It Checked</h2>
        <ul>
          <li>This project is Developed to check for plagiarism in assignments, it will examine the assignment's
overall copy content percentage.</li>
<li>It will reject the assignment and notify the faulty if the percentage of plagiarism is greater than
50%. Based on the answer key, it automatically assigns the grades.</li>
        </ul>
      </div>
      <div className={Style.projects}>
        <h2>Todo application</h2>
        <ul>
          <li>Developed application using html, css, javascript for front end and for backend spring boot, rest api used.</li>
<li>The application allows users to create, edit, and delete tasks, with features like task prioritization and status tracking.</li>
        </ul>
      </div>
      <div className={Style.projects}>
        <h2>Chemical Free Mosqito Repelent</h2>
        <ul>
          <li>This project is being built to encourage people to use mosquito repellent in order to protect
themselves against mosquito bites and diseases carried by mosquitoes.</li>
          <li>It has two modes of operation: UV-MR hybrid and ultrasonic sound</li>
        </ul>
      </div>
      <div className={Style.projects}>
        <h2>E-commerce application</h2>
        <ul>
          <li>This e-commerce application, developed using Spring Boot for the backend and HTML/CSS for the front end, leverages MySQL for data storage. </li>
          <li>It features secure OTP validation, efficient product storage, and a user-friendly interface for displaying a wide range of products.</li>
        </ul>
      </div>

    </div>
    </div>
  )
}

export default Projects