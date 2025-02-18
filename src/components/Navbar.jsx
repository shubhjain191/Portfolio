import React, { useState } from 'react'
import logo from '../../public/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1E2C5E] to-[#2A3E7F] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 hover:opacity-90 transition-opacity duration-300">
            <img 
              className="h-12 w-auto p-1 bg-white/95 rounded-lg shadow-md" 
              src={logo} 
              alt="logo" 
            />
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <ul className="flex space-x-12">
              <li className="relative group">
                <a href="#" className="text-gray-100 hover:text-[#00A9C2] transition-colors duration-300 text-sm font-medium tracking-wide">Home</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A9C2] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
              <li className="relative group">
                <a href="#" className="text-gray-100 hover:text-[#00A9C2] transition-colors duration-300 text-sm font-medium tracking-wide">About Me</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A9C2] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
              <li className="relative group">
                <a href="#" className="text-gray-100 hover:text-[#00A9C2] transition-colors duration-300 text-sm font-medium tracking-wide">Services</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A9C2] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
              <li className="relative group">
                <a href="#" className="text-gray-100 hover:text-[#00A9C2] transition-colors duration-300 text-sm font-medium tracking-wide">Project</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A9C2] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
            </ul>
          </div>
          
          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-[#00A9C2] hover:bg-[#0090A8] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
              Contact me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-100 hover:text-[#00A9C2] hover:bg-[#2A3E7F] transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-[#2A3E7F] rounded-lg mt-2 shadow-xl">
              <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-100 hover:text-[#00A9C2] hover:bg-[#1E2C5E] transition-colors duration-300">Home</a>
              <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-100 hover:text-[#00A9C2] hover:bg-[#1E2C5E] transition-colors duration-300">About Me</a>
              <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-100 hover:text-[#00A9C2] hover:bg-[#1E2C5E] transition-colors duration-300">Services</a>
              <a href="#" className="block px-4 py-3 rounded-lg text-base font-medium text-gray-100 hover:text-[#00A9C2] hover:bg-[#1E2C5E] transition-colors duration-300">Project</a>
              <button className="mt-4 w-full bg-[#00A9C2] hover:bg-[#0090A8] text-white px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                Contact me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
