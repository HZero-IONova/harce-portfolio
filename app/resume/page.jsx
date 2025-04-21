"use client";

import {
  FaJs,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaMicrosoft,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const metadata = {
  title: "Resume | Hiram Arce",
};

//about data
const about = {
  title: "About Me",
  description:
    "Seasoned Tech Leader specializing in high-impact software development, automation, and digital transformation, aligning strategic objectives to deliver measurable results and sustainable growth.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hiram Arce",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+52) 665 104 1623",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "rh.arce@outlook.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Mexican",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Over the past decade I’ve led technology initiatives in manufacturing, public‑sector services, and utilities—driving large‑scale automation, cloud adoption, and data‑driven decision making. I thrive in high‑stakes environments where critical systems must remain resilient, spearheading projects that have cut manual workloads by double‑digit percentages while accelerating delivery cycles. Whether restoring mission‑critical infrastructure under tight deadlines or mentoring multidisciplinary teams through modernization roadmaps, my focus is always on turning complex technical challenges into clear business wins.",
  items: [
    {
      company: "Eaton Aerospace",
      position: "IT Integrations Specialist",
      duration: "2023 - Present",
    },
    {
      company: "Government",
      position: "IT Manager",
      duration: "2022 - 2023",
    },
    {
      company: "Agencia Aduanal Romero Galaviz",
      position: "Full Stack Developer",
      duration: "2021 - 2022",
    },
    {
      company: "CESPTE",
      position: "Full Stack Developer",
      duration: "2020 - 2021",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I hold an engineering degree with a concentration in computing systems, where I cultivated a deep foundation in algorithms, network architecture, and secure software design. Complementing this core program, I pursued advanced coursework in modern full-stack development, asynchronous programming, and agile product delivery—building a mindset of continuous experimentation and lifelong learning that still guides my craft today.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2025",
    },
    {
      institution: "HolaMundo.io",
      degree: "JavaScript Course",
      duration: "2025",
    },
    {
      institution: "Eaton University",
      degree: "Microsoft Power Platforms Course",
      duration: "2024-2025",
    },
    {
      institution: "Universidad Autónoma de Baja California",
      degree: "Degree in Computer Engineering",
      duration: "2015 - 2020",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "My expertise spans the full product lifecycle—from architecting scalable user interfaces and modeling relational data to scripting intelligent automations that bridge cloud services with on‑premise assets. I’m equally comfortable white‑boarding high‑level solution diagrams with stakeholders as I am rolling up my sleeves to optimize query performance, refine CI/CD pipelines, or prototype AI‑driven features. Colleagues count on me for translating ambitious ideas into dependable, maintainable systems that keep pace with rapidly evolving business needs.",
  skillsList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaDatabase />,
      name: "sql",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaMicrosoft />,
      name: "Microsoft Power Platforms",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { easeIn, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 text-light">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/** content */}
          <div className="min-h-[70vh] w-full">
            {/** experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="ma-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="ma-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent ">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/** dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-white capitalize">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/** about  */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="m-2-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
