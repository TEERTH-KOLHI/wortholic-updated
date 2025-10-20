"use client";
import React from "react";
import Image from "next/image";

const IndustriesPage = () => {
  return (
    <div className="bg-white dark:bg-black">
      {/* Industries We Serve Section */}
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          {/* Heading */}
          <h1 className="mb-4 text-2xl lg:text-5xl font-bold text-black sm:text-4xl md:text-5xl dark:text-gray-100">
            Industries We Serve
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-[800px] text-base leading-relaxed text-gray-600 sm:text-lg md:mb-10 md:text-xl dark:text-gray-300">
            For years, we have been the best software development company in UK,
            USA, Australia, and all over the world. We have served clients
            belonging to different industries and domains.
          </p>

          {/* Image Container */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-full">
              <Image
                src="/images/industrypage/industryPage.svg"
                alt="Industry"
                width={1200}
                height={400}
                className="mx-auto max-h-500 object-contain sm:max-h-200 md:max-h-500 dark:brightness-95 dark:invert"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
