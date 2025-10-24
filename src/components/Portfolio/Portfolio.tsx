"use client";
import React, { useState, useEffect } from "react";
import CoreExpertise from "../CoreExpertise/CoreExpertise";
import Image from "next/image";
import HeroParallax from "../HeroParallax/HeroParallax";
import Awards from "../Awards/Awards";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "E-learning Platform for All Businesses",
      description:
        "Features: multi-tenant learning, AI (STT, TTS, LLM), live/video classes, personalized recommendations, analytics dashboards, secure payments, parent/business tracking. Infra: Docker + Kubernetes orchestration, Redis caching, Kafka event streaming, Elasticsearch search, Prometheus/Grafana monitoring.",
      technologies: [
        "Next.js",
        "React",
        "Node",
        "Python (AI REST APIs)",
        "PostgreSQL",
        "Stripe/PayPal",
        "VideoCipher",
        "GraphQL/REST",
      ],
      image: "/images/portfolio/e-learning.jpg", // 🔹 replace with your upload
    },
    {
      title: "AI Chatbot & Virtual Shopping Assistant",
      description:
        "An AI-powered chatbot and virtual shopping assistant that guides customers with personalized recommendations, answers queries instantly, manages carts, tracks orders, and enhances the online journey through smart, real-time interactions.",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "Socket.io",
        "Redis",
        "AWS",
        "Docker",
      ],
      image: "/images/portfolio/ai-chat.jpg", // 🔹 replace with your upload
    },
    {
      title: "E-Commerce Multi-Vendor Platform",
      description:
        "A robust multi-vendor marketplace with advanced inventory management, real-time analytics, and AI-powered product recommendations. Includes vendor dashboards, payment processing, and comprehensive order management.",
      technologies: [
        "Next.js",
        "Django",
        "PostgreSQL",
        "Elasticsearch",
        "Stripe",
        "AWS S3",
        "Redis",
      ],
      image: "/images/portfolio/ecommerce.webp", // 🔹 replace with your upload
    },
    {
      title: "Real Estate CRM & Property Management",
      description:
        "Complete real estate management solution with property listings, client relationship management, virtual tours, and automated lead generation. Features advanced search filters and integrated communication tools.",
      technologies: [
        "Angular",
        "Spring Boot",
        "MongoDB",
        "Twilio",
        "AWS",
        "Elasticsearch",
        "Docker",
      ],
      image: "/images/portfolio/real-estate.png", // 🔹 replace with your upload
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="mt-20 min-h-screen">
      {/* Header */}
      {/* <HeroParallax /> */}
      <div className="mt-15 py-1 text-center">
        <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
          Portfolio
        </h1>
        <p className="mx-auto max-w-6xl px-4 pb-2 text-gray-600 dark:text-gray-300">
          How we turn complex ideas into powerful, custom-built software and
          apps that drive real business results.
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full bg-white/30 px-8 py-16 backdrop-blur-lg dark:bg-black/30"
            >
              <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Left side (Monitor with image) */}
                <div className="flex flex-1 justify-center">
                  <div className="relative">
                    <div className="relative h-64 w-96 overflow-hidden rounded-lg border-8 border-gray-800 bg-black shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="relative mx-auto -mt-1 h-6 w-20 rounded-b-lg bg-gray-700"></div>
                    <div className="mx-auto h-4 w-32 rounded-full bg-gray-600"></div>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex-1 pl-12">
                  <div className="transform rounded-lg border border-gray-300 bg-white/70 p-8 shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105 dark:border-gray-700 dark:bg-black/70">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h2>

                    <div className="mb-6 flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="rounded-full bg-gray-100/50 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700/50 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    <button className="cursor-pointer rounded-lg border-2 border-[#0E9F9F] bg-teal-500/90 px-6 py-2 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black">
                      View Case Study →
                    </button>
                  </div>
                </div>

                {/* Decorative Sphere */}
                <div className="absolute top-8 right-8 h-32 w-32">
                  <div className="relative h-full w-full animate-pulse overflow-hidden rounded-full bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600 shadow-2xl dark:from-teal-700 dark:via-teal-600 dark:to-teal-800">
                    <div className="absolute top-4 left-6 h-8 w-8 rounded-full bg-white opacity-30 blur-sm"></div>
                    <div className="absolute top-2 left-4 h-4 w-4 rounded-full bg-white opacity-50 blur-xs"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-4 rounded-full border-2 transition-all duration-300 ${
                index === currentSlide
                  ? "scale-125 border-white bg-teal-500 dark:border-gray-200"
                  : "border-gray-300 bg-white/40 hover:bg-white/70 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white/70 p-3 shadow-lg backdrop-blur transition-all duration-200 hover:scale-110 dark:bg-black/70"
        >
          <svg
            className="h-6 w-6 text-teal-600 dark:text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white/70 p-3 shadow-lg backdrop-blur transition-all duration-200 hover:scale-110 dark:bg-black/70"
        >
          <svg
            className="h-6 w-6 text-teal-600 dark:text-teal-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-black/10 dark:bg-white/10">
          <div
            className="h-full bg-teal-500 transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / projects.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Core Expertise */}
      <CoreExpertise />
      <Awards />
    </div>
  );
};

export default Portfolio;
