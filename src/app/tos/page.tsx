import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Wortholic",
  description: "Terms of Service for Wortholic software development services.",
};

const TOSPage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms of Service" description="Our terms of service" />
      <div className="bg-white px-4 py-16 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl dark:text-white">Terms of Service</h1>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Acceptance of Terms</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                By engaging Wortholic&apos;s services, you accept these terms. We provide professional
                software development, AI integration, and consulting services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Service Scope</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Services include custom software development, mobile apps, web applications,
                AI solutions, and technical consulting as agreed in project contracts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Client Responsibilities</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Clients must provide necessary requirements, feedback, and approvals in a timely manner.
                Payment terms and project scope are defined in individual agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Limitation of Liability</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our liability is limited to the project value. We provide solutions with industry-standard
                quality and support as outlined in service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Updates</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update these terms periodically. Continued use constitutes acceptance of revised terms.
                Contact wortholicai@gmail.com for clarifications.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TOSPage;