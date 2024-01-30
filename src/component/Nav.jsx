import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
    <div className="logoblock">
      <h1>PROTFOLIO</h1>
    </div>
    <div className="menublock">
        <ol>
            <li>
                <Link id='link' to={"/"}>HOME</Link>
            </li>
            <li>
              <Link id='link' to={"/about"}>ABOUT</Link>
            </li>
            <li>
              <Link id='link' to={"/projects"}>PROJECTS</Link>
            </li>
            <li>
              <Link id='link' to={"/contact"}>CONTACT</Link>
            </li>
        </ol>
    </div>
    </nav>
  )
}

export default Nav