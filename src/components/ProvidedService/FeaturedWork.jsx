"use client";
import React, { useState, useEffect, useRef } from "react";
import CircularSlider from "./CircularSlider";

const FeaturedWork = ({
  topBgColor = "bg-white",
  contentBgColor = "bg-[#EAF3FF]",
  featuredTabBg = "bg-[#EAF3FF]",
  featuredTextColor = "text-gray-900",
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full ${topBgColor} ${additionalClass}`}>
      <div className={`flex flex-col lg: h-[3rem]  sm:flex-row `}>
        {/* Feature Work Section */}
        <div
          className={`lg:w-[15rem]   sm:w-auto ${featuredTabBg} ${featureMargin} hidden md:block border border-transparent rounded-tl-xl rounded-tr-xl sm:rounded-tr-none p-4`}
        >
          <h1
            className={`text-[0.8rem] font-bold  uppercase   ${featuredTextColor}`}
          >
            {featuredWorkText}
            <span className={featuredTextColor}> {featuredNumber}</span>
          </h1>
        </div>
        <div
          className={`lg:w-[15rem]    ${featuredTabBg}  block md:hidden border border-transparent rounded-tl-xl rounded-tr-xl sm:rounded-tr-none p-4`}
        >
          <h1
            className={`text-[0.8rem] font-bold  uppercase   ${featuredTextColor}`}
          >
            {featuredWorkText}
            <span className={featuredTextColor}> {featuredNumber}</span>
          </h1>
        </div>
        <div
          className={`w-[3rem] h-4 sm:h-auto pr-3 border border-transparent   ${featuredTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)]`}
        ></div>
        {showSeeAll && (
          <>
            <div
              className={` w-full sm:w-auto  border-black  rounded-tl-xl rounded-tr-0xl sm:rounded-tl-xl p-4  lg:w-[20rem]  ml-[33rem]  `}
            ></div>
            <div
              className={`w-[6rem] h-4 sm:h-auto    border border-black   ${seeAllTabBg} [clip-path:polygon(0_20%,0_0,100%_100%,0_100%)]`}
            ></div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-3  sm:p-5 ${contentBgColor} border-b border-dotted border-gray-900`}
      >
        <div className="">
          <h2 className="text-[1rem] sm:text-2xl lg:text-[1.5rem] text-gray-900 leading-tight hidden md:block font-Ovo">
            {titleText}
          </h2>
          <div ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[1rem] sm:text-2xl lg:text-[1.5rem] text-gray-900 leading-tight block md:hidden font-Ovo"
            >
              {titleText}
              <svg
                className={`w-5 h-5 inline float-right transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#6B7280"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isOpen && (
              <p className="absolute w-full text-[0.8rem] text-black bg-[#EAF3FF] border border-gray-300 rounded shadow-md mt-1 py-2 z-[10]">
                {descriptionText}
              </p>
            )}{" "}
          </div>
        </div>
      </div>
      <CircularSlider descriptionText={descriptionText} cardsData={cardsData} />
    </div>
  );
};

export default FeaturedWork;
