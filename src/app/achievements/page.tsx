"use client";
import React from "react";
import {
  Award,
  Globe,
  Users,
  Briefcase,
  CheckCircle2,
  Target,
  Star,
  Rocket,
} from "lucide-react";

const Achievements = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#2E4864] via-[#2E4864] to-[#203449] text-white px-6">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Our Achievements
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#e0e7ef]">
            A journey of innovation, excellence, and trust — celebrating the
            milestones that shaped Wortholic.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-center px-6">
          {[
            { icon: Briefcase, num: "500+", text: "Projects Delivered" },
            { icon: Users, num: "300M+", text: "End-users Impacted" },
            { icon: Globe, num: "50+", text: "Countries Served" },
            { icon: CheckCircle2, num: "95%", text: "Client Retention Rate" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 shadow-md hover:shadow-2xl transition rounded-2xl"
            >
              <item.icon className="mx-auto mb-4 h-10 w-10 text-[#2E4864]" />
              <h2 className="text-4xl font-extrabold text-[#2E4864]">
                {item.num}
              </h2>
              <p className="mt-2 text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#2E4864]">
          Milestone Timeline
        </h2>
        <div className="relative border-l-4 border-[#2E4864] pl-8 space-y-10">
          {[
            {
              year: "2021",
              icon: Rocket,
              desc: "Launched our first AI-powered CRM platform.",
            },
            {
              year: "2022",
              icon: Globe,
              desc: "Expanded our services to 30+ countries worldwide.",
            },
            {
              year: "2023",
              icon: Users,
              desc: "Surpassed 100 million active users across platforms.",
            },
            {
              year: "2024",
              icon: Award,
              desc: "Recognized among fastest-growing AI firms.",
            },
            {
              year: "2025",
              icon: Target,
              desc: "Global rollout of next-gen AI SaaS & automation tools.",
            },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-4 top-2 w-4 h-4 bg-[#2E4864] rounded-full"></div>
              <div className="flex items-center gap-3">
                <item.icon className="h-6 w-6 text-[#2E4864]" />
                <h3 className="text-xl font-semibold text-[#2E4864]">
                  {item.year}
                </h3>
              </div>
              <p className="text-gray-700 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-bold mb-8 text-[#2E4864]">
          Recognitions & Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Star,
              title: "Top Innovator 2023",
              desc: "Honored as one of the leading AI-driven startups redefining digital solutions.",
            },
            {
              icon: Award,
              title: "Best Tech Partner",
              desc: "Awarded for exceptional collaboration and consistent project success rates.",
            },
            {
              icon: CheckCircle2,
              title: "ISO Certified",
              desc: "Recognized for meeting international quality and data security standards.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <item.icon className="mx-auto mb-4 h-10 w-10 text-[#2E4864]" />
              <h3 className="text-xl font-semibold mb-2 text-[#2E4864]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-[#2E4864] text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl italic font-light">
            “Partnering with Wortholic accelerated our AI transformation — their
            precision, creativity, and commitment were unmatched.”
          </blockquote>
          <p className="mt-6 font-semibold text-lg">
            — Sarah Thompson, CTO at NovaTech Global
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-[#2E4864]">
          Let’s Achieve More Together
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hands with Wortholic to build AI-driven solutions that redefine
          success.
        </p>
        <a
          href="/contact"
          className="bg-[#2E4864] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#22364b] transition"
        >
          Schedule a Meeting
        </a>
      </section>
    </main>
  );
};

export default Achievements;
