import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Project'
import Footer from './component/Footer'
import Contact from './component/Contact'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
    
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App