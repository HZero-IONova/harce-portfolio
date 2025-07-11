"use client";

import Link from "next/link";
import { FiDownload } from "react-icons/fi";

//components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import React from "react";
import Button from "@/components/Button";
import ButtonDark from "@/components/ButtonDark";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/** text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Computer-Software Engineer</span>
            <h1 className="h2 mb-6">
              Outcome-Driven.
              <br />
              <span className="text-accent">Results-Proven.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm H. Arce, Strategic-Technologist Specializing in AI-Powered
              Automation and Software Development. I design High-Impact Digital
              Systems that free Growing Businesses and Entrepreneurs from
              operational drag, so they can scale with Clarity, Attract more
              Clients, and focus on what truly drives growth.
            </p>
            {/** button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/contact">
                <Button targetId="/contact" text="Let's Forge Impact" />
              </Link>
              <Link href="/services">
                <ButtonDark targetId="/services" text="Services" />
              </Link>
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
