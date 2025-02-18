import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen text-black p-4'>
      <div className='border border-gray-200 rounded-xl min-h-[calc(100vh-2rem)] backdrop-blur-sm bg-white/50'>
        <Navbar />
        <Hero/>
      </div>
    </div>
  )
}

export default App
