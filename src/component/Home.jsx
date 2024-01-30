import React from 'react'
import insta from '../Images/linkedin.png'
import fbimg from '../Images/facebook.png'
import linked from '../Images/intagram.png'
import profile from '../Images/Thejaswi1.jpeg'
import Style from "../component/home.module.css"
import resume from "../Images/Thejaswi_Resume.pdf"
const Home = () => {
  const instagramPageURL='https://www.instagram.com/thejaswibhatk?igsh=Mzd6MGdhcHRzc3hx'
  const linkedinpage = 'https://www.linkedin.com/in/thejaswi-k-498491204/'
  const fbpage = 'https://www.facebook.com/thejaswi.bhatk?mibextid=ZbWKwL'
  return (
    <div className={Style.homeblock}>
        <div className={Style.content}>
            <h6>Hello I'm</h6>
            <h1>THEJASWI K</h1>
            <h2>Graduated Engineer</h2>
            <p>Seeking an entry-level software engineering role that will fully utilize my training and skills while allowing me
to learn continuously and make a significant contribution towards the success of the compan.</p>
            <div className={Style.social_media}>
            <a href={instagramPageURL} target="_blank" rel="noopener noreferrer">
            <button>
              <img src={insta} alt="" />
            </button>
          </a>
          <a href={linkedinpage} target="_blank" rel="noopener noreferrer">
            <button>
              <img src={linked} alt="" />
            </button>
          </a>
          <a href={fbpage} target="_blank" rel="noopener noreferrer">
            <button>
              <img src={fbimg} alt="" />
            </button>
          </a>  <br /><br /> 
          <div className={Style.downloadbtn}>
            <button>
          <a href={resume} download="Thejaswi_Resume" class="btn">Download CV</a>
          </button>
          </div>
            </div>
        </div>
        <div className={Style.imageblock}>
            <img src={profile} alt="" />
        </div>
        
    </div>
  )
}

export default Home