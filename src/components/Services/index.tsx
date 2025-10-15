"use client";
import { useState } from "react";

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const [services] = useState([
    {
      id: 1,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 12.5H10C7.23858 12.5 5 14.7386 5 17.5V42.5C5 45.2614 7.23858 47.5 10 47.5H50C52.7614 47.5 55 45.2614 55 42.5V17.5C55 14.7386 52.7614 12.5 50 12.5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M15 22.5H25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 27.5H35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 32.5H30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Custom websites, web applications, e-commerce platforms, and responsive designs using latest technologies like React, Next.js, Vue.js, and more.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Development",
        "Progressive Web Apps",
      ],
      projects: [
        {
          name: "E-commerce Platform",
          tech: "Next.js, Stripe",
          status: "Live",
        },
        {
          name: "Corporate Website",
          tech: "React, TypeScript",
          status: "Live",
        },
        { name: "SaaS Dashboard", tech: "Vue.js, Node.js", status: "Live" },
        // Add more projects here
      ],
    },
    {
      id: 2,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="15"
            y="10"
            width="6"
            height="40"
            rx="3"
            fill="currentColor"
          />
          <rect
            x="27"
            y="20"
            width="6"
            height="30"
            rx="3"
            fill="currentColor"
          />
          <rect
            x="39"
            y="15"
            width="6"
            height="35"
            rx="3"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, Swift, and Kotlin.",
      features: [
        "Native iOS/Android",
        "Cross-platform",
        "UI/UX Design",
        "App Store Optimization",
      ],
      projects: [
        { name: "Food Delivery App", tech: "React Native", status: "Live" },
        { name: "Fitness Tracker", tech: "Flutter", status: "Live" },
        { name: "E-learning App", tech: "Native iOS/Android", status: "Live" },
        // Add more mobile apps here
      ],
    },
    {
      id: 3,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="30"
            cy="30"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
          <path d="M30 5L35 15H25L30 5Z" fill="currentColor" />
          <path d="M55 30L45 35V25L55 30Z" fill="currentColor" />
          <path d="M30 55L25 45H35L30 55Z" fill="currentColor" />
          <path d="M5 30L15 25V35L5 30Z" fill="currentColor" />
        </svg>
      ),
      title: "Artificial Intelligence & Machine Learning",
      description:
        "AI-powered solutions, machine learning models, natural language processing, computer vision, and intelligent automation systems.",
      features: [
        "ML Model Development",
        "Computer Vision",
        "NLP Solutions",
        "AI Automation",
      ],
      projects: [
        {
          name: "Chatbot AI Assistant",
          tech: "Python, OpenAI",
          status: "Live",
        },
        {
          name: "Image Recognition System",
          tech: "TensorFlow, CV",
          status: "Live",
        },
        {
          name: "Predictive Analytics Platform",
          tech: "ML, Python",
          status: "Development",
        },
        // Add more AI projects here
      ],
    },
    {
      id: 4,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="20"
            width="40"
            height="25"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="15"
            y="15"
            width="30"
            height="5"
            rx="2.5"
            fill="currentColor"
          />
          <circle cx="20" cy="30" r="3" fill="currentColor" />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <circle cx="40" cy="30" r="3" fill="currentColor" />
        </svg>
      ),
      title: "Cloud Solutions & DevOps",
      description:
        "Cloud migration, AWS/Azure/GCP services, containerization, CI/CD pipelines, and infrastructure management.",
      features: [
        "Cloud Migration",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
      ],
    },
    {
      id: 5,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="15"
            y="15"
            width="30"
            height="30"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M25 25H35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M25 30H35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M25 35H32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="30"
            cy="30"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
        </svg>
      ),
      title: "Enterprise Software Development",
      description:
        "Custom enterprise applications, ERP systems, CRM solutions, and business process automation tools.",
      features: [
        "ERP Systems",
        "CRM Solutions",
        "Business Intelligence",
        "Process Automation",
      ],
    },
    {
      id: 6,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M32 27L28 33"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="40" cy="40" r="3" fill="currentColor" />
        </svg>
      ),
      title: "API Development & Integration",
      description:
        "RESTful APIs, GraphQL, microservices architecture, third-party integrations, and API security implementation.",
      features: [
        "REST & GraphQL APIs",
        "Microservices",
        "Third-party Integration",
        "API Security",
      ],
    },
    {
      id: 7,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="15"
            width="40"
            height="30"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="30"
            cy="30"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <path d="M15 25L25 20" stroke="currentColor" strokeWidth="1.5" />
          <path d="M45 25L35 20" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 35L25 40" stroke="currentColor" strokeWidth="1.5" />
          <path d="M45 35L35 40" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
      title: "Database Design & Management",
      description:
        "Database architecture, optimization, migration, backup strategies, and performance tuning for SQL and NoSQL databases.",
      features: [
        "Database Architecture",
        "Performance Optimization",
        "Data Migration",
        "Backup & Recovery",
      ],
    },
    {
      id: 8,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="12"
            y="12"
            width="36"
            height="36"
            rx="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="30"
            cy="30"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="30" cy="30" r="4" fill="currentColor" />
          <path d="M20 20L25 25" stroke="currentColor" strokeWidth="2" />
          <path d="M40 20L35 25" stroke="currentColor" strokeWidth="2" />
          <path d="M20 40L25 35" stroke="currentColor" strokeWidth="2" />
          <path d="M40 40L35 35" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "User interface design, user experience optimization, prototyping, wireframing, and design system development.",
      features: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
    },
    {
      id: 9,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 5L40 25H20L30 5Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="30"
            cy="45"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M25 35L35 35" stroke="currentColor" strokeWidth="2" />
          <circle cx="30" cy="45" r="3" fill="currentColor" />
        </svg>
      ),
      title: "Quality Assurance & Testing",
      description:
        "Automated testing, manual testing, performance testing, security testing, and continuous quality assurance.",
      features: [
        "Automated Testing",
        "Manual Testing",
        "Performance Testing",
        "Security Testing",
      ],
    },
    {
      id: 10,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="40"
            height="40"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20 30L27 37L40 23"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="45"
            cy="15"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M42 15L45 18L48 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Cybersecurity Solutions",
      description:
        "Security audits, penetration testing, secure coding practices, compliance, and security infrastructure implementation.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance",
        "Security Infrastructure",
      ],
    },
    {
      id: 11,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="30" cy="30" r="15" fill="currentColor" opacity="0.1" />
          <path
            d="M20 20L40 40M40 20L20 40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="15" cy="15" r="3" fill="currentColor" />
          <circle cx="45" cy="15" r="3" fill="currentColor" />
          <circle cx="15" cy="45" r="3" fill="currentColor" />
          <circle cx="45" cy="45" r="3" fill="currentColor" />
        </svg>
      ),
      title: "IoT Development",
      description:
        "Internet of Things solutions, sensor integration, device connectivity, data analytics, and IoT platform development.",
      features: [
        "IoT Platforms",
        "Sensor Integration",
        "Device Connectivity",
        "Data Analytics",
      ],
    },
    {
      id: 12,
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5"
            y="20"
            width="50"
            height="20"
            rx="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="15" cy="30" r="5" fill="currentColor" />
          <circle cx="30" cy="30" r="5" fill="currentColor" />
          <circle cx="45" cy="30" r="5" fill="currentColor" />
          <path
            d="M15 15V10M30 15V5M45 15V10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 45V50M30 45V55M45 45V50"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Blockchain Development",
      description:
        "Smart contracts, DeFi applications, NFT platforms, cryptocurrency solutions, and blockchain integration services.",
      features: [
        "Smart Contracts",
        "DeFi Applications",
        "NFT Platforms",
        "Cryptocurrency Solutions",
      ],
    },
  ]);

  return (
    <section
      id="services"
      className="bg-white py-8 md:py-12 lg:py-16 dark:bg-black"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-8 max-w-[510px] text-center lg:mb-12">
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-3xl dark:text-white">
                Our Services
              </h2>
              <p className="text-body-color dark:text-body-color-dark text-base">
                From web development to AI solutions, our team of 100+
                experienced developers, engineers, and researchers provides
                comprehensive software services to transform your business.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {services.map((service) => (
            <div key={service.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="group shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark mb-10 rounded-sm bg-white p-8 duration-300 lg:px-5 xl:px-8">
                <div className="bg-primary bg-opacity-10 text-primary mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md">
                  {service.icon}
                </div>
                <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  {service.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark mb-5 text-base leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-5">
                  <h4 className="mb-2 text-sm font-medium text-black dark:text-white">
                    Key Features:
                  </h4>
                  <ul className="text-body-color dark:text-body-color-dark list-inside list-disc">
                    {service.features.map((feature, index) => (
                      <li key={index} className="mb-1 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.projects && (
                  <div className="mb-5">
                    <button
                      onClick={() =>
                        setExpandedService(
                          expandedService === service.id ? null : service.id,
                        )
                      }
                      className="hover:text-primary mb-3 flex w-full items-center justify-between text-sm font-medium text-black dark:text-white"
                    >
                      <span>Our Projects ({service.projects.length})</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          expandedService === service.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {expandedService === service.id && (
                      <div className="max-h-48 space-y-3 overflow-y-auto">
                        {service.projects.map((project, index) => (
                          <div
                            key={index}
                            className="rounded-md bg-gray-50 p-3 dark:bg-gray-800"
                          >
                            <h5 className="text-sm font-medium text-black dark:text-white">
                              {project.name}
                            </h5>
                            <p className="text-body-color dark:text-body-color-dark mt-1 text-xs">
                              Tech: {project.tech}
                            </p>
                            <span className="mt-2 inline-block rounded bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">
                              {project.status}
                            </span>
                          </div>
                        ))}
                        <div className="rounded-md border-2 border-dashed border-gray-300 p-3 text-center dark:border-gray-600">
                          <p className="text-body-color dark:text-body-color-dark text-xs italic">
                            + Add more {service.title.toLowerCase()} projects
                            here
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <button className="bg-primary hover:bg-primary/90 hover-underline w-full rounded-xs px-6 py-3 text-base font-medium text-white duration-300 ease-in-out">
                  View All Projects
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
