"use client";
import React, { useState } from "react";
import {
  Check,
  Shield,
  Users,
  User,
  Mail,
  Phone as PhoneIcon,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 transition-colors duration-300 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 lg:text-6xl dark:text-white">
                Innovate. Integrate. Inspire.
              </h1>
              <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                We innovate with AI-driven, cutting-edge technology, integrate
                seamless solutions, and inspire digital transformation across
                industries.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Projects Completed */}
              <div className="flex items-center space-x-4 rounded-2xl border border-gray-200 bg-blue-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="rounded-xl bg-blue-500 p-3 dark:bg-blue-600">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    500+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Years of Experience */}
              <div className="flex items-center space-x-4 rounded-2xl border border-gray-200 bg-orange-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="rounded-xl bg-orange-500 p-3 dark:bg-orange-600">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    13+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Happy Clients */}
              <div className="flex items-center space-x-4 rounded-2xl border border-gray-200 bg-green-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="rounded-xl bg-green-500 p-3 dark:bg-green-600">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    350+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Specialist */}
              <div className="flex items-center space-x-4 rounded-2xl border border-gray-200 bg-purple-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="rounded-xl bg-purple-500 p-3 dark:bg-purple-600">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    85+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="rounded-3xl border border-gray-200 bg-blue-50 p-8 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
              Let&apos;s connect
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="relative">
                <div className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500 dark:text-gray-300">
                  <User className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-200 bg-white py-4 pr-4 pl-12 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500 dark:text-gray-300">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-200 bg-white py-4 pr-4 pl-12 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500 dark:text-gray-300">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-200 bg-white py-4 pr-4 pl-12 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write something about your project in detail."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white p-4 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-[#0E9F9F] bg-[#0E9F9F] px-6 py-3 font-medium text-white shadow-md transition duration-300 hover:bg-white hover:text-[#0E9F9F] dark:hover:bg-black"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
