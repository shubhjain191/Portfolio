import React, { useState } from 'react'
import logo from '../../public/logo.svg'

const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Main navigation container with dark background and shadow
    // bg-[#1a1a1a] ensures consistent dark theme across all screen sizes
    <nav className="bg-[#1a1a1a] shadow-lg relative">
      {/* Decorative gradient border - visible on all screen sizes */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5]"></div>
      
      {/* Responsive container with different padding for various screen sizes:
          - px-4 for mobile (default)
          - sm:px-6 for small screens (640px+)
          - lg:px-8 for large screens (1024px+)
          max-w-7xl ensures content doesn't stretch too wide on large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar content wrapper with consistent height */}
        <div className="flex items-center justify-between h-20">
          {/* Logo section - maintains size across all screens */}
          <div className="flex-shrink-0 hover:opacity-90 transition-opacity duration-300">
            <img 
              className="h-12 w-auto p-1 bg-white/95 rounded-lg shadow-md" 
              src={logo} 
              alt="logo" 
            />
          </div>
          
          {/* Desktop Navigation Links
              hidden on mobile (<768px)
              visible on medium screens and up (md:block) */}
          <div className="hidden md:block">
            <ul className="flex space-x-12">
              <li className="relative group">
                <a href="#home" className="text-[#b3b3b3] hover:text-[#00d2ff] transition-colors duration-300 text-sm font-medium tracking-wide">Home</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d2ff] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
              <li className="relative group">
                <a href="#about" className="text-[#b3b3b3] hover:text-[#00d2ff] transition-colors duration-300 text-sm font-medium tracking-wide">About Me</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d2ff] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
              <li className="relative group">
                <a href="#services" className="text-[#b3b3b3] hover:text-[#00d2ff] transition-colors duration-300 text-sm font-medium tracking-wide">Services</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d2ff] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
              <li className="relative group">
                <a href="#projects" className="text-[#b3b3b3] hover:text-[#00d2ff] transition-colors duration-300 text-sm font-medium tracking-wide">Projects</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d2ff] transition-all duration-300 group-hover:w-full opacity-90"></span>
              </li>
            </ul>
          </div>
          
          {/* Desktop Contact Button
              hidden on mobile (<768px)
              visible on medium screens and up (md:block) */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="bg-[#00d2ff] hover:bg-[#3a7bd5] text-[#f5f5f5] px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact me
            </a>
          </div>

          {/* Mobile Menu Button
              visible on mobile (<768px)
              hidden on medium screens and up (md:hidden) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#b3b3b3] hover:text-[#00d2ff] hover:bg-[#2d2d2d] transition-colors duration-300"
            >
              {/* Hamburger/Close icon SVG that toggles based on menu state */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  // X icon when menu is open
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon when menu is closed
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown
            Only visible when isOpen is true and on mobile screens
            Hidden on medium screens and up (md:hidden) */}
        {isOpen && (
          <div className="md:hidden">
            {/* Mobile menu container with enhanced touch targets for better mobile UX
                Increased padding and spacing for better touch interactions */}
            <div className="px-2 pt-2 pb-3 space-y-2 bg-[#2d2d2d] rounded-lg mt-2 shadow-xl">
              {/* Mobile navigation links with larger touch targets */}
              <a href="#home" className="block px-4 py-3 rounded-lg text-base font-medium text-[#b3b3b3] hover:text-[#00d2ff] hover:bg-[#1a1a1a]">Home</a>
              <a href="#about" className="block px-4 py-3 rounded-lg text-base font-medium text-[#b3b3b3] hover:text-[#00d2ff] hover:bg-[#1a1a1a]">About Me</a>
              <a href="#services" className="block px-4 py-3 rounded-lg text-base font-medium text-[#b3b3b3] hover:text-[#00d2ff] hover:bg-[#1a1a1a]">Services</a>
              <a href="#projects" className="block px-4 py-3 rounded-lg text-base font-medium text-[#b3b3b3] hover:text-[#00d2ff] hover:bg-[#1a1a1a]">Projects</a>
              <a 
                href="#contact" 
                className="mt-4 block w-full bg-[#00d2ff] hover:bg-[#3a7bd5] text-[#f5f5f5] px-4 py-3 rounded-lg text-center"
              >
                Contact me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
