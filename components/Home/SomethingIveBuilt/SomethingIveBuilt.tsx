import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">03.</span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* Project 1 - CALL.E AI Calling Agent */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/bisal2003/Call_Agent_AI.git" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img 
              src={"/calle.gif"} 
              alt={"CALL.E AI Calling Agent"} 
              className={`w-full rounded h-full object-cover`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img 
                src={"/calle.gif"}
                alt={"CALL.E AI Calling Agent"} 
                className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Winner - Neurathon 2025</span>
                <a href="https://github.com/bisal2003/Call_Agent_AI.git" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    CALL.E – AI Bulk Calling Agent
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Built AI caller using <span className="text-AAsecondary">TTS/STT</span> with <span className="text-AAsecondary">RAG</span> for personalized responses, 
                  working parallel pipelines and reduced latency by <span className="text-AAsecondary">45%</span>. Leveraged{" "}
                  <span className="text-AAsecondary">Llama-3.3-70B</span> for intelligent conversation flows and{" "}
                  <span className="text-AAsecondary">WandB</span> for experiment tracking.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">Llama-3.3-70B</span>
                <span className="pr-4 z-10">RAG</span>
                <span className="pr-4 z-10">TTS/STT</span>
                <span className="pr-4 z-10">WandB</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/bisal2003/Call_Agent_AI.git" />
                <a href="https://call-agent-ai-frontend-lk2e.onrender.com/" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 - Project Kisan */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://drive.google.com/file/d/1dNUV00jJpZSGB-SzDGL0YWlGz315VO1_/view?usp=sharing" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/kisan.gif"} alt={"Project Kisan"} className={`w-full rounded h-full object-cover`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/kisan.gif"} alt={"Project Kisan"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Finalist - Google Cloud Agentic AI Day (Top 50 in India)</span>
                <a href="https://drive.google.com/file/d/1dNUV00jJpZSGB-SzDGL0YWlGz315VO1_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Project Kisan – Agentic AI for Agronomy
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Created an agentic AI ecosystem offering multimodal crop disease diagnosis, real-time mandi price forecasts, 
                  subsidy matching, and adaptive crop calendars. Applied{" "}
                  <span className="text-AAsecondary">offline-first, multilingual voice UX</span> ensuring inclusive access for 
                  smallholder farmers, potentially reducing yield loss by <span className="text-AAsecondary">40%</span>.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Google Cloud (Vertex AI)</span>
                <span className="pr-4 z-10">Gemini Vision</span>
                <span className="pr-4 z-10">BigQuery ML</span>
                <span className="pr-4 z-10">STT/TTS</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/bignya23/Project_Kisan_Team_0101" />
                <a href="https://project-kisan-team-0101.vercel.app/" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 - Amazon GreenX */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://github.com/Subrata-20/HackOn-Amazon.git" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/greenx.gif"} alt={"Amazon GreenX"} className={`w-full rounded h-full object-cover`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/greenx.gif"} alt={"Amazon GreenX"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Semifinalist - Amazon HackOn Season 5</span>
                <a href="https://github.com/Subrata-20/HackOn-Amazon.git" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Amazon GreenX – Sustainable Shopping Hub
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Expanded sustainable e-commerce with carbon scoring via image recognition and{" "}
                  <span className="text-AAsecondary">3D CV optimization</span> for packaging assistance 
                  (<span className="text-AAsecondary">35% less waste</span>), an end-to-end ecosystem. 
                  Integrated <span className="text-AAsecondary">AWS Rekognition</span> for intelligent product analysis.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">AWS (KMS, S3, Rekognition)</span>
                <span className="pr-4 z-10">Computer Vision</span>
                <span className="pr-4 z-10">NLP</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/Subrata-20/HackOn-Amazon.git" />
                <a href="https://hacko-fawn.vercel.app/" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 - CPU Scheduling Simulator */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://cpu-scheduling-algorithm-ten.vercel.app/" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/cpu-scheduler.png"} alt={"CPU Scheduler"} className={`w-full rounded h-full object-cover`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/cpu-scheduler.png"} alt={"CPU Scheduler"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Operating Systems Project</span>
                <a href="https://cpu-scheduling-algorithm-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    CPU Scheduling Simulator
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Engineered a high-performance simulator in <span className="text-AAsecondary">C++</span> implementing{" "}
                  <span className="text-AAsecondary">7 core scheduling algorithms</span> (FCFS, RR, MLFQ). 
                  Developed a dual-mode interface (CLI & Web/<span className="text-AAsecondary">Next.js</span>) 
                  visualizing PCB states, achieving <span className="text-AAsecondary">O(n log n)</span> efficiency.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">C++</span>
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">OS Concepts</span>
                <span className="pr-4 z-10">Algorithms</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/bisal2003/CPU_scheduling_Algorithm.git" />
                <a href="https://cpu-scheduling-algorithm-ten.vercel.app/" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 5 - LUXORA E-Commerce */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="https://luxora-ecommerce-m4aq.vercel.app/" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/luxora.png"} alt={"LUXORA E-Commerce"} className={`w-full rounded h-full object-cover`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/luxora.png"} alt={"LUXORA E-Commerce"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Full-Stack MERN Application</span>
                <a href="https://luxora-ecommerce-m4aq.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    LUXORA - E-Commerce Platform
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Built a secure platform with <span className="text-AAsecondary">JWT Auth</span> and Role-Based Access Control, 
                  supporting <span className="text-AAsecondary">100+ distinct product SKUs</span>. Implemented global state 
                  management via <span className="text-AAsecondary">Redux Toolkit</span>, reducing redundant API calls by{" "}
                  <span className="text-AAsecondary">30%</span> for cart operations.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">MERN Stack</span>
                <span className="pr-4 z-10">Redux Toolkit</span>
                <span className="pr-4 z-10">JWT Auth</span>
                <span className="pr-4 z-10">REST APIs</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/bisal2003/luxora-ecommerce.git" />
                <a href="https://luxora-ecommerce-m4aq.vercel.app/" target="_blank" rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 6 - 8085 Microprocessor in Verilog */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://github.com/bisal2003/microprocessor_8085_mini_verilog" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary 
                  transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/8085-cpu.png"} alt={"8085 CPU"} className={`w-full rounded h-full object-cover`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/8085-cpu.png"} alt={"8085 CPU"} className={`w-full h-full object-cover`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
              col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Digital Design & Computer Architecture</span>
                <a href="https://github.com/bisal2003/microprocessor_8085_mini_verilog" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    8085-like 8-bit CPU in Verilog
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Designed a compact <span className="text-AAsecondary">8-bit CPU</span> inspired by Intel 8085 with 
                  registers, ALU, opcode decoder, and minimal testbench for simulation. Executed arithmetic, logic, 
                  and shift operations with <span className="text-AAsecondary">opcode-driven control</span>, 
                  demonstrating fundamentals of CPU datapath and control logic.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Verilog</span>
                <span className="pr-4 z-10">Digital Design</span>
                <span className="pr-4 z-10">CPU Architecture</span>
                <div>*    * </div>
                <span className="pr-4 z-10">XILINX VIVADO</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/bisal2003/microprocessor_8085_mini_verilog" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
