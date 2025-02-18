import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import profileImage from '../assets/profile_pic.png';

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
    <section className="min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-16 py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-6xl lg:text-7xl font-bold">
                Hi, I'm <br /><span className="text-[#5B9BE1] underline decoration-4 underline-offset-8">Shubh Jain</span> <span className="inline-block animate-bounce">👋</span>
              </h2>
              <div className="h-12 mt-8 mb-6">
                <p className="text-2xl lg:text-3xl text-gray-400 font-mono">
                  {text}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-400 max-w-2xl">
            Transforming ideas into scalable solutions with modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-[#5B9BE1] hover:bg-blue-600 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Mail size={20} />
                Contact Me
              </button>
              <button 
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-[#5B9BE1] hover:bg-[#5B9BE1]/10 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <ExternalLink size={20} />
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 pt-8">
              <a 
                href="https://github.com/shubhjain191" 
                className="p-3 rounded-full bg-gray-900 hover:bg-black text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-800/25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} strokeWidth={2.5} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shubhjain19" 
                className="p-3 rounded-full bg-[#0A66C2] hover:bg-black text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} strokeWidth={2.5} />
              </a>
              <a 
                href="mailto:shubhjain191@gmail.com" 
                className="p-3 rounded-full bg-red-600 hover:bg-black text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/25"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={24} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image with Circle */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[500px] h-[500px]">
              {/* Animated background dots */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-32 right-16 w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
              </div>

              {/* Animated rotating gradient border */}
              <div 
                className="absolute w-full h-full rounded-full border-[3px] border-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 animate-spin-slow [mask-image:linear-gradient(white,transparent)] opacity-75"
              ></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm"></div>

              {/* Profile image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-white">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements - Repositioned */}
              <div className="absolute -left-6 top-1/3 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 right-1/3 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Scrolling Skills Line */}
    <div className="relative w-full overflow-hidden bg-[#1d4ed8] py-2">
      <div className="animate-scroll-left whitespace-nowrap flex items-center gap-8">
        <div className="flex items-center gap-8">
          <span className="text-white">Full Stack Development</span>
          <span className="text-white">★</span>
          <span className="text-white">Website Development</span>
          <span className="text-white">★</span>
          <span className="text-white">AI Integration</span>
          <span className="text-white">★</span>
          <span className="text-white">Software Development</span>
          <span className="text-white">★</span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-8">
          <span className="text-white">Full Stack Development</span>
          <span className="text-white">★</span>
          <span className="text-white">Website Development</span>
          <span className="text-white">★</span>
          <span className="text-white">AI Integration</span>
          <span className="text-white">★</span>
          <span className="text-white">Software Development</span>
          <span className="text-white">★</span>
        </div>
      </div>
    </div>
  </>
);
};

export default HeroSection;