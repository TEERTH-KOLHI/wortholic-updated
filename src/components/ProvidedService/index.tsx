"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

type Service = {
  id: number;
  title: string;
  content: string;
  color: string;
  icon: React.ReactNode;
  button?: boolean;
};

const services: Service[] = [
  {
    id: 1,
    title: "Web & Mobile Apps Development",
    content:
      "Our Web and Mobile App Development services are designed to empower businesses with custom, scalable, and intelligent solutions tailored to their unique needs. We build web and mobile applications that streamline processes, enhance user engagement, and boost overall operational efficiency. By leveraging modern technologies, responsive designs, robust security measures, and AI-driven features, our solutions deliver seamless performance across devices and platforms. From e-commerce portals and enterprise dashboards to SaaS platforms and interactive apps, we ensure each solution is optimized for speed, usability, and scalability. AI integration enables smarter analytics, personalized experiences, and automated workflows, helping businesses make informed decisions and stay ahead of the competition. With our expertise, organizations gain innovative digital tools that drive growth, improve collaboration, and maintain a strong competitive edge in today’s fast-paced digital world, ensuring long-term adaptability and success.",
    color: "bg-[#EAF3FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900 dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect
          x="2"
          y="6"
          width="14"
          height="10"
          rx="2"
          ry="2"
          strokeWidth={2}
        />
        <path d="M22 12h-4v6h4v-6zM6 20h8" strokeWidth={2} />
      </svg>
    ),
  },
  {
    id: 2,
    title: "AI Products Development",
    content:
      "Our AI Products Development services are crafted to help businesses leverage artificial intelligence to create intelligent, efficient, and scalable solutions tailored to their specific needs. We develop AI-driven products that automate workflows, enhance decision-making, and deliver personalized experiences for users. By integrating advanced machine learning, natural language processing, computer vision, and predictive analytics, our solutions provide powerful insights and actionable results across industries. From smart chatbots, recommendation engines, and virtual assistants to predictive analytics platforms, fraud detection systems, and intelligent automation tools, we ensure each product is designed for performance, scalability, and reliability. Our AI solutions empower businesses to optimize operations, improve customer engagement, and gain a competitive advantage in today’s rapidly evolving digital landscape. With our expertise, organizations acquire innovative AI products that drive growth, enable smarter strategies, and ensure long-term adaptability and success.",
    color: "bg-[#EAF3FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900 dark:text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 2a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7s7-3.1 7-7a7 7 0 0 0-7-7zm0 18v2m-4-2.5l-1.5 1.5M4 12H2m2.5-4L3 6.5M20 12h2m-2.5-4L21 6.5M16 21.5l1.5-1.5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "AI / ML Development",
    content:
      "Our AI/ML Development services are designed to help businesses harness the power of artificial intelligence and machine learning to drive innovation and growth. We build custom AI and ML solutions tailored to your specific needs, including predictive analytics, recommendation systems, natural language processing, computer vision, and intelligent automation. By leveraging advanced algorithms and data-driven insights, our solutions enable smarter decision-making, optimize operations, and enhance customer experiences. Scalable and adaptable, these AI/ML platforms evolve with your business, providing actionable insights, automating complex processes, and maintaining a competitive edge. With our expertise, organizations can transform raw data into strategic assets, achieve operational excellence, and unlock long-term value while staying ahead in a rapidly changing technological landscape.",
    color: "bg-[#EAF3FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900 dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="6" cy="6" r="2" strokeWidth={2} />
        <circle cx="18" cy="6" r="2" strokeWidth={2} />
        <circle cx="6" cy="18" r="2" strokeWidth={2} />
        <circle cx="18" cy="18" r="2" strokeWidth={2} />
        <line x1="8" y1="6" x2="16" y2="6" strokeWidth={2} />
        <line x1="6" y1="8" x2="6" y2="16" strokeWidth={2} />
        <line x1="18" y1="8" x2="18" y2="16" strokeWidth={2} />
        <line x1="8" y1="18" x2="16" y2="18" strokeWidth={2} />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Business Automation",
    content:
      "Our Business Automation services are designed to help companies streamline operations, reduce manual effort, and improve overall efficiency. We create automated solutions that optimize workflows, enhance collaboration, and minimize errors across departments. By leveraging AI, RPA (Robotic Process Automation), and smart workflow tools, businesses can achieve faster processes and data-driven decision-making. From automated invoicing, inventory management, and CRM workflows to employee onboarding systems, report generation, and customer support automation, we ensure each solution is reliable, scalable, and tailored to your business needs. Our automation services empower organizations to save time, reduce costs, improve productivity, and maintain a competitive edge in today’s fast-paced digital landscape, ensuring long-term growth and operational excellence.",
    color: "bg-[#EAF3FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900 dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect x="3" y="3" width="6" height="6" strokeWidth={2} />
        <rect x="15" y="3" width="6" height="6" strokeWidth={2} />
        <rect x="9" y="15" width="6" height="6" strokeWidth={2} />
        <path d="M6 9v6m12-6v6M9 6h6" strokeWidth={2} />
      </svg>
    ),
  },
  {
    id: 5,
    title: "AI Educators Developement",
    content:
      "Our AI Educators Development services are designed to help institutions and training organizations build intelligent, interactive, and personalized learning solutions. We develop AI-powered educational tools that enhance teaching effectiveness, improve learner engagement, and provide data-driven insights for better outcomes. By leveraging machine learning, natural language processing, and adaptive learning technologies, our solutions deliver customized learning experiences that evolve with each student. From virtual tutors, intelligent content recommendation systems, and automated grading tools to AI-driven curriculum planners and interactive learning platforms, we ensure each solution is scalable, reliable, and aligned with educational goals. Our AI educators empower organizations to enhance knowledge delivery, streamline administrative tasks, and provide a more engaging, effective learning experience, ensuring long-term impact and continuous improvement in education.",
    color: "bg-[#EAF3FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900 dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "AI CRM Development",
    content:
      "We build AI-powered CRM solutions that help businesses manage customer relationships smarter, automate sales processes, and enhance client retention. Unlike traditional CRMs, our platforms leverage artificial intelligence to provide predictive lead scoring, intelligent customer insights, automated follow-ups, and personalized engagement. By integrating machine learning, natural language processing, and smart analytics, our AI CRM turns data into actionable insights, enabling businesses to make informed decisions and improve operational efficiency. From AI-driven sales forecasting, chatbot-assisted support, and automated reporting to personalized marketing recommendations, our solutions are flexible, scalable, and designed around your unique workflows. Trusted by clients globally, our AI CRMs empower organizations to enhance customer experience, boost productivity, and drive measurable growth, ensuring long-term success in today’s competitive market.",
    color: "bg-[#EAF3FF]",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-900 dark:text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="9" cy="7" r="4" strokeWidth={2} />
        <circle cx="17" cy="11" r="3" strokeWidth={2} />
        <path d="M2 21c0-3.5 3.5-6 7-6s7 2.5 7 6" strokeWidth={2} />
        <path d="M14 21c0-2.5 2-4 4-4s4 1.5 4 4" strokeWidth={2} />
      </svg>
    ),
    button: true,
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(1);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-3 text-center text-2xl font-semibold text-gray-900 dark:text-white">
        Services <span className="font-bold">That We Provide</span>
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600 dark:text-gray-300">
        We deliver intelligent, scalable, and future-ready software solutions
        designed to accelerate growth and streamline operations. From custom
        apps to enterprise platforms, every project is powered by AI innovation
        and expert craftsmanship.
      </p>

      {/* Responsive Layout */}
      <div className="relative flex flex-col gap-6 lg:min-h-[400px] lg:flex-row">
        {/* Left Service Boxes */}
        <div className="w-full space-y-3 lg:w-80 lg:pr-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`cursor-pointer overflow-hidden rounded-lg shadow transition-all duration-200 ${
                hoveredId === service.id
                  ? "scale-105 shadow-lg"
                  : "hover:shadow-md"
              } ${service.color} dark:bg-gray-800`}
              onMouseEnter={() => setHoveredId(service.id)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {service.title}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 text-gray-600 transition-transform duration-200 dark:text-gray-300 ${
                    hoveredId === service.id ? "rotate-90" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Detail Panel */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {hoveredId && (
              <motion.div
                key={hoveredId}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="lg:sticky lg:top-4"
              >
                {services
                  .filter((service) => service.id === hoveredId)
                  .map((service) => (
                    <div
                      key={service.id}
                      className={`rounded-lg p-6 shadow-lg ${service.color} dark:bg-gray-800`}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        {service.icon}
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                        {service.content}
                      </p>
                    </div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
