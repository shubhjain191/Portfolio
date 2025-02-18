import React from 'react';
import { Github, Linkedin, Mail, MapPin, Code2 } from 'lucide-react';
import profilecard from '../assets/profilecard.jpg';
import Tailwindcss from '../assets/Tailwind_CSS_Logo.svg';
import Postman from  '../assets/Postman_Logo.png';
import JWT from '../assets/JWT.png';

const AboutMe = () => {
    const techSkills = [
        {
          category: "Programming Languages",
          skills: [
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
          ]
        },
        {
          category: "Web Technologies",
          skills: [
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Tailwind CSS", icon: Tailwindcss },
          ]
        },
        {
          category: "APIs & Protocols",
          skills: [
            { name: "PostMan", icon: Postman },
            { name: "JWT", icon: JWT },
            { name: "WebSocket", icon: "https://www.svgrepo.com/show/354553/websocket.svg" },
          ]
        },
        {
          category: "Databases",
          skills: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          ]
        },
        {
          category: "Tools & Platforms",
          skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
          ]
        },
        
      ];

  return (
    <div id="about" className="min-h-[50vh] py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-4 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.657 3.657 1.414 1.414L34.828 0H32zm-6.485 0L20.343 5.172l1.414 1.414L26.828 0h-1.313zM16 0l-3.657 3.657 1.414 1.414L18.828 0H16zM6.485 0L2.828 3.657 4.242 5.07 9.313 0H6.485zM0 0l2.828 2.828-1.414 1.414L0 2.828V0zm0 5.373l4.242 4.242-1.414 1.414L0 8.485V5.373zm0 5.656l6.485 6.485-1.414 1.414L0 14.14v-3.11zm0 5.656l8.485 8.485-1.414 1.414L0 19.8v-3.11zm0 5.657l10.485 10.485-1.414 1.414L0 25.456v-3.11zm0 5.657l12.485 12.485-1.414 1.414L0 31.113v-3.11zm0 5.657l14.485 14.485-1.414 1.414L0 36.77v-3.11zm0 5.657l16.485 16.485-1.414 1.414L0 42.425v-3.11zm0 5.657l18.485 18.485-1.414 1.414L0 48.082v-3.11zm0 5.657l20.485 20.485-1.414 1.414L0 53.74v-3.11zm0 5.657l22.485 22.485-1.414 1.414L0 59.396v-3.11zm0 5.657l24.485 24.485-1.414 1.414L0 65.053v-3.11zm0 5.657l26.485 26.485-1.414 1.414L0 70.71v-3.11zm0 5.657l28.485 28.485-1.414 1.414L0 76.367v-3.11zm0 5.657l30.485 30.485-1.414 1.414L0 82.024v-3.11zm0 5.657l32.485 32.485-1.414 1.414L0 87.68v-3.11z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                }}></div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 relative">
                <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white/50 bg-white shadow-lg transform hover:scale-105 transition-all duration-300 hover:border-white">
                  <img 
                    src={profilecard} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight hover:tracking-wide transition-all duration-300">
                    Shubh Dinesh Jain
                  </h1>
                  <p className="text-base sm:text-lg font-medium text-blue-100">
                    Full Stack Developer & AI Enthusiast
                  </p>
                </div>

                <div className="flex items-center gap-2 text-blue-100 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-white/20 transition-all duration-300">
                  <MapPin size={18} className="animate-bounce" />
                  <span>Mumbai, Maharashtra</span>
                </div>

                <div className="flex gap-4 sm:gap-6 pt-2 sm:pt-4">
                  {[
                    { icon: <Github size={22} />, href: "https://github.com/shubhjain191" },
                    { icon: <Linkedin size={22} />, href: "https://linkedin.com/in/shubhjain19" },
                    { icon: <Mail size={22} />, href: "mailto:shubhjain191@gmail.com" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/3 p-4 sm:p-10">
              <div className="h-full flex flex-col justify-between space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2 inline-block">
                    About Me
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    I am a passionate Full Stack Developer pursuing my Master's in Network Infrastructure Management Systems at VJTI, Mumbai. With a strong foundation in computer science and hands-on experience in modern web technologies, I specialize in building scalable applications that combine robust backend systems with intuitive user interfaces. My recent work focuses on integrating AI capabilities into web applications, creating more intelligent and responsive digital experiences.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Code2 className="text-blue-500 animate-pulse" />
                    Technical Skills
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    {techSkills.map((category, index) => (
                      <div key={index} className="space-y-2 sm:space-y-3">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-700">
                          {category.category}
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                          {category.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                            >
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-6 h-6"
                              />
                              <span className="text-sm font-medium text-gray-700">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {[
                    { text: "Full Stack Development", bgClass: "bg-blue-50", textClass: "text-blue-600", hoverBg: "hover:bg-blue-100" },
                    { text: "Deep Learning", bgClass: "bg-blue-50", textClass: "text-blue-700", hoverBg: "hover:bg-blue-100" },
                    { text: "MediaPipe", bgClass: "bg-blue-50", textClass: "text-blue-600", hoverBg: "hover:bg-blue-100" }
                  ].map((pill, index) => (
                    <span
                      key={index}
                      className={`px-6 py-2.5 ${pill.bgClass} ${pill.textClass} rounded-full text-sm font-medium ${pill.hoverBg} transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer`}
                    >
                      {pill.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;