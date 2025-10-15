import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Support Ticket | Wortholic",
  description: "Open a support ticket for technical assistance with your Wortholic project.",
};

const OpenSupportTicketPage = () => {
  return (
    <>
      <Breadcrumb pageName="Open Support Ticket" description="Get technical support for your project" />
      <div className="bg-white px-4 py-16 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl dark:text-white">Open Support Ticket</h1>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Quick Support</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Need immediate assistance with your project? Send us a detailed email with your
                issue description and we&apos;ll respond within 4-12 hours depending on urgency.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">What to Include</h2>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <ul className="mb-4 list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li>Your project name or reference number</li>
                  <li>Detailed description of the issue</li>
                  <li>Steps to reproduce the problem</li>
                  <li>Error messages or screenshots if applicable</li>
                  <li>Urgency level (Low, Medium, High, Critical)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Support Categories</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h3 className="mb-2 font-semibold text-black dark:text-white">Technical Issues</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bug reports, functionality problems</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h3 className="mb-2 font-semibold text-black dark:text-white">Feature Requests</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">New features, enhancements</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h3 className="mb-2 font-semibold text-black dark:text-white">Deployment Help</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Server setup, hosting issues</p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h3 className="mb-2 font-semibold text-black dark:text-white">General Questions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Usage questions, consultations</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Contact Information</h2>
              <div className="rounded-lg bg-[#0E9F9F]/10 p-6">
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> wortholicai@gmail.com
                </p>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  <strong>Subject Format:</strong> [SUPPORT] Your Issue Title
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Response Time:</strong> 4-12 hours for most issues
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenSupportTicketPage;