import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern - Advanced BCI Signal Processing",
      company: "National Institute of Technology, Silchar",
      location: "Silchar, India",
      period: "May 2025 – Jul 2025",
      description: [
        "Developed Brain-Computer Interface (BCI) using 122-channel EEG data; applied Wavelet Transform and Deep Learning achieving 90%+ classification accuracy.",
        "Engineered neural decoding pipeline for Thought-to-Speech conversion enabling real-time BCI feedback."
      ],
      links: [
        { type: "link", url: "#", label: "Project Link" },
        { type: "github", url: "#", label: "GitHub" }
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Academor Edtech",
      location: "Remote",
      period: "Jun 2024 – Jul 2024",
      description: [
        "Built Loan Prediction Model with parameter tuning improving accuracy by 15%.",
        "Implemented sentiment analysis achieving 98% accuracy using optimized NLP pipeline."
      ],
      links: [
        { type: "link", url: "#", label: "Company Link" }
      ]
    }
  ];

  return (
    <section id="experience" className="py-40 px-[12%] bg-bg-secondary">
      <h2 className="text-[8rem] text-center mb-20 text-white">Work Experience</h2>
      
      <div className="max-w-[1200px] mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 bg-bg-primary border-4 border-accent rounded-[3rem] p-12 hover:scale-105 hover:shadow-[0_0_25px_#00ffee] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-4xl font-bold text-accent mb-2">{exp.title}</h3>
                <h4 className="text-2xl text-white font-medium">{exp.company}</h4>
                <p className="text-xl text-gray-300">{exp.location}</p>
              </div>
              <span className="text-2xl font-bold text-accent bg-black px-6 py-2 rounded-full">
                {exp.period}
              </span>
            </div>
            
            <ul className="text-xl text-white leading-relaxed mb-6">
              {exp.description.map((item, i) => (
                <li key={i} className="mb-3 flex items-start">
                  <span className="text-accent mr-3 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex gap-4">
              {exp.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-full font-medium hover:bg-white transition-colors duration-300"
                >
                  {link.type === 'github' ? <FaGithub /> : <FaExternalLinkAlt />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
