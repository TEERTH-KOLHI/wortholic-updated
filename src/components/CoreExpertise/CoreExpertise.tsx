"use client";
import React from "react";

const CoreExpertise = () => {
  return (
    <section className="bg-white/60 px-8 py-16 backdrop-blur-md transition-colors duration-300 dark:bg-black/60">
      <div className="mx-auto max-w-7xl">
        {/* Heading + Intro */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Our Core Expertise
          </h2>
          <p className="mx-auto max-w-5xl leading-relaxed text-gray-700 dark:text-gray-300">
            At Wortholic, we blend innovation, precision, and deep technical
            expertise to craft digital solutions that drive measurable results.
            Our multidisciplinary team works across cutting-edge technologies,
            ensuring every project is built for scalability, security, and
            long-term impact. From ideation to launch (and beyond), we deliver
            end-to-end development services that empower startups, enterprises,
            and product teams to move faster without compromising quality.
          </p>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Custom Web & Mobile App Development */}
          <div className="flex items-center space-x-4 rounded-xl border border-gray-200 bg-[#EAF3FF] p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white/20 dark:bg-white/10">
            <svg
              className="h-6 w-6 flex-shrink-0 text-black dark:text-white"
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
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Custom Web & Mobile App Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tailored solutions designed for performance, usability, and
                growth.
              </p>
            </div>
          </div>

          {/* AI & Machine Learning Solutions */}
          <div className="flex items-center space-x-4 rounded-xl border border-gray-200 bg-[#EAF3FF] p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white/20 dark:bg-white/10">
            <svg
              className="h-6 w-6 flex-shrink-0 text-black dark:text-white"
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
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                AI & Machine Learning Solutions
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                From intelligent automation to predictive analytics, we
                integrate AI to give your business a competitive edge.
              </p>
            </div>
          </div>

          {/* ERP, CRM & Workflow Systems */}
          <div className="flex items-center space-x-4 rounded-xl border border-gray-200 bg-[#EAF3FF] p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white/20 dark:bg-white/10">
            <svg
              className="h-6 w-6 flex-shrink-0 text-black dark:text-white"
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
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                ERP, CRM & Workflow Systems
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Fully customized platforms that streamline operations, enhance
                customer engagement, and optimize workflows.
              </p>
            </div>
          </div>

          {/* SaaS & Cloud-Native Applications */}
          <div className="flex items-center space-x-4 rounded-xl border border-gray-200 bg-[#EAF3FF] p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white/20 dark:bg-white/10">
            <svg
              className="h-6 w-6 flex-shrink-0 text-black dark:text-white"
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
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                SaaS & Cloud-Native Applications
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Scalable, secure, and future-ready solutions powered by AWS,
                Azure, and Google Cloud.
              </p>
            </div>
          </div>

          {/* API-First & Cross-Platform Development */}
          <div className="flex items-center space-x-4 rounded-xl border border-gray-200 bg-[#EAF3FF] p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white/20 dark:bg-white/10">
            <svg
              className="h-6 w-6 flex-shrink-0 text-black dark:text-white"
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
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                API-First & Cross-Platform Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Seamless integrations and applications that work everywhere—web,
                mobile, and beyond.
              </p>
            </div>
          </div>

          {/* Software Maintenance & Support */}
          <div className="flex items-center space-x-4 rounded-xl border border-gray-200 bg-[#EAF3FF] p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-white/20 dark:bg-white/10">
            <svg
              className="h-6 w-6 flex-shrink-0 text-black dark:text-white"
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
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Software Maintenance & Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ongoing updates, troubleshooting, and performance optimization
                to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
