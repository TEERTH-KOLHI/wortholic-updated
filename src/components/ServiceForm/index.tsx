"use client";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaTools,
  FaLevelUpAlt,
  FaRegCommentDots,
} from "react-icons/fa";

interface ServiceFormProps {
  serviceType: string;
  title: string;
  description: string;
}

const ServiceForm = ({ serviceType, title, description }: ServiceFormProps) => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[120px] xl:pb-[10px] 2xl:pt-[210px] 2xl:pb-[200px] dark:bg-black">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="mx-auto w-full px-4 lg:w-8/12 xl:w-9/12">
            <div
              className="shadow-three mb-12 rounded-xl border border-gray-300 bg-white/90 px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] dark:border-gray-700 dark:bg-transparent dark:backdrop-blur-md"
              data-wow-delay=".15s"
            >
              <h1 className="mb-3 text-3xl font-bold text-black sm:text-4xl lg:text-3xl xl:text-4xl dark:text-white">
                {title}
              </h1>
              <p className="text-body-color mb-12 text-base font-medium">
                {description}
              </p>
              <form
                action="mailto:wortholicai@gmail.com"
                method="post"
                encType="text/plain"
              >
                <input type="hidden" name="service-type" value={serviceType} />
                <div className="-mx-4 flex flex-wrap">
                  {/* Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                        Your Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-white" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          className="border-stroke text-body-color focus:border-primary dark:focus:border-primary w-full border bg-[#f8f8f8] py-3 pl-10 text-base outline-hidden dark:border-gray-600 dark:bg-[#2C303B]/50 dark:text-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                        Your Email *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-white" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          className="border-stroke text-body-color focus:border-primary dark:focus:border-primary w-full border bg-[#f8f8f8] py-3 pl-10 text-base outline-hidden dark:border-gray-600 dark:bg-[#2C303B]/50 dark:text-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-white" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter your phone number"
                          className="border-stroke text-body-color focus:border-primary dark:focus:border-primary w-full border bg-[#f8f8f8] py-3 pl-10 text-base outline-hidden dark:border-gray-600 dark:bg-[#2C303B]/50 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                        Company Name
                      </label>
                      <div className="relative">
                        <FaBuilding className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-white" />
                        <input
                          type="text"
                          name="company"
                          placeholder="Enter your company name"
                          className="border-stroke text-body-color focus:border-primary dark:focus:border-primary w-full border bg-[#f8f8f8] py-3 pl-10 text-base outline-hidden dark:border-gray-600 dark:bg-[#2C303B]/50 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hire Developer Fields */}
                  {serviceType === "hire-developer" && (
                    <>
                      {/* Required Skills */}
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                            Required Skills *
                          </label>
                          <div className="relative">
                            <FaTools className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-white" />
                            <select
                              name="skills"
                              className="border-stroke text-body-color focus:border-primary w-full border bg-[#f8f8f8] py-3 pl-10 text-base outline-hidden dark:border-gray-600 dark:bg-[#2C303B]/90 dark:text-white [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-[#2C303B] dark:[&>option]:text-white"
                              required
                            >
                              <option value="">Select primary skill</option>
                              <option value="react-nextjs">
                                React/Next.js
                              </option>
                              <option value="node-express">
                                Node.js/Express
                              </option>
                              <option value="python-django">
                                Python/Django
                              </option>
                              <option value="php-laravel">PHP/Laravel</option>
                              <option value="java-spring">Java/Spring</option>
                              <option value="dotnet">C#/.NET</option>
                              <option value="mobile-flutter">
                                Flutter/React Native
                              </option>
                              <option value="ai-ml">AI/ML Engineer</option>
                              <option value="devops">DevOps Engineer</option>
                              <option value="ui-ux">UI/UX Designer</option>
                              <option value="full-stack">
                                Full Stack Developer
                              </option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Experience Level */}
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                            Experience Level *
                          </label>
                          <div className="relative">
                            <FaLevelUpAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-black dark:text-white" />
                            <select
                              name="experience"
                              className="border-stroke text-body-color focus:border-primary w-full border bg-[#f8f8f8] py-3 pl-10 text-base outline-hidden dark:border-gray-600 dark:bg-[#2C303B]/90 dark:text-white [&>option]:bg-white [&>option]:text-black dark:[&>option]:bg-[#2C303B] dark:[&>option]:text-white"
                              required
                            >
                              <option value="">Select experience level</option>
                              <option value="junior">Junior (1-3 years)</option>
                              <option value="mid">Mid-level (3-5 years)</option>
                              <option value="senior">Senior (5+ years)</option>
                              <option value="lead">
                                Lead/Architect (8+ years)
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Message */}
                  <div className="w-full px-4">
                    <div className="mb-3">
                      <label className="text-dark mb-3 block text-sm font-medium dark:text-white">
                        Project Requirements *
                      </label>
                      <div className="relative">
                        <FaRegCommentDots className="absolute top-4 left-3 text-black dark:text-white" />
                        <textarea
                          name="message"
                          rows={6}
                          placeholder="Please describe your project requirements, timeline, and any specific details..."
                          className="border-stroke text-body-color focus:border-primary dark:focus:border-primary w-full resize-none border bg-[#f8f8f8] py-3 pl-10 text-base outline-hidden dark:border-gray-600 dark:bg-[#2C303B]/50 dark:text-white"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="flex cursor-pointer items-center justify-center rounded-[4px] border-2 border-[#0E9F9F] bg-[#0E9F9F] px-4 py-2 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;
