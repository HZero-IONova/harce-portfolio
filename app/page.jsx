"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import React from "react";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Computer-Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Hiram Arce</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Seasoned Tech Leader specializing in high-impact software
              development, automation, and digital transformation, aligning
              strategic objectives to deliver measurable results and sustainable
              growth.
            </p>
            {/** button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="/assets/resume/ResumeHArce.pdf"
                  download
                  className="inline-flex items-center gap-2
             px-6 py-3 rounded-md
             hover:bg-accent hover:text-primary transition"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full 
            flex justify-center items-center text-accent text-base 
            hover:bg-accent hover:text-primary hover:transition-all 
            duration-500"
                />
              </div>
            </div>
          </div>
          {/** photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
