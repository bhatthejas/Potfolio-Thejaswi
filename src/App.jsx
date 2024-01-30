import React from 'react'
import "./global.css"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './component/Home'
import Projects from "./component/Projects"
import Contact from './component/Contact'
import Nav from './component/Nav'
import About from './component/About'
import Skills from './component/Skills'
import Education from './component/Education'
import Expereince from './component/Expereince'
const App = () => {
  return (
   <Router>
    <Nav/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path='/about' element={<About/>}>
        <Route path='/about/' element={<Skills/>}/>
        <Route path='/about/Education' element={<Education/>}/>
        <Route path='/about/Expereince' element={<Expereince/>}/>
        </Route>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
   </Router>
  )
}

export default App