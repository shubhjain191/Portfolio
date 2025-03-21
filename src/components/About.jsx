import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title animate-fade-in-up text-4xl font-bold tracking-tight ease-in-out duration-500">
            About Me
          </h2>
          <p 
            className="section-subtitle animate-fade-in-up mt-2 text-lg max-w-2xl mx-auto ease-in-out duration-500" 
            style={{ animationDelay: '0.1s' }}
          >
            I am a passionate Full Stack Developer & AI Enthusiast
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Who I Am Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group max-w-3xl mx-auto">
              <div className="absolute -inset-2  rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity ease-in-out duration-300"></div>
              <div className="glass-panel p-6 md:p-8 relative shadow-lg transform transition-all ease-in-out duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                <h3 className="text-2xl font-semibold mb-4 border-b-2 border-primary/20 pb-2 inline-block transition-all ease-in-out duration-300 group-hover:text-primary">
                  Who I Am
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed transition-all ease-in-out duration-300">
                  I am a dedicated Full Stack Developer currently pursuing my Master's in Network Infrastructure Management Systems at VJTI, Mumbai. With a robust foundation in computer science and extensive hands-on experience with modern web technologies, I specialize in designing and deploying scalable applications that integrate robust backend systems with intuitive, user-centric front-end interfaces. My recent projects emphasize AI integration and machine learning implementation within web applications, driving the development of intelligent, responsive, and high-performance digital solutions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div 
              className="service-card animate-fade-in-up bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all ease-in-out duration-300 transform hover:-translate-y-2" 
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto transition-transform ease-in-out duration-300 group-hover:scale-110">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center transition-colors ease-in-out duration-300 hover:text-primary">
                Frontend
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                Creating responsive, accessible, and performant web interfaces with modern frameworks.
              </p>
            </div>
            
            <div 
              className="service-card animate-fade-in-up bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all ease-in-out duration-300 transform hover:-translate-y-2" 
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto transition-transform ease-in-out duration-300 group-hover:scale-110">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center transition-colors ease-in-out duration-300 hover:text-primary">
                Backend
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                Building robust server-side applications and APIs that power seamless experiences.
              </p>
            </div>
            
            <div 
              className="service-card animate-fade-in-up bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all ease-in-out duration-300 transform hover:-translate-y-2" 
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto transition-transform ease-in-out duration-300 group-hover:scale-110">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center transition-colors ease-in-out duration-300 hover:text-primary">
                Database
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                Designing and optimizing database structures for efficient data management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;