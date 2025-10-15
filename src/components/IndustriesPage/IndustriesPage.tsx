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
          <h1 className="mb-4 text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-gray-100">
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
            <div className="relative w-full max-w-[1000px]">
              <Image
                src="/images/industrypage/industries-thumb.png"
                alt="Industry"
                width={1000}
                height={400}
                className="mx-auto max-h-60 object-contain sm:max-h-72 md:max-h-96 dark:brightness-95 dark:invert"
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
