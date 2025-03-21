import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile_pic.png';
import cv from '../assets/Shubh_Jain_Resume.pdf';

// Profile Image Card Component
const ProfileImageCard = ({ 
  name = "Shubh Jain",
  imageSrc = profileImage,
  statusText = "Available",
  skills = [
    { color: "bg-green-500", text: "Crafting seamless UI/UX designs" },
    { color: "bg-blue-500", text: "Focused on performance optimization" },
    { color: "bg-purple-500", text: "Expert in modern JavaScript frameworks" }
  ],
  lastUpdated = "Just Now"
}) => {
  return (
    <div className="w-full md:max-w-sm mx-auto">
      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Tabbed Window Header */}
        <div className="bg-gray-200 backdrop-blur-md rounded-t-xl p-2 flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-all"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-all"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-all"></div>
        </div>

        {/* Profile Image */}
        <div className="pt-4 px-4 sm:px-5">
          <div className="overflow-hidden rounded-lg border-3 border-blue-500 aspect-square">
            <img
              src={imageSrc}
              alt={name}
              className="w-full h-full object-cover object-center border-2 border-blue-500 rounded-lg shadow-lg transition-transform duration-300"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4 sm:p-5">
          <div className="mb-3">
            <div className="inline-block px-3 py-1 bg-green-700 text-white rounded-full font-semibold text-xs">
              {statusText}
            </div>
          </div>
          
          <ul className="space-y-2 mb-4">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className={`w-4 h-4 mt-0.5 ${skill.color} rounded-full flex-shrink-0`}></span>
                <span>{skill.text}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex justify-between items-center mt-3 text-xs text-gray-500 border-t border-gray-100 pt-3">
            <span>Latest update</span>
            <span className="font-medium">{lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [text, setText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Main Content Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
              {/* Welcome Badge */}
              <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-full font-semibold text-xs sm:text-sm shadow-lg">
                <span className="inline-block mr-2">👋</span> Welcome to my portfolio
              </div>

              <div className="space-y-4 sm:space-y-5">
                <h2 className="font-extrabold text-gray-900 leading-tight">
                  <span className="text-2xl sm:text-3xl md:text-4xl">Hey, I'm</span>{' '}
                  <span className="text-3xl sm:text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Shubh Jain
                  </span>
                </h2>
                <div className="h-8 sm:h-10">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-mono tracking-wide">
                    {text}<span className="animate-pulse text-blue-600">|</span>
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
                I design and develop applications that are beautiful, functional, and provide exceptional user experiences.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center gap-2 text-sm sm:text-base"
                >
                  Get in touch
                  <span>→</span>
                </button>
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-2 sm:py-3 text-gray-700 font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
                >
                  View my work
                </a>
              </div>

              <div className="flex gap-4 sm:gap-6 pt-4 sm:pt-6">
                <span className="text-gray-600 font-medium text-sm sm:text-base">Connect with me:</span>
                <a
                  href="https://github.com/shubhjain191"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubhjain19"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="mailto:shubhjain191@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* Right Content - Updated Profile Card Component */}
            <div className="animate-slide-in-right mt-8 lg:mt-0 ">
              <ProfileImageCard 
                name="Shubh Jain"
                imageSrc={profileImage}
                statusText="Available"
                skills={[
                  { color: "bg-green-500", text: "Crafting seamless UI/UX designs" },
                  { color: "bg-blue-500", text: "Focused on performance optimization" },
                  { color: "bg-purple-500", text: "Expert in modern JavaScript frameworks" }
                ]}
                lastUpdated="Just Now"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1.2s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 1.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default HeroSection;