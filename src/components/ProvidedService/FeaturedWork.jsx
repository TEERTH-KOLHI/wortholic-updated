"use client";
import React, { useState, useEffect, useRef } from "react";
import CircularSlider from "./CircularSlider";

const FeaturedWork = ({
  topBgColor = "bg-white",
  contentBgColor = "bg-[#0E9F9F]",
  featuredTabBg = "bg-[#EAF3FF]",
  featuredTextColor = "text-gray-100",
  seeAllTabBg = "bg-[#EAF3FF]",
  seeAllTextColor = "text-white",
  featuredWorkText = "",
  featuredNumber = "",
  seeAllText = "",
  titleText,
  descriptionText,
  showSeeAll = false,
  featureMargin = "ml-0",
  additionalClass = "",
  cardsData,
  sectionType = "apps",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`w-full ${topBgColor} ${additionalClass} dark:none dark:text-gray-100`}
    >
      <div className={`flex flex-col  h-[2.5rem] sm:flex-row`}>
        {/* Feature Work Section */}
        <div
          className={`w-full md:w-[15rem]  lg:w-[15rem] ${featuredTabBg} ${featureMargin} block border border-transparent rounded-tr-xl sm:rounded-tr-none p-4 dark:bg-black`}
        >
          <h1
            className={`text-[0.8rem] font-bold uppercase ${featuredTextColor} dark:text-gray-100`}
          >
            {featuredWorkText}
            <span className={featuredTextColor}> {featuredNumber}</span>
          </h1>
        </div>

        {showSeeAll && (
          <>
            <div
              className={`hidden sm:block w-[3rem] h-4 sm:h-auto pr-3 border border-transparent ${featuredTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)] dark:bg-black`}
            ></div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div
        className={`grid grid-cols-1 border-gray-400 lg:grid-cols-3 p-3 sm:p-3 ${contentBgColor} border-b border-dotted dark:bg-black dark:border-gray-600`}
      >
        <h2
          className={`text-[16px] ${featuredTextColor} sm:text-2xl text-black font-bold lg:text-[18px] leading-tight block font-Ovo dark:text-gray-100`}
        >
          {titleText}
        </h2>
      </div>

      <CircularSlider
        descriptionText={descriptionText}
        cardsData={cardsData}
        sectionType={sectionType}
      />
    </div>
  );
};

export default FeaturedWork;
