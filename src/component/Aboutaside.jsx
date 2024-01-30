import React from 'react'
import { Link } from 'react-router-dom'

const Aboutaside = () => {
  return (
    <div className='aboutaside'>
      <ul>
      <li>
        <Link  to={"/about/"}>SKILLS</Link>
        </li>
        <li>
        <Link  to={"/about/Education"}>EDUCATION</Link>
        </li>
        <li>
        <Link  to={"/about/Expereince"}>EXPEREINCE</Link>
        </li>
        </ul>
    </div>
  )
}

export default Aboutaside