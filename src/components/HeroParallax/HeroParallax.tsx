"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Rocket,
} from "lucide-react";

interface CardData {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  detail: string;
  category: string;
  techStack: string[];
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "MVP Development for Startups",
    icon: Code,
    detail:
      "Rapid prototype development using AI tools to accelerate time-to-market for startups.",
    category: "Startup",
    techStack: ["ReactNative", "Firebase", "+1"],
  },
  {
    id: 2,
    title: "Legacy System Modernization",
    icon: Palette,
    detail:
      "Complete system transformation and modernization with zero downtime migration strategies.",
    category: "Modernization",
    techStack: ["Angular", "AWS", "+2"],
  },
  {
    id: 3,
    title: "Custom ERP & CRM Development",
    icon: Zap,
    detail:
      "Tailored enterprise solutions designed for performance, scalability, and seamless business operations.",
    category: "Enterprise",
    techStack: ["React.js", "Node.js", "+1"],
  },
  {
    id: 4,
    title: "AI-Powered SaaS Applications",
    icon: Shield,
    detail:
      "Intelligent SaaS platforms with machine learning integration and predictive analytics.",
    category: "AI SaaS",
    techStack: ["Next.js", "Python", "+1"],
  },
  {
    id: 5,
    title: "EdTech Learning Platform",
    icon: Globe,
    detail:
      "Interactive learning app with AI tutoring, personalized courses, and progress analytics.",
    category: "Mobile App",
    techStack: ["Flutter", "Firbase", "+2"],
  },
  {
    id: 6,
    title: "Mobile Banking",
    icon: Smartphone,
    detail:
      "Secure mobile banking app with biometric authentication and instant transfers.",
    category: "FinTech",
    techStack: ["React Native", "AWS", "+1"],
  },
  {
    id: 7,
    title: "Data Analytics Hub",
    icon: Database,
    detail:
      "Advanced analytics platform for big data processing and visualization.",
    category: "Analytics",
    techStack: ["PostgreSQL", "Tableau", "+2"],
  },
  {
    id: 8,
    title: "Deploy Assistant",
    icon: Rocket,
    detail:
      "Automated deployment pipeline with monitoring, rollbacks, and scaling capabilities.",
    category: "DevOps",
    techStack: ["Kubernetes", "Jenkins", "+1"],
  },
  {
    id: 9,
    title: "AI Chatbot Platform",
    icon: Code,
    detail: "Conversational AI platform for customer support and engagement.",
    category: "AI",
    techStack: ["Python", "TensorFlow", "+1"],
  },
  {
    id: 10,
    title: "Smart Home Controller",
    icon: Smartphone,
    detail: "IoT platform to control smart devices with automation rules.",
    category: "IoT",
    techStack: ["Node.js", "MQTT", "+2"],
  },
  {
    id: 11,
    title: "Virtual Event Hub",
    icon: Globe,
    detail: "Host virtual conferences and webinars with live analytics.",
    category: "Web App",
    techStack: ["React", "WebRTC", "+1"],
  },
  {
    id: 12,
    title: "Fitness Tracker",
    icon: Zap,
    detail: "Track workouts, heart rate, and activity with personalized goals.",
    category: "Mobile App",
    techStack: ["Flutter", "Firebase", "+1"],
  },
  {
    id: 13,
    title: "Crypto Portfolio",
    icon: Database,
    detail: "Monitor and manage crypto assets with real-time pricing alerts.",
    category: "FinTech",
    techStack: ["React", "CoinGecko API", "+1"],
  },
  {
    id: 14,
    title: "AR Shopping Experience",
    icon: Palette,
    detail: "Augmented reality app for visualizing products before purchase.",
    category: "Mobile App",
    techStack: ["Unity", "ARKit", "+2"],
  },
  {
    id: 15,
    title: "Cloud Storage Manager",
    icon: Rocket,
    detail: "Centralized platform for managing cloud storage across services.",
    category: "Cloud",
    techStack: ["AWS", "Node.js", "+1"],
  },
  {
    id: 16,
    title: "Marketing Automation",
    icon: Zap,
    detail: "Automate campaigns, email flows, and social media scheduling.",
    category: "SaaS",
    techStack: ["Python", "React", "+2"],
  },
];

interface ProductCardProps {
  card: CardData;
  translate: any;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ card, translate }) => {
  const Icon = card.icon;

  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -3, scale: 1.02 }}
      key={card.id}
      className="group/product relative m-1 h-auto w-[16rem] flex-shrink-0"
    >
      <div className="h-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900">
        {/* Icon */}
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500">
          <Icon className="h-5 w-5 text-white" />
        </div>

        {/* Category Badge */}
        <div className="mb-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
          {card.category}
        </div>

        {/* Title */}
        <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-gray-100">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mb-2 text-xs text-gray-600 dark:text-gray-400">
          {card.detail}
        </p>

        {/* Tech Stack */}
        <div className="mb-2 flex flex-wrap gap-1">
          {card.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View App Button */}
        <button className="w-full cursor-pointer rounded-xl border-1 border-[#0E9F9F] bg-teal-600 py-1.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black">
          View App
        </button>
      </div>
    </motion.div>
  );
};

const HeroParallax: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 400]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -400]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="relative flex h-[305vh] flex-col self-auto overflow-hidden bg-gradient-to-b from-[#f6fbfa] via-[#5797a0] to-[#dce0e5] py-4 antialiased [perspective:1000px] [transform-style:preserve-3d] dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
    >
      <Header />
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className=""
      >
        {/* Render rows of 4 cards */}
        {[0, 4, 8, 12, 16].map((startIndex, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={`mb-1 flex justify-center gap-1 ${
              rowIndex % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {cardData.slice(startIndex, startIndex + 4).map((card, index) => (
              <ProductCard
                card={card}
                translate={rowIndex % 2 === 0 ? translateX : translateXReverse}
                key={card.id}
                index={index}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <div className="relative top-0 left-0 mx-auto w-full max-w-7xl px-4 py-2 text-center md:py-4">
      <h1 className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white">
        Why Choose Wortholic?
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-600 md:text-lg dark:text-gray-400">
        We combine cutting-edge AI technology with proven development expertise
        to deliver solutions that drive real business results.
      </p>
    </div>
  );
};

export default HeroParallax;
