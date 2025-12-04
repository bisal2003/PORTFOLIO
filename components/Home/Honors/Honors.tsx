import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function Honors() {
  const [selectedHonor, setSelectedHonor] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
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

          if (currentScroll >= maxScroll - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
          }
        }
      }, 10000);
    };

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

  const honors = [
    {
      title: "Winner - Neurathon 2025",
      organization: "Machine Learning Club, NIT Silchar",
      date: "Mar 2025",
      type: "🏆 Competition Winner",
      icon: "🥇",
      image: "/honors/neurathon-2025.png",
      gallery: [
        "/honors/neurathon-ceremony-1.png",
        "/honors/neurathon-ceremony-2.png",
        "/honors/neurathon-ceremony-3.png",
      ],
      description: "Won the Neurathon 2025, NIT Silchar's flagship AI/ML hackathon. Demonstrated exceptional skills in machine learning, neural networks, and innovative problem-solving.",
      detailedDescription: "Neurathon 2025 was NIT Silchar's flagship AI/ML hackathon where participants competed to solve real-world problems using cutting-edge machine learning techniques. Our project focused on developing an advanced neural network architecture that achieved state-of-the-art results. The competition involved rigorous evaluation rounds including technical presentations, code reviews, and live demonstrations.",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "AI"],
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/50",
      achievements: [
        "Developed innovative ML model with 95% accuracy",
        "Presented solution to panel of industry experts",
        "Competed against 100+ teams from various institutions",
      ],
    },
    {
      title: "Finalist - Google Cloud Agentic AI Day 2025",
      organization: "Google Cloud × Hack2Skill",
      date: "Jul 2025",
      type: "🎯 National Finalist",
      icon: "🚀",
      image: "/honors/google-agentic-ai.png",
      gallery: [
        "/honors/google-event-1.png",
        "/honors/google-event-2.png",
        "/honors/google-event-3.png",
      ],
      description: "Recognized as a finalist at Google Cloud Agentic AI Day 2025. Completed a rigorous 30-hour in-person challenge focused on building next-generation Agentic AI systems.",
      detailedDescription: "Google Cloud Agentic AI Day 2025 was a prestigious national-level event powered by Hack2Skill. The 30-hour in-person challenge tested our ability to build autonomous AI agents using Google Cloud Platform. We worked on creating intelligent systems that can make decisions, learn from interactions, and adapt to changing environments. The event brought together the brightest minds in AI/ML from across the country.",
      skills: ["Agentic AI", "Google Cloud", "AI Systems", "Innovation"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/50",
      achievements: [
        "Built autonomous AI agent system using GCP",
        "30-hour intensive hackathon challenge",
        "Selected among top finalists nationally",
        "Mentored by Google Cloud experts",
      ],
    },
    {
      title: "Semi-Finalist - Amazon HackOn Season 5 (Top 0.76%)",
      organization: "Amazon × Unstop",
      date: "2025",
      type: "🎖️ Top 130/50,000+",
      icon: "⚡",
      image: "/honors/amazon-hackon.png",
      gallery: [
        "/honors/amazon-team-1.png",
        "/honors/amazon-team-2.png",
        "greenx.gif",
      ],
      description: "Team 0101 reached semi-finals among 50,000+ participants (Top 130 teams - 0.76%). Built 'Amazon GreenX' - an AI + Blockchain ecosystem for sustainable e-commerce.",
      detailedDescription: "Amazon HackOn Season 5 was one of India's largest hackathons with 50,000+ participants. Team 0101 from NIT Silchar built Amazon GreenX - a comprehensive AI + Blockchain ecosystem for sustainable e-commerce. The solution features an Advanced Recommendation System using LLMs, AI-powered Grading System (GreenScore™), blockchain-based supply chain traceability, 3D vision packaging optimizer, and real-time carbon footprint tracking with gamified rewards. We cleared multiple rigorous rounds including DSA coding challenges, CS fundamentals MCQs, and SQL assessments.",
      skills: ["AI/ML", "Blockchain", "LLM", "Full-Stack", "AWS"],
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/50",
      links: [
        { label: "Live Demo", url: "https://amazon-green-x.vercel.app/" },
        { label: "GitHub", url: "https://github.com/bisal2003/Amazon-GreenX" },
      ],
      achievements: [
        "Top 130 teams out of 50,000+ participants (0.76%)",
        "Built full-stack AI + Blockchain platform",
        "Implemented Advanced Recommendation System with LLMs",
        "Created GreenScore™ AI Grading System",
        "Developed blockchain-based supply chain traceability",
      ],
    },
    {
      title: "1st Position - Fire Surveillance Drone Design Competition",
      organization: "IEEE Robotics & Automation Society, Silchar",
      date: "Apr 2025",
      type: "🥇 Competition Winner",
      icon: "🛸",
      image: "/honors/ieee-drone.png",
      gallery: [
        "/honors/ieee-ceremony-1.png",
        "/honors/ieee-ceremony-2.png",
        "/honors/ieee-ceremony-3.png",
      ],
      description: "Secured 1st position in the Concept Design Competition for designing an innovative Fire Surveillance Drone.",
      detailedDescription: "IEEE Robotics & Automation Society's Fire Surveillance Drone Design Competition challenged participants to create innovative solutions for emergency fire detection and monitoring. Our winning design featured autonomous navigation, thermal imaging, real-time video streaming, GPS tracking, and IoT integration for immediate emergency response. The drone concept included advanced features like multi-sensor fusion, AI-based fire detection, and automated alert systems to first responders.",
      skills: ["Drone Technology", "IoT", "Robotics", "Automation"],
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/50",
      achievements: [
        "Designed autonomous fire surveillance system",
        "Integrated thermal imaging and real-time monitoring",
        "Developed IoT-based emergency alert system",
        "Presented to IEEE panel and industry experts",
      ],
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
            <span className="text-AAsecondary font-sans text-base sm:text-lg mx-3">04.</span>
            <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl">
              Honors & Awards
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full ml-4 hidden md:block"></div>
        </div>
      </section>

      {/* Honors Slider */}
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
          {honors.map((honor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedHonor(index)}
              className={`flex-none w-96 bg-gradient-to-br ${honor.color} backdrop-blur-sm border ${honor.borderColor} rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              {/* Award Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900/50">
                <img
                  src={honor.image}
                  alt={honor.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23112240'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='%2364ffda'%3E${honor.icon}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-AAprimary via-transparent to-transparent opacity-70"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 text-5xl backdrop-blur-sm bg-AAprimary/30 rounded-full p-3 border border-AAsecondary/30">
                  {honor.icon}
                </div>

                {/* Click Badge */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold px-4 py-2 bg-AAsecondary text-AAprimary rounded-full shadow-lg">
                    View Details →
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="inline-block mb-3">
                  <span className="text-xs font-semibold px-3 py-1.5 bg-AAsecondary/10 border border-AAsecondary text-AAsecondary rounded-full">
                    {honor.type}
                  </span>
                </div>

                <h3 className="text-gray-100 font-bold text-lg mb-2 leading-tight group-hover:text-AAsecondary transition-colors line-clamp-2">
                  {honor.title}
                </h3>

                <p className="text-gray-300 text-sm mb-1 font-medium">{honor.organization}</p>
                <p className="text-gray-400 text-sm mb-3">{honor.date}</p>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {honor.description}
                </p>
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
        ← Swipe to see more awards →
      </p>

      {/* Modal for Detailed View */}
      {selectedHonor !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedHonor(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className={`relative bg-gradient-to-br ${honors[selectedHonor].color} border ${honors[selectedHonor].borderColor} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-AAsecondary scrollbar-track-gray-800`}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedHonor(null)}
                  className="sticky top-4 right-4 float-right z-10 bg-AAprimary/90 hover:bg-AAsecondary text-AAsecondary hover:text-AAprimary border border-AAsecondary rounded-full p-3 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 pb-4">
                  {honors[selectedHonor].gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative h-48 rounded-lg overflow-hidden border border-gray-700 group"
                    >
                      <img
                        src={img}
                        alt={`${honors[selectedHonor].title} - Photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23112240'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%2364ffda'%3EPhoto ${idx + 1}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Details Section */}
                <div className="p-6 pt-2 space-y-6">
                  {/* Header */}
                  <div>
                    <div className="inline-block mb-3">
                      <span className="text-sm font-semibold px-4 py-2 bg-AAsecondary/10 border border-AAsecondary text-AAsecondary rounded-full">
                        {honors[selectedHonor].type}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-100 mb-2">
                      {honors[selectedHonor].title}
                    </h2>
                    <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-sm">
                      <p className="text-gray-300 font-medium">{honors[selectedHonor].organization}</p>
                      <p className="text-gray-400">{honors[selectedHonor].date}</p>
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <h3 className="text-xl font-bold text-AAsecondary mb-3">About This Achievement</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {honors[selectedHonor].detailedDescription}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h3 className="text-xl font-bold text-AAsecondary mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {honors[selectedHonor].achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <span className="text-AAsecondary mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-xl font-bold text-AAsecondary mb-3">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {honors[selectedHonor].skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-AAprimary/50 border border-gray-600 text-gray-300 rounded-full text-sm hover:border-AAsecondary hover:text-AAsecondary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links (if any) */}
                  {honors[selectedHonor].links && (
                    <div className="flex gap-4 pt-4 border-t border-gray-700">
                      {honors[selectedHonor].links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-AAsecondary/10 border-2 border-AAsecondary text-AAsecondary rounded-lg hover:bg-AAsecondary hover:text-AAprimary transition-all duration-300 font-semibold"
                        >
                          {link.label}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
        )}

      {/* Achievement Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-AAsecondary mb-2">4+</div>
          <div className="text-sm text-gray-400">Major Awards</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-AAsecondary mb-2">2</div>
          <div className="text-sm text-gray-400">National Finals</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-AAsecondary mb-2">Top 0.76%</div>
          <div className="text-sm text-gray-400">Amazon HackOn</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-AAsecondary mb-2">2</div>
          <div className="text-sm text-gray-400">1st Positions</div>
        </div>
      </div>
    </div>
  );
}
