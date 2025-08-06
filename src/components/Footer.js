import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#services" },
    { name: "Projects", href: "#testimonials" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bottom-0 w-full py-16 bg-bg-secondary">
      <div className="text-center pb-10">
        <a 
          href="https://linkedin.com/in/bisal-prasad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-accent border-2 border-accent w-[50px] h-[50px] leading-[46px] inline-block text-center rounded-full mx-4 transition-all duration-300 hover:scale-125 hover:-translate-y-4 hover:bg-accent hover:text-black hover:shadow-[0_0_25px_#00ffee]"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/bisal2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-accent border-2 border-accent w-[50px] h-[50px] leading-[46px] inline-block text-center rounded-full mx-4 transition-all duration-300 hover:scale-125 hover:-translate-y-4 hover:bg-accent hover:text-black hover:shadow-[0_0_25px_#00ffee]"
        >
          <FaGithub />
        </a>
        <a 
          href="https://leetcode.com/Bisal2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-accent border-2 border-accent w-[50px] h-[50px] leading-[46px] inline-block text-center rounded-full mx-4 transition-all duration-300 hover:scale-125 hover:-translate-y-4 hover:bg-accent hover:text-black hover:shadow-[0_0_25px_#00ffee]"
        >
          <SiLeetcode />
        </a>
        <a 
          href="mailto:bisalprasad2003@gmail.com"
          className="text-4xl text-accent border-2 border-accent w-[50px] h-[50px] leading-[46px] inline-block text-center rounded-full mx-4 transition-all duration-300 hover:scale-125 hover:-translate-y-4 hover:bg-accent hover:text-black hover:shadow-[0_0_25px_#00ffee]"
        >
          <FaEnvelope />
        </a>
      </div>

      <ul className="mt-0 p-0 text-2xl leading-relaxed mb-0 text-center">
        {footerLinks.map((link, index) => (
          <li key={index} className="inline-block px-4">
            <a 
              href={link.href}
              className="text-white border-b-4 border-transparent transition-all duration-300 ease-in-out hover:border-accent hover:text-accent"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="text-center mt-12 space-y-2">
        <p className="text-2xl text-white font-bold">
          © 2025 BISAL PRASAD | All Rights Reserved
        </p>
        <p className="text-lg text-accent">
          AI/ML Engineer • B.Tech ECE, NIT Silchar • CGPA: 9.0/10
        </p>
        <p className="text-base text-gray-300">
          Passionate about Brain-Computer Interfaces, Sustainable AI & Innovation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
