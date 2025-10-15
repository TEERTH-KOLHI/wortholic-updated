import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & Help | Wortholic",
  description: "Get help and support for your Wortholic projects and services.",
};

const SupportHelpPage = () => {
  return (
    <>
      <Breadcrumb pageName="Support & Help" description="Get help with your projects" />
      <div className="bg-white px-4 py-16 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl dark:text-white">Support & Help</h1>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Getting Started</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                New to Wortholic? Contact us to discuss your project requirements. We provide
                free consultations to understand your needs and recommend the best solutions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Project Support</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Active project clients receive dedicated support through email and scheduled calls.
                We provide regular updates and are available for questions throughout development.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Technical Issues</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Experiencing technical problems with delivered solutions? We provide post-delivery
                support to resolve issues and ensure your systems run smoothly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Response Times</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                General inquiries: Within 24 hours<br />
                Project support: Within 12 hours<br />
                Urgent issues: Within 4 hours
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Contact Support</h2>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  <strong>Email:</strong> wortholicai@gmail.com<br />
                  <strong>Best for:</strong> All support requests and project inquiries
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Include your project name and detailed description of the issue for faster resolution.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportHelpPage;