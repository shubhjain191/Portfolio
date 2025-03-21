import React, { useState } from 'react';
import { Code, Database, Activity, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import imagitext from '../assets/imagitext.png';
import edumern from '../assets/edumern.png';
import appointify from '../assets/appointify.png';
import formfit from '../assets/formfit.png';
import aiLogoGenerator from '../assets/AILogoGenerator.png';
import careerMentorAI from '../assets/careermentorAI.png'; // Add your actual image here

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "EduMERN",
      description: "A comprehensive Learning Management System built with the MERN stack. Features include secure authentication, course creation system, analytics dashboard, and Stripe payment integration for subscription management.",
      image: edumern,
      tags: ["MERN Stack", "Authentication", "Analytics", "Payments"],
      category: "Full-Stack Applications",
      links: {
        demo: "https://edumern.example.com",
        github: "https://github.com/shubhjain191/edumern"
      },
      achievements: [
        "99.9% payment processing success rate",
        "Custom analytics dashboard for educators",
        "Seamless course management"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Clerk Auth", "Stripe", "Tailwind CSS", "Vercel"]
    },
    {
      title: "Appointify",
      description: "A full-stack healthcare appointment management platform. Allows patients to book appointments, doctors to manage their schedules, and administrators to oversee operations. Includes real-time tracking and payment integration.",
      image: appointify,
      tags: ["MERN Stack", "Healthcare", "Real-time", "Payments"],
      category: "Full-Stack Applications",
      links: {
        github: "https://github.com/shubhjain191/appointify"
      },
      achievements: [
        "95% reduction in scheduling conflicts",
        "Role-based access control system",
        "Real-time appointment tracking"
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Razorpay", "WebSocket", "Tailwind CSS"]
    },
    {
      title: "FormFit",
      description: "An AI-powered fitness analysis system that uses computer vision to track and improve workout form. Provides real-time feedback and personalized recommendations based on performance metrics.",
      image: formfit,
      tags: ["AI", "Computer Vision", "Fitness", "Analytics"],
      category: "Computer Vision",
      links: {
        demo: "https://formfit.example.com",
        github: "https://github.com/shubhjain191/formfit"
      },
      achievements: [
        "99% accuracy in pose estimation",
        "95% accuracy in form detection",
        "Personalized workout recommendations"
      ],
      tech: ["Python", "MediaPipe", "Deep Learning", "BiLSTM", "Cohere", "Streamlit", "TensorFlow"]
    },
    {
      title: "ImagiText",
      description: "A powerful AI-driven Text-to-Image Generator that transforms textual descriptions into stunning visuals. Features include real-time processing, user authentication, image downloading and sharing capabilities, all wrapped in a responsive UI.",
      image: imagitext,
      tags: ["AI", "Image Generation", "MERN Stack", "Authentication"],
      category: "Generative AI",
      links: {
        github: "https://github.com/shubhjain191/imagitext"
      },
      achievements: [
        "Real-time image generation processing",
        "Secure user authentication system",
        "Cross-device responsive interface"
      ],
      tech: ["React.js", "Vite", "Node.js", "MongoDB", "Express.js", "JWT", "ClipDrop API", "Tailwind CSS"]
    },
    {
      title: "AI Logo Generator",
      description: "This project demonstrates how to create a stunning AI-powered logo generator using modern web technologies and AI tools. By combining Next.js, React, the Gemini API, and Hugging Face, you'll learn to generate unique logos programmatically.",
      image: aiLogoGenerator,
      tags: ["AI", "Logo Generation", "Next.js", "React"],
      category: "Generative AI",
      links: {
        github: "https://github.com/shubhjain191/ai-logo-generator"
      },
      achievements: [
        "Generate logos using AI models from Hugging Face and Gemini API",
        "Responsive UI built with Next.js and React",
        "User authentication with Clerk",
        "Credit-based usage system for logo generation"
      ],
      tech: ["Next.js", "React", "Gemini API", "Hugging Face", "Clerk"]
    },
    {
      title: "CareerMentor AI",
      description: "An AI-powered career coaching platform built with Next.js. Features user authentication, onboarding, AI-generated industry insights, mock interviews, resume building, and cover letter generation with a responsive design.",
      image: careerMentorAI, 
      tags: ["AI", "Career Coaching", "Next.js", "Authentication"],
      category: "Generative AI",
      links: {
        github: "https://github.com/shubhjain191/careermentor" 
      },
      achievements: [
        "Personalized onboarding and career insights",
        "AI-driven mock interview preparation",
        "Downloadable AI-generated resumes and cover letters",
        "Weekly insights via scheduled tasks"
      ],
      tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Prisma", "Clerk", "Gemini AI", "Inngest", "Neon"]
    }
  ];
  
  const filters = ['All', 'Full-Stack Applications', 'Computer Vision', 'Generative AI', ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <div id="projects" className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Featured Projects
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A showcase of my technical work, from full-stack web applications to AI-powered systems.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 border border-blue-50"
            >
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white space-y-2">
                    <div className="flex gap-3">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors duration-200"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{project.title}</h3>
                  {project.category === 'Full-Stack Applications' || project.category === 'Healthcare Solutions' ? (
                    <Code className="w-5 h-5 text-blue-500" />
                  ) : project.category === 'Computer Vision' || project.category === 'Generative AI' || project.category === 'AI Assistants' ? (
                    <Activity className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Database className="w-5 h-5 text-blue-500" />
                  )}
                </div>
                
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800">Key achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="inline-block w-1 h-1 rounded-full bg-blue-400 mt-1.5 mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 sm:mt-5">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800">Technologies:</h4>
                  <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1 sm:gap-1.5">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-gray-100 text-gray-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center px-4"
        >
          <a
            href="https://github.com/shubhjain191"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300"
          >
            <span>View All Projects</span>
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;