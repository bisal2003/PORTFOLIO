import React from 'react';
import { FaTrophy, FaMedal, FaStar, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy className="text-6xl text-yellow-400" />,
      title: "Neurathon Winner",
      subtitle: "AI/ML Hackathon",
      year: "2025",
      description: "Won the prestigious Neurathon hackathon with CALL.E - AI Bulk Calling Agent"
    },
    {
      icon: <FaMedal className="text-6xl text-blue-400" />,
      title: "Google Cloud Agentic AI Day Finalist",
      subtitle: "National-Level Hackathon",
      year: "2025",
      description: "Ranked among TOP 50 student teams in India with Project Kisan"
    },
    {
      icon: <FaAward className="text-6xl text-orange-400" />,
      title: "Amazon HackOn Season 5 Semifinalist",
      subtitle: "Team Leader",
      year: "2025",
      description: "Led team to semifinals with Amazon GreenX sustainable e-commerce platform"
    },
    {
      icon: <FaStar className="text-6xl text-purple-400" />,
      title: "Senior Fundamental Analyst",
      subtitle: "Finance Club, NIT Silchar",
      year: "2024",
      description: "Leading financial analysis and investment strategies for the college finance club"
    },
    {
      icon: <FaMedal className="text-6xl text-green-400" />,
      title: "Academic Excellence",
      subtitle: "9.0 CGPA in B.Tech ECE",
      year: "2023-2027",
      description: "Maintaining exceptional academic performance throughout engineering"
    },
    {
      icon: <FaTrophy className="text-6xl text-red-400" />,
      title: "Coding Achievements",
      subtitle: "Competitive Programming",
      year: "Ongoing",
      description: "LeetCode: 300+ problems solved, CodeForces: Pupil level, GeeksforGeeks: 50+ problems"
    }
  ];

  return (
    <section id="achievements" className="py-40 px-[12%] bg-bg-secondary">
      <h2 className="text-[8rem] text-center mb-20 text-white">Achievements</h2>
      <p className="text-3xl text-center mb-20 text-accent">Recognition and accomplishments in technology and leadership</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="bg-black/70 border-4 border-accent rounded-[2rem] p-8 text-center cursor-pointer transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_#00ffee] hover:bg-black/90"
          >
            <div className="flex justify-center mb-6">
              {achievement.icon}
            </div>
            
            <span className="inline-block bg-accent text-black px-4 py-1 rounded-full text-lg font-bold mb-4">
              {achievement.year}
            </span>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              {achievement.title}
            </h3>
            
            <h4 className="text-xl text-accent font-medium mb-4">
              {achievement.subtitle}
            </h4>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
