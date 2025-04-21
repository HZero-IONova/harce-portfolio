"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lightning‑fast, conversion‑focused websites built with modern frameworks—seamlessly responsive and engineered to turn visitors into loyal customers.",
    href: "",
  },
  {
    num: "02",
    title: "Power Platforms",
    description:
      "Low‑code apps and automated workflows that slash manual effort and surface real‑time insights, all fully tailored to your unique business processes.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "Data‑driven strategies that elevate your search rankings, amplify organic traffic, and position your brand exactly where your audience is looking.",
    href: "",
  },
  {
    num: "04",
    title: "IT Specialist",
    description:
      "End‑to‑end technology stewardship—from infrastructure hardening to incident response—ensuring your systems stay secure, scalable, and relentlessly reliable.",
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
