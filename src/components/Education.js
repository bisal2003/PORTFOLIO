import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: "2023-2027",
      title: "National Institute of Technology, Silchar",
      description: "B.Tech in Electronics and Communication Engineering",
      extra: "CGPA: 9.0/10\nCurrently pursuing"
    },
    {
      year: "2022-2023",
      title: "OIL INDIA SUPER-30 Dibrugarh",
      description: "Got admission by SSRP and successfully completed eleven months free coaching, and hostelling program",
      extra: "Free coaching & hostel program"
    },
    {
      year: "2015-2022",
      title: "Jawahar Navodaya Vidyalaya, Cachar",
      description: "Higher Secondary Education",
      extra: "Class XII: 90%\nClass X: 83.4%"
    }
  ];

  return (
    <section id="education" className="py-40 px-[15px] bg-bg-secondary">
      <h2 className="text-[8rem] text-center mb-20 text-white">Education</h2>
      
      <div className="max-w-[1200px] mx-auto flex flex-wrap relative">
        {/* Timeline line */}
        <div className="absolute w-[5px] h-full bg-accent left-1/2 transform -translate-x-1/2"></div>
        
        {educationData.map((item, index) => (
          <div key={index} className="mb-16 w-full relative">
            {/* Timeline dot */}
            <div className="h-[21px] w-[21px] bg-accent shadow-[0_0_25px_#00ffee,_0_0_50px_#00ffee] absolute left-1/2 transform -translate-x-1/2 rounded-full top-[10px]"></div>
            
            {/* Content */}
            <div className={`${
              index % 2 === 0 
                ? 'pr-[calc(50%+30px)] text-right' 
                : 'pl-[calc(50%+30px)] text-left'
            }`}>
              <div className="text-3xl font-extrabold text-white mb-6 mt-2">
                {item.year}
              </div>
              
              <div className="bg-bg-primary border-4 border-accent py-12 px-20 rounded-[4rem] shadow-[0_0_10px_#00ffee] cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_25px_#00ffee]">
                <h3 className="text-3xl text-white mb-4 font-medium">
                  {item.title}
                </h3>
                <p className="text-white text-2xl font-light">
                  {item.description}
                </p>
                {item.extra && (
                  <h3 className="text-accent text-2xl font-medium mt-2 whitespace-pre-line">
                    {item.extra}
                  </h3>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
