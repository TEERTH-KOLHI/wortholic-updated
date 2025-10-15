"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

export default function AboutSectionThree() {
  return (
    <section className="bg-white px-6 py-16 md:px-16 dark:bg-[#111111]">
      <div className="container mx-auto flex flex-col items-center gap-12 md:flex-row">
        {/* Left Side: Text */}
        <div className="md:w-1/2">
          <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl dark:text-[#ffffff]">
            Our Story
          </h2>
          <p className="mb-4 text-justify leading-relaxed text-gray-800 dark:text-gray-300">
            Wortholic began its journey within NaturalFlow.ai, a company founded
            in 2020 with a vision to harness the power of artificial
            intelligence for business transformation. What started as a small
            team passionate about building smarter systems grew into a
            mission-driven organization helping businesses streamline
            operations, modernize legacy tools, and innovate with cutting-edge
            AI.
          </p>

          <p className="mb-4 text-justify leading-relaxed text-gray-800 dark:text-gray-300">
            By 2025, Wortholic emerged as its own identity — a specialized
            technology partner focused on building custom ERP &amp; CRM
            solutions, AI-powered SaaS applications, and MVPs for startups ready
            to scale. We believe the future of software lies in API-first and
            microservices architectures, where flexibility, speed, and
            integration matter most. That&#39;s why our approach blends modern
            engineering practices with the transformative potential of
            generative AI, empowering businesses to innovate faster than ever
            before.
          </p>

          <p className="text-justify leading-relaxed text-gray-800 dark:text-gray-300">
            At Wortholic, we also take pride in helping organizations maintain
            and modernize legacy systems, ensuring they don&#39;t just keep up
            with change — they lead it. What started as an experiment in AI
            innovation at NaturalFlow.ai has evolved into Wortholic: a place
            where businesses find custom, future-ready digital solutions that
            grow with them.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/images/about/aboutus-img.png"
            alt="About Us"
            width={500}
            height={400}
            className="h-auto w-full max-w-md dark:brightness-90"
          />
        </div>
      </div>
    </section>
  );
}
