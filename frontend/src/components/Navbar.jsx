import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='navbar fixed top-0 z-50 w-full'>
      <div className='nav-content max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        <a href="#hero" className='nav-logo text-2xl font-bold'>
          <span>ARYAN</span>
        </a>

        {/* Desktop Navigation */}
        <div className='nav-links hidden md:flex gap-8'>
          <a href="#projects" className='nav-link'>Projects</a>
          <a href="#skills" className='nav-link'>Skills</a>
          <a href="#about" className='nav-link'>About</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className={`md:hidden hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Navigation menu"
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className='mobile-nav-links flex flex-col gap-4 p-6'>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar