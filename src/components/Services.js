import React from 'react';

const Services = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", link: "#" },
        { name: "Python", link: "#" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "Deep Learning", link: "#" },
        { name: "Computer Vision", link: "#" },
        { name: "NLP", link: "#" },
        { name: "Signal Processing", link: "#" },
        { name: "RAG", link: "#" }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "TensorFlow", link: "#" },
        { name: "PyTorch", link: "#" },
        { name: "OpenCV", link: "#" },
        { name: "NumPy", link: "#" },
        { name: "Pandas", link: "#" },
        { name: "Scikit-learn", link: "#" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", link: "#" },
        { name: "Node.js", link: "#" },
        { name: "Express.js", link: "#" },
        { name: "MongoDB", link: "#" },
        { name: "REST APIs", link: "#" }
      ]
    },
    {
      title: "Cloud & Databases",
      skills: [
        { name: "AWS (S3, Rekognition, KMS)", link: "#" },
        { name: "Google Cloud", link: "#" },
        { name: "Firebase", link: "#" },
        { name: "SQL", link: "#" },
        { name: "MongoDB", link: "#" }
      ]
    },
    {
      title: "Specialized Skills",
      skills: [
        { name: "Brain-Computer Interfaces", link: "#" },
        { name: "EEG Signal Processing", link: "#" },
        { name: "Wavelets", link: "#" },
        { name: "3D Vision", link: "#" },
        { name: "Option Trading", link: "#" },
        { name: "Docker", link: "#" }
      ]
    }
  ];

  return (
    <section id="services" className="py-40 px-[12%] bg-bg-primary">
      <h2 className="text-[8rem] text-center mb-20 text-white">
        Technical Skills
      </h2>
      <h5 className="text-3xl text-center mb-20 text-accent">
        Expertise across AI/ML, Web Development, and Advanced Technologies
      </h5>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-accent h-auto min-h-[300px] rounded-[3rem] border-[5px] border-transparent cursor-pointer transition-all duration-400 ease-in-out hover:bg-white hover:text-black hover:border-accent hover:scale-105 p-8">
            <div className="flex flex-col text-left justify-start items-start">
              <h4 className="text-3xl font-extrabold leading-8 mb-6 text-black">
                {category.title}
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-black text-accent px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
