"use client";

import React from "react";
import { FaUsers, FaDollarSign, FaClock } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { GiGearStickPattern } from "react-icons/gi";

const AboutSectionFour = () => {
  const features = [
    {
      icon: <FaUsers className="text-3xl text-black dark:text-white" />,
      title: "Unparalleled Leadership Team with Years of Experience",
    },
    {
      icon: <MdWork className="text-3xl text-black dark:text-white" />,
      title: "Established Work Processes and Documented Workflow",
    },
    {
      icon: <BiBadgeCheck className="text-3xl text-black dark:text-white" />,
      title: "Focus on Quality and promoting Efficiency",
    },
    {
      icon: <RiGlobalLine className="text-3xl text-black dark:text-white" />,
      title: "Global Standard Ethics and Conventions",
    },
    {
      icon: <FaDollarSign className="text-3xl text-black dark:text-white" />,
      title: "Cost Effective Rates and Above Standard Resources",
    },
    {
      icon: <FaClock className="text-3xl text-black dark:text-white" />,
      title: "Timely Delivery without Loosing on Quality",
    },
    {
      icon: <FaComments className="text-3xl text-black dark:text-white" />,
      title: "Seamless Communication and All-Round Interaction",
    },
    {
      icon: (
        <GiGearStickPattern className="text-3xl text-black dark:text-white" />
      ),
      title: "Expert Team of Engineers and Professionals",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 md:px-16 dark:bg-gray-900">
      {/* Heading */}
      <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl dark:text-white">
        Why Wortholic?
      </h2>

      {/* Paragraph */}
      <p className="mb-10 max-w-5xl text-gray-800 dark:text-gray-300">
        Do you care for your business growth OR are looking for a launchpad for
        your startup? Look no further and allow us to be the backbone of your IT
        services. Wortholic is a total IT solution provider with focus on
        business & commercial applications. We provide highly efficient services
        for development of custom web applications, database solutions and
        mobile applications. Our clients have utilized our solutions for the
        betterment of their processes and have met the standards of the
        ever-evolving challenges of the software industry. We have successfully
        delivered solutions to major countries like USA (California, New York,
        Florida, Chicago, Ohio, Texas, New Jersey, Connecticut, Oklahoma,
        Virginia, Washington, Georgia, Colorado) Belgium, France, United Kingdom
        (UK), Ireland, Germany, Canada, Australia, Hong Kong, Netherlands,
        Norway, Singapore, Japan, South Africa, Finland etc. We believe in
        actions and that is the reason we are always the preferred go-to team.
      </p>

      {/* Features Grid */}
      <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-gray-200 bg-transparent p-6 text-center shadow-sm transition hover:shadow-md dark:bg-gray-800"
          >
            {item.icon}
            <p className="mt-3 text-sm text-black dark:text-gray-200">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-2xl flex-col items-center rounded-lg border border-gray-200 bg-transparent p-6 text-center shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <p className="mb-4 text-lg font-semibold text-black dark:text-white">
            Start now with a pre-vetted SaaS Developers.
          </p>
          <button className="flex items-center justify-center rounded border-1 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-1 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionFour;
// Done section
