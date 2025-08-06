import React from 'react';
import { FaStar, FaGithub, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';

const Testimonials = () => {
  const projects = [
    {
      title: "CALL.E - AI Bulk Calling Agent",
      subtitle: "🏆 Neurathon Winner",
      tech: "Llama-3.3-70B, RAG, WandB Tool",
      date: "Feb 2025",
      description: "Built AI caller using TTS/STT with RAG for personalized responses, working parallel pipelines and reduced latency by 45%",
      github: "https://github.com/bisal2003",
      achievement: "Winner",
      stars: 5
    },
    {
      title: "Project Kisan - Agentic AI",
      subtitle: "🏆 Google Cloud Agentic AI Day Finalist",
      tech: "Google Cloud (Vertex AI, Cloud Run, BigQuery ML), Gemini Vision",
      date: "July 2025",
      description: "Ranked among TOP 50 student teams in India. Built an agentic AI ecosystem offering multimodal crop disease diagnosis, real-time mandi price forecasts, and adaptive crop calendars. Reduced yield loss by 40%",
      link: "#",
      achievement: "Top 50 National Finalist",
      stars: 5
    },
    {
      title: "Amazon GreenX",
      subtitle: "🏆 Amazon HackOn 5 Semifinalist",
      tech: "React.js, AWS(KMS,S3,Rekognition), CV, NLP",
      date: "June 2025",
      description: "Developed sustainable e-commerce with carbon scoring via image recognition and 3D CV optimization for Packaging assistance (35% less waste), an end-to-end ecosystem",
      github: "https://github.com/bisal2003",
      achievement: "Semifinalist",
      stars: 5
    },
    {
      title: "AI Debate Partner Platform",
      subtitle: "Intelligent Reasoning System",
      tech: "NLP, Reasoning, Real-Time AI",
      date: "Feb 2025",
      description: "Created debate AI with 90% logical accuracy and 30% improved response times",
      github: "https://github.com/bisal2003",
      stars: 4
    },
    {
      title: "Secure Bank Management System",
      subtitle: "Enterprise Security Solution",
      tech: "C++, OOP, File Security",
      date: "Mar 2024",
      description: "Encrypted account system with modular OOP design for scalable development",
      github: "https://github.com/bisal2003",
      stars: 4
    }
  ];

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, index) => (
      <FaStar key={index} className="text-yellow-400 text-2xl" />
    ));
  };

  return (
    <section id="testimonials" className="py-40 px-[12%] bg-bg-primary">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-[8rem] text-center mb-8 text-white">Key Projects & Hackathons</h2>
        <p className="text-3xl text-center mb-20 text-accent">Award-winning projects and innovative solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1400px]">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-black/70 border-4 border-gray-300/20 rounded-[2rem] p-8 cursor-pointer flex flex-col justify-between text-white transition-all duration-400 ease-in-out hover:border-accent hover:-translate-y-4 hover:scale-105 hover:shadow-[0_0_50px_#00ffee] min-h-[600px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent font-bold text-lg">{project.date}</span>
                  {project.achievement && (
                    <div className="flex items-center gap-2 bg-accent text-black px-3 py-1 rounded-full text-sm font-bold">
                      <FaTrophy />
                      {project.achievement}
                    </div>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold mb-2 text-accent">
                  {project.title}
                </h3>
                
                <h4 className="text-lg font-medium mb-4 text-gray-300">
                  {project.subtitle}
                </h4>
                
                <div className="bg-gray-800 rounded-lg p-3 mb-4">
                  <p className="text-sm text-accent font-medium">Tech Stack:</p>
                  <p className="text-sm text-white">{project.tech}</p>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {renderStars(project.stars)}
                </div>
                
                <p className="text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-full font-medium hover:bg-white transition-colors duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-accent text-accent px-4 py-2 rounded-full font-medium hover:bg-accent hover:text-black transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
