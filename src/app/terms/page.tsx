import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Wortholic",
  description: "Terms and conditions for Wortholic software services.",
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms" description="Our terms and conditions" />
      <div className="bg-white px-4 py-16 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl dark:text-white">Terms</h1>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Service Agreement</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                By using Wortholic&apos;s services, you agree to our terms. We provide software development,
                AI solutions, and technical consulting services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Project Delivery</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Projects are delivered according to agreed timelines. We maintain regular communication
                and provide progress updates throughout development.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Intellectual Property</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Upon full payment, clients receive full ownership of custom-developed solutions.
                Pre-existing frameworks and tools remain our property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Contact</h2>
              <p className="text-gray-700 dark:text-gray-300">
                For questions about these terms, contact us at wortholicai@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;