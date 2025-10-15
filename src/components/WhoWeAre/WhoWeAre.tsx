"use client";
import React, { useEffect, useRef } from "react";
import {
  Settings,
  Award,
  Accessibility,
  Pause,
  Heart,
  Users,
  BarChart3,
  Shield,
  Globe,
  Cpu,
  CheckCircle,
  Star,
} from "lucide-react";

const WhoWeAre = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const animate: Record<
      string,
      (element: HTMLElement, options: { rate: number }) => void
    > = {
      parallax: (el, { rate }) => {
        el.style.transform = `translateY(${rate}px)`;
      },
    };

    function animation() {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio <= 0) return;
          const el = entry.target as HTMLElement;
          const type = el.dataset.animation;
          const depth = parseFloat(el.dataset.depth || "0.2");
          const rate = entry.intersectionRect.y * depth;
          if (type && animate[type]) animate[type](el, { rate });
        });
      });

      document
        .querySelectorAll<HTMLElement>(".parallax-card")
        .forEach((el) => observer.observe(el));
    }

    animation();
    window.addEventListener("scroll", animation);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", animation);
    };
  }, []);

  return (
    <div
      className="mb-10 min-h-screen bg-white p-6 dark:bg-black"
      ref={containerRef}
    >
      {/* Outer responsive wrapper */}
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-6 lg:p-2">
        {/* LEFT COLUMN (Desktop: unchanged, Mobile: stacked) */}
        <div className="flex flex-col gap-8 lg:mt-28">
          <article
            className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.08"
          >
            <Settings className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-lg font-bold text-black dark:text-white">
              Inspired Innovation
            </h3>
            <p className="text-sm text-gray-700 dark:text-indigo-200/90">
              Transforming bold ideas into real impact with AI-driven solutions.
            </p>
          </article>

          <article
            className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.14"
          >
            <Accessibility className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-lg font-bold text-black dark:text-white">
              Agile AI Solutions
            </h3>
            <p className="text-sm text-gray-700 dark:text-indigo-200/90">
              Accelerating growth with AI-powered tools that streamline
              workflows and boost productivity.
            </p>
          </article>

          <article
            className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.10"
          >
            <Pause className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-lg font-bold text-black dark:text-white">
              Rapid Iterations
            </h3>
            <p className="text-sm text-gray-700 dark:text-indigo-200/90">
              Validate ideas faster with agile, iterative development that keeps
              products competitive.
            </p>
          </article>

          <article
            className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.16"
          >
            <Heart className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-lg font-bold text-black dark:text-white">
              80% Less Overhead
            </h3>
            <p className="text-sm text-gray-700 dark:text-indigo-200/90">
              Smarter tools automate reporting and help teams scale with ease.
            </p>
          </article>
        </div>

        {/* MIDDLE COLUMN (Heading + cards grid) */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-full text-center lg:mt-10 lg:w-[520px]">
            <p className="mb-2 text-xs font-medium tracking-wider text-gray-800 uppercase dark:text-gray-300">
              Benefits
            </p>
            <h1 className="mb-4 text-3xl font-bold text-black md:text-4xl dark:text-white">
              Who we are
            </h1>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-gray-700 dark:text-indigo-200">
              We build AI agents, AI-powered SaaS, and advanced digital
              solutions that go beyond traditional apps.
            </p>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:mt-20 lg:flex lg:justify-center lg:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <article
                className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
                data-animation="parallax"
                data-depth="0.11"
              >
                <Award className="h-10 w-10 text-black dark:text-white" />
                <h3 className="text-lg font-bold text-black dark:text-white">
                  Human-AI Collab
                </h3>
                <p className="text-sm text-gray-700 dark:text-indigo-200/90">
                  Creativity meets AI precision for faster results.
                </p>
              </article>

              <article
                className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-center gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
                data-animation="parallax"
                data-depth="0.18"
              >
                <Users className="h-12 w-12 text-black dark:text-white" />
                <h3 className="text-4xl font-black text-black dark:text-white">
                  500+
                </h3>
                <small className="mt-1 block text-sm text-gray-700 dark:text-indigo-100">
                  Projects Completed
                </small>
              </article>

              <article
                className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
                data-animation="parallax"
                data-depth="0.07"
              >
                <Shield className="h-10 w-10 text-black dark:text-white" />
                <h3 className="text-lg font-bold text-black dark:text-white">
                  Secure Solutions
                </h3>
                <p className="text-sm text-gray-700 dark:text-indigo-200/90">
                  Systems that grow with your business and stay safe.
                </p>
              </article>

              <article
                className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
                data-animation="parallax"
                data-depth="0.15"
              >
                <Globe className="h-10 w-10 text-black dark:text-white" />
                <h3 className="text-lg font-bold text-black dark:text-white">
                  Web & API-First
                </h3>
                <p className="text-sm text-gray-700 dark:text-indigo-200/90">
                  Responsive apps and APIs built to scale.
                </p>
              </article>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-8 lg:mt-34">
              <article
                className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
                data-animation="parallax"
                data-depth="0.17"
              >
                <Cpu className="h-10 w-10 text-black dark:text-white" />
                <h3 className="text-lg font-bold text-black dark:text-white">
                  AI Assistants
                </h3>
                <p className="text-sm text-gray-700 dark:text-indigo-200/90">
                  Smart suggestions, reviews, and debugging.
                </p>
              </article>

              <article
                className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
                data-animation="parallax"
                data-depth="0.09"
              >
                <BarChart3 className="h-10 w-10 text-black dark:text-white" />
                <h3 className="text-lg font-bold text-black dark:text-white">
                  Project Management
                </h3>
                <p className="text-sm text-gray-700 dark:text-indigo-200/90">
                  Full visibility and easy tracking across projects.
                </p>
              </article>

              <article
                className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-center gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
                data-animation="parallax"
                data-depth="0.13"
              >
                <Star className="h-12 w-12 text-black dark:text-white" />
                <h3 className="text-4xl font-black text-black dark:text-white">
                  150+
                </h3>
                <small className="mt-1 block text-sm text-gray-700 dark:text-indigo-100">
                  Happy Clients Worldwide
                </small>
              </article>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
          <article
            className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.08"
          >
            <Users className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-lg font-bold text-black dark:text-white">
              Lots of Experience
            </h3>
            <p className="text-sm text-gray-700 dark:text-indigo-200/90">
              Over two decades of development expertise.
            </p>
          </article>

          <article
            className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-center gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.14"
          >
            <Award className="h-12 w-12 text-black dark:text-white" />
            <h3 className="text-4xl font-black text-black dark:text-white">
              5+
            </h3>
            <small className="mt-1 block text-sm text-gray-700 dark:text-indigo-100">
              Years of Experience
            </small>
          </article>

          <article
            className="parallax-card mx-auto flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.11"
          >
            <CheckCircle className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-lg font-bold text-black dark:text-white">
              No Contracts
            </h3>
            <p className="text-sm text-gray-700 dark:text-indigo-200/90">
              No bureaucracy; we build on trust and results.
            </p>
          </article>

          <article
            className="parallax-card mx-auto mt-69 flex h-[300px] w-full max-w-[260px] flex-col items-center justify-start gap-4 rounded-xl border bg-[#EAF3FF] p-4 text-center shadow-md dark:bg-[#1E1E1E]"
            data-animation="parallax"
            data-depth="0.16"
          >
            <Star className="h-10 w-10 text-black dark:text-white" />
            <h3 className="text-lg font-bold text-black dark:text-white">
              Rely on Us
            </h3>
            <p className="text-sm text-gray-700 dark:text-indigo-200/90">
              A long-term partner invested in your success.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
