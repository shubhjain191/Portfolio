import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main footer content wrapper - uses grid for responsive layout */}
      <div className="footer-content">
        {/* Bio Section - Full width on mobile, 1/3 on larger screens */}
        <div className="footer-section bio">
          <h3>Shubh Jain</h3>
          <p className="bio-text">
            Passionate Full Stack Developer crafting digital experiences. 
            Let's build something amazing together!
          </p>
          {/* Social media links with hover effects */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/shubhjain19" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/shubhjain191" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:shubhjain191@gmail.com" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        {/* Navigation Section - Full width on mobile, 1/3 on larger screens */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Home
              </a>
            </li>
            <li><a href="#about" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}>About Me</a></li>
            <li><a href="#services" onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}>Services</a></li>
            <li><a href="#projects" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>Projects</a></li>
          </ul>
        </div>

        {/* Contact Section - Full width on mobile, 1/3 on larger screens */}
        <div className="footer-section contact">
          <h3>Get in Touch</h3>
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Mumbai, India</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> shubhjain191@gmail.com</p>
          </div>
        </div>
      </div>
      
      {/* Copyright Section - Stacks vertically on mobile */}
      <div className="footer-bottom">
        <p>Designed & Built by Shubh Jain</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
