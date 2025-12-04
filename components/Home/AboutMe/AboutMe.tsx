import React from "react";
import Image from "next/image";

export default function AboutMe() {
  const technologies = [
    ["C++", "Python", "Verilog", "JavaScript", "MongoDB"],
    ["TensorFlow/PyTorch", "React.js/Node.js", "AWS/Google Cloud", "Docker", "OpenCV"],
  ];

  return (
    <section className="w-full bg-[#0a192f] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[#64ffda] font-mono text-xl">01.</span>
          <h2 className="text-3xl font-bold text-gray-200">About Me</h2>
          <div className="flex-grow h-[1px] bg-gray-600 ml-4"></div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Text Content */}
          <div className="md:w-2/3 space-y-6 text-gray-400">
            <p className="text-lg">
              Hello! My name is Bisal, and I&apos;m a passionate{" "}
              <span className="text-[#64ffda]">Electronics and Communication Engineering student</span> at{" "}
              <span className="text-[#64ffda]">NIT Silchar</span> with a strong focus on AI/ML and software development.
              My journey began with a fascination for how machines can learn and make intelligent decisions,
              which led me to dive deep into{" "}
              <span className="text-[#64ffda]">Machine Learning, Deep Learning, and Computer Vision</span>.
            </p>
            
            <p className="text-lg">
              Beyond academics, I&apos;m an avid hackathon participant and winner, having built innovative solutions
              like an{" "}
              <span className="text-[#64ffda]">AI bulk calling agent</span> (Neurathon Winner), and led teams to
              become{" "}
              <span className="text-[#64ffda]">finalists in Google Cloud Agentic AI Day</span> (Top 50 in India) and{" "}
              <span className="text-[#64ffda]">Amazon HackOn Season 5</span> (Top 130 teams). My research internship
              involved working with{" "}
              <span className="text-[#64ffda]">122-channel EEG data</span> for Brain-Computer Interfaces,
              achieving 90%+ classification accuracy.
            </p>

            <p className="text-lg mb-8">
              I believe in creating technology that solves real-world problems. With a{" "}
              <span className="text-[#64ffda]">9.0 CGPA</span> and hands-on experience in both research and
              industry, I&apos;m constantly exploring the intersection of AI, hardware, and software.
              Here are some of the technologies I&apos;ve been working with:
            </p>

            {/* Technologies Grid */}
            <div className="grid grid-cols-2 gap-4 font-mono">
              {technologies.map((columnTechs, colIndex) => (
                <ul key={colIndex} className="space-y-2">
                  {columnTechs.map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#64ffda]">▹</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Image Container */}
          <div className="md:w-1/3 relative group">
            <div className="relative w-full max-w-[300px] mx-auto">
              {/* Border Frame */}
              <div className="absolute inset-0 border-2 border-[#64ffda] translate-x-5 translate-y-5 
                            transition-transform duration-300 group-hover:translate-x-3 
                            group-hover:translate-y-3 rounded"></div>
              
              {/* Image Wrapper */}
              <div className="relative rounded overflow-hidden aspect-square">
                <Image
                  src="/images/sky.jpg"
                  alt="Profile Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded transition-opacity duration-300 group-hover:opacity-80"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#64ffda] opacity-20 transition-opacity 
                              duration-300 group-hover:opacity-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}