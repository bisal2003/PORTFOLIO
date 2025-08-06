import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'services', 'testimonials', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-8 px-[12%] bg-black/30 backdrop-blur-[10px] flex justify-between items-center z-50">
      <a href="#home" className="text-5xl text-white font-extrabold cursor-pointer transition-transform duration-300 hover:scale-110">
        Bisal
        <span className="text-accent drop-shadow-[0_0_25px_#00ffee]">Prasad</span>
      </a>

      <div 
        className="text-6xl text-accent cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-black/90 lg:bg-transparent p-8 lg:p-0`}>
        <a 
          href="#home" 
          className={`block lg:inline text-2xl text-white ml-0 lg:ml-8 font-medium transition-all duration-300 border-b-[3px] py-4 lg:py-0 ${activeSection === 'home' ? 'text-accent border-accent' : 'border-transparent hover:text-accent hover:border-accent'}`}
          onClick={() => handleNavClick('home')}
        >
          Home
        </a>
        <a 
          href="#education" 
          className={`block lg:inline text-2xl text-white ml-0 lg:ml-8 font-medium transition-all duration-300 border-b-[3px] py-4 lg:py-0 ${activeSection === 'education' ? 'text-accent border-accent' : 'border-transparent hover:text-accent hover:border-accent'}`}
          onClick={() => handleNavClick('education')}
        >
          Education
        </a>
        <a 
          href="#experience" 
          className={`block lg:inline text-2xl text-white ml-0 lg:ml-8 font-medium transition-all duration-300 border-b-[3px] py-4 lg:py-0 ${activeSection === 'experience' ? 'text-accent border-accent' : 'border-transparent hover:text-accent hover:border-accent'}`}
          onClick={() => handleNavClick('experience')}
        >
          Experience
        </a>
        <a 
          href="#services" 
          className={`block lg:inline text-2xl text-white ml-0 lg:ml-8 font-medium transition-all duration-300 border-b-[3px] py-4 lg:py-0 ${activeSection === 'services' ? 'text-accent border-accent' : 'border-transparent hover:text-accent hover:border-accent'}`}
          onClick={() => handleNavClick('services')}
        >
          Skills
        </a>
        <a 
          href="#testimonials" 
          className={`block lg:inline text-2xl text-white ml-0 lg:ml-8 font-medium transition-all duration-300 border-b-[3px] py-4 lg:py-0 ${activeSection === 'testimonials' ? 'text-accent border-accent' : 'border-transparent hover:text-accent hover:border-accent'}`}
          onClick={() => handleNavClick('testimonials')}
        >
          Projects
        </a>
        <a 
          href="#achievements" 
          className={`block lg:inline text-2xl text-white ml-0 lg:ml-8 font-medium transition-all duration-300 border-b-[3px] py-4 lg:py-0 ${activeSection === 'achievements' ? 'text-accent border-accent' : 'border-transparent hover:text-accent hover:border-accent'}`}
          onClick={() => handleNavClick('achievements')}
        >
          Achievements
        </a>
        <a 
          href="#contact" 
          className={`block lg:inline text-2xl text-white ml-0 lg:ml-8 font-medium transition-all duration-300 border-b-[3px] py-4 lg:py-0 ${activeSection === 'contact' ? 'text-accent border-accent' : 'border-transparent hover:text-accent hover:border-accent'}`}
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
