"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Intelligent Automation",
    description:
      "AI‑powered workflows and client-facing systems that eliminate repetitive tasks, Automate Lead Generation, Instant Quoting, Social Media Automation, Inventory Management, Meetings Scheduling, and Onboarding—Freeing your business to scale with focus.",
    href: "",
  },
  {
    num: "02",
    title: "Software Engineering",
    description:
      "Elegant, high-performance applications and internal tools—designed end-to-end with modern frameworks like Next.js, Python, and SQL, to align with your business logic and user experience goals.",
    href: "",
  },
  {
    num: "03",
    title: "System Integration",
    description:
      "Seamlessly connect tools into cohesive ecosystems that centralize operations and accelerate decision-making.",
    href: "",
  },
  {
    num: "04",
    title: "Strategic Tech Advisory",
    description:
      "Thoughtful technical guidance and custom-built digital infrastructures that empower entrepreneurs and growing companies to turn complexity into clarity—and scale with confidence.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex-1 flex flex-col justify-center gap-6"
              >
                {/** top */}
                <div className=" w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover-text-outline transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/** heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/** description */}
                <p className="text-white-60">{service.description}</p>
                {/** border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
