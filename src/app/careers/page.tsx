"use client";
import { Briefcase, Users, Lightbulb, Rocket, ArrowRight } from "lucide-react";

export default function Careers() {
  const openings = [
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      description:
        "Work on cutting-edge interfaces using React, Next.js, and Tailwind CSS to deliver seamless user experiences.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      type: "Full Time",
      location: "Hybrid - New York, USA",
      description:
        "Design and develop robust APIs and scalable backend services using Node.js, Express, and MongoDB.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      type: "Part Time",
      location: "Remote",
      description:
        "Create clean, modern, and accessible design systems and experiences aligned with our product vision.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-[#0b0f14] dark:text-gray-200 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-[#2E4864] text-white dark:bg-[#10151d] py-24 px-6 text-center transition-colors duration-300">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-100 dark:text-gray-300">
          Be part of a passionate team shaping the future of digital innovation.
          We believe in creativity, collaboration, and growth.
        </p>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4864] dark:text-[#5c9cff]">
          Why Work With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Users,
              title: "Collaborative Culture",
              desc: "Work with a talented and supportive team that values new ideas and innovation.",
            },
            {
              icon: Lightbulb,
              title: "Continuous Learning",
              desc: "Access to mentorship, workshops, and skill development opportunities to help you grow.",
            },
            {
              icon: Rocket,
              title: "Impactful Work",
              desc: "Be part of meaningful projects that make a difference in the digital world.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#18222e] shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition-colors duration-300"
            >
              <item.icon
                className="mx-auto text-[#2E4864] dark:text-[#5c9cff]"
                size={42}
              />
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-100 dark:bg-[#111820] py-20 px-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4864] dark:text-[#5c9cff]">
            Current Openings
          </h2>

          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-[#18222e] shadow-md hover:shadow-xl transition rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#2E4864] dark:text-[#5c9cff]">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {job.description}
                  </p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={16} /> {job.location}
                    </span>
                  </div>
                </div>

                <button className="mt-4 md:mt-0 bg-[#2E4864] dark:bg-[#5c9cff] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#243a50] dark:hover:bg-[#4882d6] flex items-center gap-2 transition">
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2E4864] dark:bg-[#10151d] text-white py-20 px-6 text-center transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow With Us?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-100 dark:text-gray-300">
          We’re always looking for passionate people who want to make an impact.
          Let’s build the future together.
        </p>
        <button className="bg-white text-[#2E4864] dark:bg-[#5c9cff] dark:text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-[#4882d6] transition">
          Send Your Resume
        </button>
      </section>
    </div>
  );
}
