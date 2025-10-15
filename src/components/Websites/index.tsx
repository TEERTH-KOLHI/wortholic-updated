"use client";
import { useState } from "react";
import Link from "next/link";

const Websites = () => {
  const [websites] = useState([
    // Add your websites here
    {
      id: 1,
      name: "Website Project 1",
      description: "Description of your first website project",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      url: "https://example1.com",
      image: "/images/websites/website1.jpg"
    },
    // Add more websites as needed
  ]);

  return (
    <section id="websites" className="bg-white dark:bg-black py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Websites
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-3xl">
                Web Development Portfolio
              </h2>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Explore our collection of high-quality websites and web applications. Our expert team creates modern, responsive, and user-friendly web solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {websites.length > 0 ? (
            websites.map((website) => (
              <div key={website.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 group rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                  <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5"
                        y="10"
                        width="40"
                        height="30"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <line
                        x1="5"
                        y1="18"
                        x2="45"
                        y2="18"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                      <circle cx="17" cy="14" r="1.5" fill="currentColor" />
                      <circle cx="22" cy="14" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {website.name}
                  </h3>
                  <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {website.description}
                  </p>
                  <div className="mb-5">
                    <h4 className="mb-2 text-sm font-medium text-black dark:text-white">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {website.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded bg-primary bg-opacity-10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xs bg-primary px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <div className="mb-10 group rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
                  <div className="mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mx-auto">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="5"
                        y="8"
                        width="40"
                        height="30"
                        rx="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                      <line
                        x1="5"
                        y1="16"
                        x2="45"
                        y2="16"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                      <circle cx="17" cy="12" r="1.5" fill="currentColor" />
                      <circle cx="22" cy="12" r="1.5" fill="currentColor" />
                      <rect
                        x="12"
                        y="22"
                        width="26"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                      <rect
                        x="12"
                        y="27"
                        width="20"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                      <rect
                        x="12"
                        y="32"
                        width="24"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Website Portfolio Coming Soon
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    Our portfolio of custom websites and web applications will be showcased here. From e-commerce platforms to corporate websites, our team delivers high-quality web solutions tailored to your needs.
                  </p>
                  <div className="mt-6">
                    <p className="text-sm text-body-color dark:text-body-color-dark italic">
                      You can add your website projects by editing the websites array in this component.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Websites;