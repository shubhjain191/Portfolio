import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Education from './components/Education'
import Projects from './components/Projects'
import Contactme from './components/Contact/Contactme'
import Footer from './components/footer'
import Skills from './components/skills'


const App = () => {
  return (
    <div className=' min-h-screen text-black p-4'>
      <div className='border border-gray-200 rounded-xl min-h-[calc(100vh-2rem)] backdrop-blur-sm bg-gradient-to-br from-white via-blue-50 to-blue-100'>
        <Navbar />
        <Hero/>
        <About/>
        <Services/>
        <Projects/>
        <Skills />
        <Education/>
        <Contactme/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
