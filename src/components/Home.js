import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Home = () => {
  return (
    <section id="home" className="min-h-screen py-40 px-[12%] flex items-center justify-center gap-60">
      <div className="flex flex-col items-start text-left justify-center mt-12">
        <h1 className="text-[7rem] font-bold leading-none mt-6">
          Hi, It's <span className="text-accent">Bisal</span>
        </h1>
        
        <h3 className="text-animation mt-4 mb-8">
          I'm a <span></span>
        </h3>
        
        <div className="text-2xl font-medium leading-tight max-w-[1000px]">
          <h3>
            B.Tech ECE student at NIT Silchar with 9.0 CGPA. Passionate about AI/ML, Brain-Computer Interfaces, 
            and Sustainable AI. Winner of multiple national hackathons including Neurathon and finalist in 
            Google Cloud Agentic AI Day. Experienced in Deep Learning, Computer Vision, and Full-Stack Development.
          </h3>
        </div>

        <div className="flex mt-12 mb-12">
          <a 
            href="https://linkedin.com/in/bisal-prasad" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-transparent border-2 border-accent text-4xl rounded-full text-accent mr-6 transition-all duration-300 ease-in-out hover:text-white hover:scale-[1.3] hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffee] hover:bg-accent"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/bisal2003" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-transparent border-2 border-accent text-4xl rounded-full text-accent mr-6 transition-all duration-300 ease-in-out hover:text-white hover:scale-[1.3] hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffee] hover:bg-accent"
          >
            <FaGithub />
          </a>
          <a 
            href="https://leetcode.com/Bisal2003" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-transparent border-2 border-accent text-4xl rounded-full text-accent mr-6 transition-all duration-300 ease-in-out hover:text-white hover:scale-[1.3] hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffee] hover:bg-accent"
          >
            <SiLeetcode />
          </a>
          <a 
            href="mailto:bisalprasad2003@gmail.com" 
            className="inline-flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-transparent border-2 border-accent text-4xl rounded-full text-accent mr-6 transition-all duration-300 ease-in-out hover:text-white hover:scale-[1.3] hover:-translate-y-2 hover:shadow-[0_0_25px_#00ffee] hover:bg-accent"
          >
            📧
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/bisal-prasad" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-4 px-11 bg-accent shadow-[0_0_25px_#00ffee] rounded-[4rem] text-2xl text-black border-2 border-transparent tracking-[0.1rem] font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-[0_0_50px_#00ffee]"
          >
            Hire Me
          </a>
          <a 
            href="#contact" 
            className="inline-block py-4 px-11 bg-black text-accent border-2 border-accent shadow-[0_0_25px_transparent] rounded-[4rem] text-2xl tracking-[0.1rem] font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:bg-accent hover:text-black hover:shadow-[0_0_25px_#00ffee]"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="rounded-full">
        <img 
          src="/cut.jpg" 
          alt="Bisal Prasad - AI/ML Engineer" 
          className="relative top-12 w-[32vw] rounded-full shadow-[0_0_25px_#00ffee] cursor-pointer transition-all duration-400 ease-in-out hover:shadow-[0_0_25px_#00ffee,_0_0_50px_#00ffee,_0_0_100px_#00ffee]"
        />
      </div>
    </section>
  );
};

export default Home;
