"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Bernd Schossmann",
    role: "CEO, Neoastis",
    review:
      "Wortholic delivered the first full version of the MVP in less than four weeks. The team communicates seamlessly and responds to queries promptly. They know how to fill the blanks in a not-so-ideal specification with minimal direction.",
    rating: 5,
    image: "/images/testimonials/bernd.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CTO, InnovateX",
    review:
      "They are highly skilled and always deliver on time. The clarity in communication and willingness to adapt impressed us the most.",
    rating: 5,
    image: "/images/testimonials/emily.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Founder, BrightTech",
    review:
      "Their dedication and quality of work exceeded our expectations. Definitely recommend them for any startup looking for rapid product development.",
    rating: 4,
    image: "/images/testimonials/bernd.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Product Manager, SoftLabs",
    review:
      "We loved their structured approach. The project was handled with professionalism, and the results were beyond expectations.",
    rating: 5,
    image: "/images/testimonials/emily.jpg",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="bg-gray-50 px-8 py-4 transition-colors duration-500 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Header with arrows */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 transition-colors duration-500 md:text-4xl dark:text-gray-100">
            What our clients say
          </h2>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-all duration-300 hover:scale-110 hover:border-teal-500 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-200" />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 transition-all duration-300 hover:scale-110 hover:bg-teal-600 hover:shadow-lg"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex min-w-full items-center gap-8 border-t border-b border-gray-200 bg-white/80 shadow-md backdrop-blur-sm transition-colors duration-500 dark:border-t dark:border-b dark:border-gray-700 dark:bg-black/30 dark:shadow-lg dark:backdrop-blur-md"
              >
                {/* LEFT CONTENT */}
                <div className="flex-1 p-8 text-gray-900 transition-colors duration-500 dark:text-gray-100">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors duration-500 dark:bg-gray-700">
                      <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">
                          {testimonial.rating}.0
                        </span>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-lg text-red-500">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Based on {testimonial.rating * 5} Clutch reviews
                      </p>
                    </div>
                  </div>

                  <blockquote className="mb-8 text-lg leading-relaxed">
                    {testimonial.review}
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 rounded-2xl bg-orange-500 px-6 py-4 transition-colors duration-300 hover:bg-orange-400">
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-orange-100">
                        {testimonial.role}
                      </p>
                    </div>
                    <button className="ml-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-[#0E9F9F] bg-[#0E9F9F] px-6 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black">
                      <span>View more</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-shrink-0 pr-8">
                  <div className="relative h-80 w-80 overflow-hidden rounded-2xl bg-white/70 shadow-md dark:bg-black/30 dark:shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
