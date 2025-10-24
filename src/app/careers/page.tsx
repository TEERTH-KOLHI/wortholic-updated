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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#2E4864] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Be part of a passionate team shaping the future of digital innovation.
          We believe in creativity, collaboration, and growth.
        </p>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4864]">
          Why Work With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
            <Users className="mx-auto text-[#2E4864]" size={42} />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Collaborative Culture
            </h3>
            <p>
              Work with a talented and supportive team that values new ideas and
              innovation.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
            <Lightbulb className="mx-auto text-[#2E4864]" size={42} />
            <h3 className="text-xl font-semibold mt-4 mb-2">
              Continuous Learning
            </h3>
            <p>
              Access to mentorship, workshops, and skill development
              opportunities to help you grow.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
            <Rocket className="mx-auto text-[#2E4864]" size={42} />
            <h3 className="text-xl font-semibold mt-4 mb-2">Impactful Work</h3>
            <p>
              Be part of meaningful projects that make a difference in the
              digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4864]">
            Current Openings
          </h2>

          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#2E4864]">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Briefcase size={16} /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={16} /> {job.location}
                    </span>
                  </div>
                </div>

                <button className="mt-4 md:mt-0 bg-[#2E4864] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#243a50] flex items-center gap-2">
                  Apply Now <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2E4864] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Grow With Us?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          We’re always looking for passionate people who want to make an impact.
          Let’s build the future together.
        </p>
        <button className="bg-white text-[#2E4864] font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition">
          Send Your Resume
        </button>
      </section>
    </div>
  );
}
