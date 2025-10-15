"use client";
import React, { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const WortholicLanding = () => {
  const [isBoxHovered, setIsBoxHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const services = [
    {
      title: "AI-Driven Development Assistants",
      content:
        "Enhance productivity with AI-driven coding support that transforms how your team writes, reviews, and optimizes code.",
      bullets: [
        "Intelligent code completion and suggestion systems",
        "Automated code review and quality assurance",
        "Real-time debugging and performance optimization",
      ],
      gradient: "from-purple-500 to-purple-700",
      bgColor:
        "bg-purple-50 border border-gray-200 dark:bg-black/30 dark:backdrop-blur-md dark:border dark:border-white/10",
      accentColor: "text-purple-600 dark:text-gray-100",
    },
    {
      title: "AI-Driven MVP Development",
      content:
        "Transform your ideas into market-ready products at record speed. We leverage AI agents to rapidly design, build, and deploy MVPs.",
      bullets: [
        "Turn concepts into functional prototypes quickly",
        "Shorten iteration cycles and minimize risks",
        "AI-powered feature prioritization",
      ],
      gradient: "from-blue-500 to-blue-700",
      bgColor:
        "bg-blue-50 border border-gray-200 dark:bg-black/30 dark:backdrop-blur-md dark:border dark:border-white/10",
      accentColor: "text-blue-600 dark:text-gray-100",
    },
    {
      title: "Cloud-Native AI Platforms",
      content:
        "Deploy scalable AI solutions directly in the cloud with enterprise-grade reliability and security.",
      bullets: [
        "Serverless and containerized deployment",
        "Autoscaling AI workloads",
        "Integrated monitoring and logging",
      ],
      gradient: "from-teal-500 to-teal-700",
      bgColor:
        "bg-teal-50 border border-gray-200 dark:bg-black/30 dark:backdrop-blur-md dark:border dark:border-white/10",
      accentColor: "text-teal-600 dark:text-gray-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <div className="p-4">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border dark:border-white/10 dark:bg-black/30 dark:backdrop-blur-md"
              style={{ position: "sticky", top: "1rem" }}
            >
              <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 dark:text-white">
                AI-Driven Development Excellence :
                <br />
                <span className="text-black dark:text-gray-100">
                  Faster Results with Cursor AI & GitHub Copilot
                </span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Wortholic blends AI expertise with agile development to help
                startups and enterprises build, test, and launch digital
                products faster while maintaining quality and scalability.
              </p>
              <div className="space-y-4">
                {[
                  "Rapid Product Iterations",
                  "80% Less Development Overhead",
                  "Human-AI Collaboration",
                  "Scalable, Secure Solutions",
                  "Web, Mobile & API-First Expertise",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-teal-500 dark:text-[#1ee3d2]" />
                    <span className="text-lg text-gray-800 dark:text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Smaller Sticky Cards */}
          <div className="relative">
            {services.map((service, i) => (
              <div
                key={i}
                className={`relative flex min-h-[18em] flex-col justify-between rounded-2xl shadow-xl ${service.bgColor} mb-4`}
                style={{
                  position: "sticky",
                  top: "1rem",
                  transform: `translate(${i * 0.5}em, ${i * 0.5}em)`,
                }}
              >
                {/* Content (no top gradient bar) */}
                <div className="flex flex-grow flex-col p-4">
                  <h3
                    className={`mb-2 text-xl font-bold ${service.accentColor}`}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-3 line-clamp-2 text-sm text-gray-700 dark:text-gray-200">
                    {service.content}
                  </p>

                  {service.bullets && (
                    <div className="mb-4 space-y-2 text-sm">
                      {service.bullets.slice(0, 3).map((b, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div
                            className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-r ${service.gradient}`}
                          />
                          <span className="line-clamp-1 text-gray-700 dark:text-gray-200">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Smaller Interactive Box */}
                  <div
                    className="relative mb-3 h-20 w-full cursor-none overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-blue-100 to-blue-200 dark:border dark:border-white/10 dark:from-gray-700/40 dark:to-gray-600/40 dark:backdrop-blur-md"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsBoxHovered(true)}
                    onMouseLeave={() => setIsBoxHovered(false)}
                  >
                    <div
                      className="absolute flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transition-all duration-300 ease-out"
                      style={{
                        left: isBoxHovered
                          ? `${Math.min(Math.max(mousePosition.x - 16, 0), 120)}px`
                          : "10px",
                        top: isBoxHovered
                          ? `${Math.min(Math.max(mousePosition.y - 16, 0), 60)}px`
                          : "10px",
                        transform: isBoxHovered
                          ? "rotate(15deg) scale(1.05)"
                          : "rotate(0deg) scale(1)",
                      }}
                    />
                    <div
                      className="absolute flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 shadow-md transition-all duration-500 ease-out"
                      style={{
                        right: isBoxHovered
                          ? `${mousePosition.x / 6}px`
                          : "20px",
                        bottom: isBoxHovered
                          ? `${mousePosition.y / 8}px`
                          : "20px",
                        transform: isBoxHovered ? "scale(1.1)" : "scale(1)",
                      }}
                    >
                      <div className="h-3 w-3 rounded-full bg-blue-600" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-700 opacity-70 dark:text-gray-200">
                        Interactive AI
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Learn More
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-colors duration-300 ${service.accentColor}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Client Testimonials Section */}
      <TestimonialSlider />
    </div>
  );
};

export default WortholicLanding;
