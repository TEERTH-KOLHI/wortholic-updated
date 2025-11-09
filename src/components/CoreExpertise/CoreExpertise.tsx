"use client";
import React from "react";
import Image from "next/image";

const CoreExpertise = () => {
  return (
    <section className="bg-white/60 px-8 py-16 backdrop-blur-md transition-colors duration-300 dark:bg-black/60">
      <div className="mx-auto max-w-6xl">
        {/* Heading + Intro */}
        <div className="-mb-15 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Our Core Expertise
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700 dark:text-gray-300">
            We blend innovation and technical expertise to craft digital
            solutions that drive results. From ideation to launch, we deliver
            scalable, secure solutions for startups and enterprises.
          </p>
        </div>

        {/* Animated orb and top image */}
        <div className="flex flex-col justify-items items-center">
          <div className="flex justify-center mb-0 relative z-10">
            <div
              className="relative flex items-center justify-center w-[90px] h-[90px] top-[100px] right-[6px] rounded-full border border-[rgba(29,116,122,0.3)] bg-white 
               animate-[orbPulse_3s_ease-in-out_infinite] transition-colors duration-300 
               dark:bg-slate-800 dark:border-[rgba(29,116,122,0.5)] 
               before:content-[''] before:absolute before:w-full before:h-full before:rounded-full 
               before:bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.6)_0%,transparent_50%)] 
               dark:before:bg-[radial-gradient(circle_at_35%_25%,rgba(30,41,59,0.6)_0%,transparent_50%)]"
            >
              <Image
                src="/images/stack/center.gif"
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="transition duration-300 brightness-100">
            <Image
              src="/images/stack/up-image3.png"
              alt=""
              width={230}
              height={50}
              className="w-[230px] h-[150px] lg:w-[730px] lg:h-[200px]"
            />
          </div>

          {/* First Row - 3 Cards */}
          <div className="mb-3 flex justify-center">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 max-w-4xl w-full">
              {/* Card 1 */}
              <div
                className="
                  flex flex-col items-center text-center 
                  rounded-[20px] 
                  border 
                  border-[rgba(29,116,122,0.15)] 
                  bg-gradient-to-br from-[#f8fffe] to-[#f0faf8] 
                  shadow-[0_8px_32px_rgba(29,116,122,0.1),_inset_0_0_20px_rgba(29,116,122,0.04)] 
                  p-5
                  transition-all duration-300 ease-in-out
                  hover:scale-[1.02] hover:shadow-lg
                  dark:bg-gradient-to-br dark:from-[#1d747a]/30 dark:to-[#13555a]/30
                  dark:border-[rgba(29,116,122,0.5)]
                  dark:shadow-[0_8px_32px_rgba(29,116,122,0.4),_inset_0_0_20px_rgba(29,116,122,0.1)]
                "
              >
                <svg
                  className="h-10 w-10 mb-3 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Web & Mobile Development
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Tailored solutions for performance and growth.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="
                  flex flex-col items-center text-center 
                  rounded-[20px] 
                  border 
                  border-[rgba(29,116,122,0.15)] 
                  bg-gradient-to-br from-[#f8fffe] to-[#f0faf8] 
                  shadow-[0_8px_32px_rgba(29,116,122,0.1),_inset_0_0_20px_rgba(29,116,122,0.04)] 
                  p-5
                  transition-all duration-300 ease-in-out
                  hover:scale-[1.02] hover:shadow-lg
                  dark:bg-gradient-to-br dark:from-[#1d747a]/30 dark:to-[#13555a]/30
                  dark:border-[rgba(29,116,122,0.5)]
                  dark:shadow-[0_8px_32px_rgba(29,116,122,0.4),_inset_0_0_20px_rgba(29,116,122,0.1)]
                "
              >
                <svg
                  className="h-10 w-10 mb-3 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  AI & Machine Learning
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Smart automation and predictive analytics.
                </p>
              </div>

              {/* Card 3 */}
              <div
                className="
                  flex flex-col items-center text-center 
                  rounded-[20px] 
                  border 
                  border-[rgba(29,116,122,0.15)] 
                  bg-gradient-to-br from-[#f8fffe] to-[#f0faf8] 
                  shadow-[0_8px_32px_rgba(29,116,122,0.1),_inset_0_0_20px_rgba(29,116,122,0.04)] 
                  p-5
                  transition-all duration-300 ease-in-out
                  hover:scale-[1.02] hover:shadow-lg
                  dark:bg-gradient-to-br dark:from-[#1d747a]/30 dark:to-[#13555a]/30
                  dark:border-[rgba(29,116,122,0.5)]
                  dark:shadow-[0_8px_32px_rgba(29,116,122,0.4),_inset_0_0_20px_rgba(29,116,122,0.1)]
                "
              >
                <svg
                  className="h-10 w-10 mb-3 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  ERP, CRM & Workflows
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Streamline operations and enhance engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="mb-3 flex justify-center">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-2xl w-full">
              {/* Card 4 */}
              <div
                className="
                  flex flex-col items-center text-center 
                  rounded-[20px] 
                  border 
                  border-[rgba(29,116,122,0.15)] 
                  bg-gradient-to-br from-[#f8fffe] to-[#f0faf8] 
                  shadow-[0_8px_32px_rgba(29,116,122,0.1),_inset_0_0_20px_rgba(29,116,122,0.04)] 
                  p-5
                  transition-all duration-300 ease-in-out
                  hover:scale-[1.02] hover:shadow-lg
                  dark:bg-gradient-to-br dark:from-[#1d747a]/30 dark:to-[#13555a]/30
                  dark:border-[rgba(29,116,122,0.5)]
                  dark:shadow-[0_8px_32px_rgba(29,116,122,0.4),_inset_0_0_20px_rgba(29,116,122,0.1)]
                "
              >
                <svg
                  className="h-10 w-10 mb-3 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  SaaS & Cloud Solutions
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Scalable solutions on AWS, Azure, and GCP.
                </p>
              </div>

              {/* Card 5 */}
              <div
                className="
                  flex flex-col items-center text-center 
                  rounded-[20px] 
                  border 
                  border-[rgba(29,116,122,0.15)] 
                  bg-gradient-to-br from-[#f8fffe] to-[#f0faf8] 
                  shadow-[0_8px_32px_rgba(29,116,122,0.1),_inset_0_0_20px_rgba(29,116,122,0.04)] 
                  p-5
                  transition-all duration-300 ease-in-out
                  hover:scale-[1.02] hover:shadow-lg
                  dark:bg-gradient-to-br dark:from-[#1d747a]/30 dark:to-[#13555a]/30
                  dark:border-[rgba(29,116,122,0.5)]
                  dark:shadow-[0_8px_32px_rgba(29,116,122,0.4),_inset_0_0_20px_rgba(29,116,122,0.1)]
                "
              >
                <svg
                  className="h-10 w-10 mb-3 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  API & Cross-Platform
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Seamless integrations across all platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row - 1 Card Centered */}
          <div className="flex justify-center">
            <div className="max-w-xs w-full">
              {/* Card 6 */}
              <div
                className="
                  flex flex-col items-center text-center 
                  rounded-[20px] 
                  border 
                  border-[rgba(29,116,122,0.15)] 
                  bg-gradient-to-br from-[#f8fffe] to-[#f0faf8] 
                  shadow-[0_8px_32px_rgba(29,116,122,0.1),_inset_0_0_20px_rgba(29,116,122,0.04)] 
                  p-5
                  transition-all duration-300 ease-in-out
                  hover:scale-[1.02] hover:shadow-lg
                  dark:bg-gradient-to-br dark:from-[#1d747a]/30 dark:to-[#13555a]/30
                  dark:border-[rgba(29,116,122,0.5)]
                  dark:shadow-[0_8px_32px_rgba(29,116,122,0.4),_inset_0_0_20px_rgba(29,116,122,0.1)]
                "
              >
                <svg
                  className="h-10 w-10 mb-3 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Maintenance & Support
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ongoing updates and optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
