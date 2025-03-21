import React from 'react';
import Tailwindcss from '../assets/Tailwind_CSS_Logo.svg';
import JWT from '../assets/JWT.png';
import GeminiAI from '../assets/geminiai.png';
import Cohere from '../assets/cohere.png';
import Clerk from '../assets/clerk-logo-dark-accent.png';

const skillsData = [
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
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Shadcn UI", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Gemini AI", icon: GeminiAI },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Cohere", icon: Cohere},
      { name: "Hugging Face", icon: "https://huggingface.co/favicon.ico" },
    ]
  },
  {
    category: "APIs & Protocols",
    skills: [
      { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
      { name: "JWT", icon: JWT },
      { name: "WebSocket", icon: "https://www.svgrepo.com/show/354553/websocket.svg" },
    ]
  },
  {
    category: "Databases & ORM",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Prisma ORM", icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg" },
      { name: "Neon (PostgreSQL)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
      { name: "Clerk", icon: Clerk },
      { name: "Inngest", icon: "https://avatars.githubusercontent.com/u/80175460?s=200&v=4" },
      { name: "Vercel", icon: "https://cdn.worldvectorlogo.com/logos/vercel.svg" },
    ]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 flex items-center justify-center min-h-[50vh]">
      <div className="container flex flex-col items-center">
        {/* Centered Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-primary text-2xl">{"</>"}</span>
          <h2 className="text-3xl font-bold text-gray-800 animate-fade-in-up ease-in-out duration-500">
            Technical Skills
          </h2>
        </div>

        <div className="space-y-10 w-full max-w-5xl flex flex-col items-center">
          {skillsData.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="animate-fade-in-up w-full flex flex-col items-center" 
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              {/* Centered Category Title */}
              <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                {category.category}
              </h3>
              {/* Centered Skill Cards */}
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 w-40 hover:bg-blue-50 hover:scale-105 transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
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
    </section>
  );
};

export default Skills;