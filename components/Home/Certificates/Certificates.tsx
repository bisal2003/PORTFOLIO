import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function Certificates() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          const currentScroll = scrollContainer.scrollLeft;

          // If reached the end, scroll back to start
          if (currentScroll >= maxScroll - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollContainer.scrollBy({ left: 400, behavior: "smooth" });
          }
        }
      }, 1000); // Auto-scroll every 3 seconds
    };

    // Pause auto-scroll on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      organization: "Oracle",
      issued: "Oct 2025",
      credentialId: "102931716OCI25DSOCP",
      image: "/certificates/oracle-data-science.png",
      skills: ["Data Science", "Machine Learning", "Cloud Computing", "OCI", "Oracle Database", "Python"],
      description: "Official certificate awarded by Oracle University upon successful completion of the Oracle Cloud Infrastructure 2025 Certified Data Science Professional exam. This certification validates proficiency in data science, machine learning, and cloud-based model deployment using Oracle Cloud Infrastructure (OCI).",
    },
    {
      title: "Deloitte Australia - Cyber Job Simulation",
      organization: "Forage",
      issued: "Aug 2025",
      credentialId: "TFxQyDEhYB5xZ8Tb4",
      image: "/certificates/deloitte-cyber.png",
      skills: ["Cybersecurity", "Risk Assessment", "Digital Defense"],
      description: "Completed the Deloitte Cyber Job Simulation on Forage, where I gained experience in cybersecurity fundamentals, risk assessment, and digital defense strategies. This program enhanced my understanding of how Deloitte approaches cybersecurity challenges for clients globally.",
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      organization: "Forage",
      issued: "Aug 2025",
      credentialId: "2HTLHoDR9iwPHRh8Y",
      image: "/certificates/deloitte-data-analytics.png",
      skills: ["Data Analysis", "Tableau", "Excel", "Forensic Technology"],
      description: "Completed the Deloitte Data Analytics Job Simulation on Forage, performing hands-on tasks in data analysis, forensic technology, and insights generation. Created a data dashboard using Tableau and used Excel to classify data and draw business conclusions.",
    },
    {
      title: "Deloitte Australia - Technology Job Simulation",
      organization: "Forage",
      issued: "Aug 2025",
      credentialId: "Bt28tSn4vYeMSdXYE",
      image: "/certificates/deloitte-technology.png",
      skills: ["Software Development", "Problem Solving", "Technology Consulting"],
      description: "Completed the Deloitte Technology Job Simulation on Forage, gaining practical experience in coding, software development, and technology consulting workflows. This simulation provided insight into real-world challenges handled by Deloitte's technology team.",
    },
    {
      title: "Google Cloud's Agentic AI Day - Finalist",
      organization: "Google",
      issued: "Jul 2025",
      credentialId: "2025H2S06AID-F00001",
      image: "/certificates/google-agentic-ai.png",
      skills: ["Machine Learning", "AI", "Cloud Firestore", "Full-Stack Development"],
      description: "Recognized as a finalist at Google Cloud's Agentic AI Day, demonstrating proficiency in building AI-powered applications using Google Cloud Platform.",
    },
    {
      title: "Concept Design Competition: Fire Surveillance Drone - 1st Position",
      organization: "IEEE Robotics & Automation Society, Silchar",
      issued: "Apr 2025",
      credentialId: "",
      image: "/certificates/ieee-fire-drone.png",
      skills: ["Drone Mapping", "Drone Building", "IoT"],
      description: "Secured 1st position in the Concept Design Competition for designing a Fire Surveillance Drone, demonstrating innovation in robotics and automation.",
    },
    {
      title: "Full Stack Web Development MASTERY Course",
      organization: "Udemy",
      issued: "Feb 2025",
      credentialId: "UC-13151ebb-cf4e-4876-94d8-f14506389238",
      image: "/certificates/udemy-fullstack.png",
      skills: ["React.js", "JavaScript", "MongoDB", "HTML", "CSS"],
      description: "Completed comprehensive full-stack web development course covering modern web technologies and best practices.",
    },
    {
      title: "NEURATHON 2025",
      organization: "NIT SILCHAR",
      issued: "Mar 2025",
      credentialId: "Team-0101",
      image: "/certificates/neu.png",
      skills: ["React.js", "JavaScript", "MongoDB", "HTML", "CSS"],
      description: "Completed comprehensive full-stack web development course covering modern web technologies and best practices.",
    },
    {
      title: "One Week Bootcamp on Drone Technology and Application",
      organization: "Jet Aerospace - Global Drone Hub",
      issued: "Feb 2025",
      credentialId: "",
      image: "/certificates/drone-bootcamp.png",
      skills: ["Drone Mapping", "Drone Building", "Entrepreneurship"],
      description: "Participated in a one-week skill development & entrepreneurship program focused on drone technology and its applications.",
    },
    {
      title: "Certificate of Achievement – Solution Challenge",
      organization: "Google Developer Groups On Campus",
      issued: "Jan 2025",
      credentialId: "2025H2S0IGSC-102586",
      image: "/certificates/gdg-solution-challenge.png",
      skills: ["AI", "Problem Solving", "Full-Stack Development", "Design Thinking"],
      description: "Recognized for outstanding performance in the Solution Challenge, demonstrating creativity, innovation, and technical excellence.",
    },
    {
      title: "Machine Learning Specialization",
      organization: "DeepLearning.AI, Coursera, Stanford",
      issued: "Dec 2024",
      credentialId: "",
      image: "/certificates/ml-specialization.png",
      skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
      description: "Completed the Machine Learning Specialization from Stanford University via Coursera, covering supervised learning, unsupervised learning, and best practices in machine learning.",
    },
    {
      title: "Neural Networks and Deep Learning",
      organization: "DeepLearning.AI, Coursera",
      issued: "Dec 2024",
      credentialId: "",
      image: "/certificates/neural-networks.png",
      skills: ["Neural Networks", "Deep Learning", "TensorFlow"],
      description: "Gained foundational understanding of neural networks, including deep learning concepts and their applications.",
    },
    {
      title: "FLY-Scholar (Finding the Leader in You)",
      organization: "Competitiveness Mindset Institute (CMI)",
      issued: "Oct 2024",
      credentialId: "820787678",
      image: "/certificates/fly-scholar.png",
      skills: ["Team Leadership", "Entrepreneurship", "Problem Solving"],
      description: "Completed comprehensive training in developing critical non-cognitive skills vital for leadership and personal growth, including conscientiousness, innovativeness, initiative, perseverance, and problem-solving.",
    },
    {
      title: "Fundamental Course in Quantum Computing 2.0",
      organization: "Udemy",
      issued: "Mar 2024",
      credentialId: "UC-92a05d67-36ca-411d-bf36-9fb85c4981b1",
      image: "/certificates/quantum-computing.png",
      skills: ["Quantum Computing", "Quantum Physics", "Algorithms"],
      description: "Completed foundational course in quantum computing covering quantum mechanics, quantum gates, and quantum algorithms.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col space-y-8 max-w-container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20"
    >
      {/* Section Header */}
      <section className="flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center md:justify-start w-full">
          <div className="flex items-center">
            <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
            <span className="text-AAsecondary font-sans text-base sm:text-lg mx-3">05.</span>
            <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl">
              Licenses & Certifications
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full ml-4 hidden md:block"></div>
        </div>
      </section>

      {/* Certificates Slider */}
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-AAprimary border border-AAsecondary text-AAsecondary hover:bg-AAsecondary hover:text-AAprimary transition-all duration-300 rounded-full p-3 shadow-lg hidden md:block"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth px-4 md:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-80 md:w-96 bg-AAprimary border border-gray-600 rounded-lg p-6 hover:border-AAsecondary transition-all duration-300 hover:shadow-xl group"
            >
              {/* Certificate Image */}
              <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23112240'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%2364ffda'%3ECertificate%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Certificate Details */}
              <div className="space-y-3">
                <h3 className="text-gray-200 font-bold text-lg leading-tight line-clamp-2 group-hover:text-AAsecondary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-gray-400 text-sm font-medium">{cert.organization}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Issued: {cert.issued}</span>
                </div>

                {cert.credentialId && (
                  <p className="text-xs text-gray-500">
                    Credential ID: <span className="text-AAsecondary">{cert.credentialId}</span>
                  </p>
                )}

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.slice(0, 4).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-AAprimary border border-AAsecondary text-AAsecondary rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="text-xs px-2 py-1 text-gray-500">
                      +{cert.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-AAprimary border border-AAsecondary text-AAsecondary hover:bg-AAsecondary hover:text-AAprimary transition-all duration-300 rounded-full p-3 shadow-lg hidden md:block"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile Scroll Hint */}
      <p className="text-center text-gray-500 text-sm md:hidden">
        ← Swipe to see more certificates →
      </p>
    </div>
  );
}
