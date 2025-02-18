import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationTimeline = () => {
  const educationData = [
    {
      degree: "Master of Technology",
      field: "Computer Science and Engineering",
      institution: "Veermata Jijabai Technological Institute (VJTI)",
      location: "Mumbai, India",
      duration: "Aug. 2023 – Present",
      achievements: ["Pursuing advanced studies in Network Infrastructure Management System", "Focusing on modern network technologies and security systems"],
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "MET Bhujbal Knowledge City",
      location: "Nashik, India",
      duration: "Aug. 2018 – May 2022",
      achievements: ["Achieved CGPA: 8.37/10.0", "Developed strong foundation in Computer Engineering principles"],
      icon: <BookOpen className="h-8 w-8" />
    },
    {
      degree: "12th Standard (Higher Secondary)",
      field: "Science",
      institution: "ASC College",
      location: "Chopda, India", 
      duration: "2017 – 2018",
      achievements: ["Focused on Physics, Chemistry, Mathematics, and Biology"],
      icon: <Award className="h-8 w-8" />
    },
    {
      degree: "10th Standard (Secondary School)",
      field: "General Education",
      institution: "Clara English Medium School",
      location: "Chopda, India",
      duration: "2015 – 2016",
      achievements: ["Developed strong foundation in mathematics and sciences", "Participated in extracurricular activities and competitions"],
      icon: <Award className="h-8 w-8" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-400"
        >
          Education Timeline
        </motion.h2>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline center line - hidden on mobile */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-200 hidden md:block"
          />
          
          {educationData.map((education, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`mb-8 sm:mb-12 relative ${
                index % 2 === 0 
                  ? 'md:ml-auto md:mr-10 md:pl-10 mx-4 sm:mx-6' 
                  : 'md:mr-auto md:ml-10 md:pr-10 mx-4 sm:mx-6'
              } md:w-[calc(50%-2.5rem)] w-full`}
            >
              {/* Connect line - visible only on desktop */}
              <div className={`hidden md:block absolute top-8 ${
                index % 2 === 0 ? 'left-0 right-auto w-10' : 'left-auto right-0 w-10'
              } h-0.5 bg-blue-200`}/>

              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)" }}
                transition={{ type: "spring", stiffness: 100 }}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300"
              >
                {/* Header section with date and location */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-sm gap-2">
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                </div>

                {/* Main content section */}
                <div className="flex items-start gap-4">
                  {/* Icon - hidden on mobile */}
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex-shrink-0"
                  >
                    {education.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    {/* Degree title with responsive text size */}
                    <motion.h3 
                      whileHover={{ x: 3 }}
                      className="text-lg sm:text-xl font-bold text-gray-900 mb-1"
                    >
                      {education.degree}
                    </motion.h3>
                    
                    {/* Field and institution info */}
                    <p className="text-blue-600 font-medium mb-1 text-sm sm:text-base">
                      {education.field}
                    </p>
                    <p className="text-blue-800 mb-4 text-sm sm:text-base">
                      {education.institution}
                    </p>

                    {/* Achievements list */}
                    <motion.ul 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                      className="space-y-2"
                    >
                      {education.achievements.map((achievement, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5, color: "#2563eb" }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm"
                        >
                          <Award className="h-4 w-4 text-blue-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Current education tag */}
                    {index === 0 && (
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          delay: 0.5 
                        }}
                        className="mt-4"
                      >
                        <motion.span 
                          animate={{ 
                            boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.4)", "0 0 0 10px rgba(59, 130, 246, 0)", "0 0 0 0 rgba(59, 130, 246, 0)"]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity
                          }}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        >
                          Current
                        </motion.span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationTimeline;