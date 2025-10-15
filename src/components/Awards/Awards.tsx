"use client";
import React from "react";

const Awards: React.FC = () => {
  const awards = [
    { title: "2h Swift Company 2025", type: "clutch" },
    { title: "Top Clutch Systems Integration Company 2025", type: "clutch" },
    {
      title: "Top Clutch Web Developers Consumer Products Services",
      type: "clutch",
    },
    {
      title: "Top Clutch ERP Consulting Company 2023 Award",
      type: "clutch-brown",
    },
    { title: "Global Award 2023", type: "clutch-teal" },
    { title: "Top Clutch App Developers", type: "clutch-dark" },
  ];

  return (
    <section className="bg-white px-6 py-6 dark:bg-black">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl dark:text-gray-100">
            Awards and Recognitions
          </h2>
          <p className="mx-auto max-w-4xl leading-relaxed text-gray-600 dark:text-gray-300">
            Over the years, our work has earned industry awards and global
            recognition for innovation, quality, and customer success. Each
            milestone reflects our commitment to delivering exceptional digital
            solutions that make a real impact.
          </p>
        </div>

        {/* Sliding Awards Container */}
        <div className="relative overflow-hidden">
          <div className="animate-slide flex space-x-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="w-80 flex-shrink-0 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Award Badge */}
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800 font-bold text-white">
                    <div className="text-center">
                      <div className="mb-1 text-xs text-gray-200">★★★★★</div>
                      <div className="text-sm font-bold text-white">Clutch</div>
                      <div className="text-xs text-gray-300">
                        {award.type === "clutch-teal"
                          ? "GLOBAL"
                          : award.type === "clutch-brown"
                            ? "TOP PERFORMERS"
                            : "TOP COMPANY"}
                      </div>
                    </div>
                  </div>

                  {/* Award Title */}
                  <h3 className="text-sm leading-tight font-semibold text-gray-800 dark:text-gray-200">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {awards.map((award, index) => (
              <div
                key={`duplicate-${index}`}
                className="w-80 flex-shrink-0 rounded-lg border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-900"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800 font-bold text-white">
                    <div className="text-center">
                      <div className="mb-1 text-xs text-gray-200">★★★★★</div>
                      <div className="text-sm font-bold text-white">Clutch</div>
                      <div className="text-xs text-gray-300">
                        {award.type === "clutch-teal"
                          ? "GLOBAL"
                          : award.type === "clutch-brown"
                            ? "TOP PERFORMERS"
                            : "TOP COMPANY"}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm leading-tight font-semibold text-gray-800 dark:text-gray-200">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styling */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Awards;
