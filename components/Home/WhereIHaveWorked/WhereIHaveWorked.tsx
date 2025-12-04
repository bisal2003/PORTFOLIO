import React from "react";
import { motion } from "framer-motion";

export default function WhereIHaveWorked() {
  const [descriptionJob, setDescriptionJob] = React.useState("NIT Silchar");
  
  const GetDescription = () => {
    switch (descriptionJob) {
      case "NIT Silchar":
        return <NITSilcharDesc />;
      case "Academor":
        return <AcademorDesc />;
      case "IEEE RAS":
        return <IEEERASDesc />;
      case "Finance Club":
        return <FinanceClubDesc />;
      default:
        return <NITSilcharDesc />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      <section className="flex flex-row items-center">
        <span className="text-AAsecondary font-sans text-sm sm:text-xl">02.</span>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      
      <section className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center items-center md:items-start">
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = ({ setDescriptionJob }) => {
  const [barPosition, setBarPosition] = React.useState(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState([
    true, false, false, false
  ]);

  const CompanyButton = ({ 
    buttonIndex,
    companyName,
    barPosition,
    barAbovePosition,
    descriptionJob,
    newColorState
  }) => (
    <button
      onClick={() => {
        setBarPosition(barPosition);
        setBarAbovePosition(barAbovePosition);
        setDescriptionJob(descriptionJob);
        setCompanyNameBackgroundColorGreen(newColorState);
      }}
      className={`flex-none sm:text-sm text-xs text-center md:text-left hover:text-AAsecondary
        hover:bg-ResumeButtonHover rounded font-mono py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
        ${companyNameBackgroundColorGreen[buttonIndex] ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"}`}
    >
      {companyName}
    </button>
  );

  return (
    <div className="flex flex-col md:flex-row w-screen lg:w-auto overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start sm:justify-center items-start sm:items-center">
      <div className="hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-[352px] translate-y-1 md:w-0.5 rounded md:order-1 order-2">
        <motion.div
          animate={{ y: barPosition }}
          className="absolute w-10 h-0.5 md:w-0.5 md:h-12 rounded bg-AAsecondary"
        />
      </div>
      
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0">
        <div className="flex flex-row md:flex-col">
          <CompanyButton
            buttonIndex={0}
            companyName="NIT Silchar"
            barPosition={-10}
            barAbovePosition={1}
            descriptionJob="NIT Silchar"
            newColorState={[true, false, false, false]}
          />
          <CompanyButton
            buttonIndex={1}
            companyName="Academor Edtech"
            barPosition={40}
            barAbovePosition={129}
            descriptionJob="Academor"
            newColorState={[false, true, false, false]}
          />
          <CompanyButton
            buttonIndex={2}
            companyName="IEEE RAS"
            barPosition={83}
            barAbovePosition={257}
            descriptionJob="IEEE RAS"
            newColorState={[false, false, true, false]}
          />
          <CompanyButton
            buttonIndex={3}
            companyName="Finance Club"
            barPosition={126}
            barAbovePosition={385}
            descriptionJob="Finance Club"
            newColorState={[false, false, false, true]}
          />
        </div>
        <div className="block md:hidden h-0.5 rounded bg-gray-500">
          <motion.div 
            animate={{ x: barAbovePosition }} 
            className="w-[128px] h-0.5 rounded bg-AAsecondary" 
          />
        </div>
      </div>
    </div>
  );
};

const NITSilcharDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">Research Intern - BCI Signal Processing</span>
      <span className="text-AAsecondary">May 2025 - Jul 2025</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Enhanced <span className="text-AAsecondary">Brain-Computer Interface (BCI)</span> using <span className="text-AAsecondary">122-channel EEG data</span>; applied <span className="text-AAsecondary">Wavelet Transform</span> and Deep Learning achieving <span className="text-AAsecondary">90%+</span> classification accuracy.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Engineered neural decoding pipeline for <span className="text-AAsecondary">Thought-to-Speech</span> conversion enabling real-time BCI feedback.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Implemented <span className="text-AAsecondary">signal processing techniques</span> including feature extraction and time-frequency analysis for EEG classification.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>GitHub: <a href="https://github.com/bisal2003/Thought-to-Speech-BCI.git" target="_blank" rel="noreferrer" className="text-AAsecondary hover:underline">github.com/bisal2003/Thought-to-Speech-BCI</a></span>
      </div>
    </div>
  </div>
);

const AcademorDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">Machine Learning Intern</span>
      <span className="text-AAsecondary">Jun 2024 - Jul 2024</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Built <span className="text-AAsecondary">Loan Prediction Model</span> with parameter tuning improving accuracy by <span className="text-AAsecondary">15%</span>.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Applied <span className="text-AAsecondary">sentiment analysis</span> achieving <span className="text-AAsecondary">98% accuracy</span> using optimized NLP pipeline.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Worked with <span className="text-AAsecondary">Scikit-learn, Pandas, NumPy</span> for data preprocessing and model development.</span>
      </div>
    </div>
  </div>
);

const IEEERASDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">General Secretary and Team Lead</span>
      <span className="text-AAsecondary">Apr 2025 - Present</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Organized expert talks attended by <span className="text-AAsecondary">500+ students</span> to promote interest in robotics and automation.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Expanded a <span className="text-AAsecondary">GPS-independent fire-surveillance drone</span> to enhance emergency response capabilities.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Led technical workshops on <span className="text-AAsecondary">Arduino, Robotics, and Automation</span>.</span>
      </div>
    </div>
  </div>
);

const FinanceClubDesc = () => (
  <div className="flex-col space-y-5 max-w-xl px-4 md:px-0">
    <div className="flex flex-col space-y-2">
      <span className="text-gray-100 text-xl font-bold">Senior Fundamental Analyst</span>
      <span className="text-AAsecondary">May 2024 - Present</span>
    </div>
    <div className="flex flex-col space-y-4 text-gray-400">
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Conducted stock market research sessions introducing <span className="text-AAsecondary">100+ juniors</span> to basics of equity valuation.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Analyzed financial statements and prepared reports on company fundamentals for peer learning.</span>
      </div>
      <div className="flex flex-row space-x-2">
        <span className="text-AAsecondary">▹</span>
        <span>Interests include <span className="text-AAsecondary">Option Trading</span> and financial market analysis.</span>
      </div>
    </div>
  </div>
);