import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left - Bio Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-3 border-b-2 border-blue-500 inline-block pb-1">Shubh Jain</h3>
            <p className="text-gray-400">Passionate Full Stack Developer crafting digital experiences. Let's build something amazing together!</p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/shubhjain19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com/shubhjain191" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="mailto:shubhjain191@gmail.com" className="text-gray-400 hover:text-red-500 transition duration-300">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
          </div>

          {/* Right - Navigation */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-3 border-b-2 border-blue-500 inline-block pb-1">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "About Me", "Services", "Projects"].map((item, index) => (
                <li key={index}>
                  <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className="text-gray-400 hover:text-blue-400 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
          <p>Designed & Built by Shubh Jain</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
