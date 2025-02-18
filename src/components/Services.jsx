import React from 'react';
import { Code, Server, Database, Zap, Layout, BarChart } from 'lucide-react';

const ServicesOffered = () => {
  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development using the MERN stack (MongoDB, Express.js, React.js, Node.js) with focus on responsive design and performance optimization.",
      icon: <Code className="h-5 w-5 sm:h-6 sm:w-6" />,
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Authentication & Payment Integration",
      description: "Implementation of secure authentication systems using JWT or Clerk, and seamless payment processing with Stripe and Razorpay integration.",
      icon: <Server className="h-6 w-6" />,
      skills: ["JWT", "Clerk Authentication", "Stripe", "Razorpay", "Security Protocols"]
    },
    {
      title: "API Development",
      description: "Design and implementation of RESTful APIs with proper documentation, versioning, and security measures to ensure reliable data exchange.",
      icon: <Database className="h-6 w-6" />,
      skills: ["RESTful API Design", "Express.js", "API Documentation", "Data Modeling"]
    },
    {
      title: "AI & Machine Learning Integration",
      description: "Integration of AI capabilities like pose estimation and intelligent feedback systems using MediaPipe, BiLSTM models, and Cohere for enhanced user experiences.",
      icon: <Zap className="h-6 w-6" />,
      skills: ["MediaPipe", "Deep Learning", "BiLSTM", "Cohere", "Python"]
    },
    {
      title: "Application Architecture",
      description: "Design of scalable and maintainable application architectures with proper separation of concerns, database modeling, and deployment strategies.",
      icon: <Layout className="h-6 w-6" />,
      skills: ["System Design", "MongoDB Atlas", "Vercel", "Firebase", "Git"]
    },
    {
      title: "Dashboard & Analytics",
      description: "Creation of custom analytics dashboards that track user engagement, performance metrics, and business insights for data-driven decision making.",
      icon: <BarChart className="h-6 w-6" />,
      skills: ["Data Visualization", "Performance Metrics", "User Analytics", "Reporting"]
    }
  ];

  return (
    <div id="services" className="py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Services Offered
          </h2>
          <p className="mt-2 sm:mt-3 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-500">
            Leveraging modern tech stacks to build robust web applications and systems
          </p>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-4 sm:p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-2 sm:p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  {service.icon}
                </span>
              </div>
              <div className="mt-4 sm:mt-6">
                <h3 className="text-sm sm:text-base md:text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-500 line-clamp-3">{service.description}</p>
              </div>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                {service.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffered;