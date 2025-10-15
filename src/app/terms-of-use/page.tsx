import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Wortholic",
  description: "Terms of Use for Wortholic website and services.",
};

const TermsOfUsePage = () => {
  return (
    <>
      <Breadcrumb pageName="Terms of Use" description="Website usage terms and guidelines" />
      <div className="bg-white px-4 py-16 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl dark:text-white">Terms of Use</h1>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Website Usage</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                This website provides information about Wortholic&apos;s software development services.
                By using this site, you agree to these terms and our privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Acceptable Use</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Use this website for legitimate business inquiries and information gathering.
                Do not attempt to access restricted areas or disrupt website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Content Ownership</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                All website content, including text, images, and code examples, is owned by Wortholic.
                Content may not be reproduced without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Service Information</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Information about our services is provided for general guidance. Specific project
                details and pricing are established through direct consultation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Disclaimer</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Website information is provided &quot;as is&quot; without warranties. We strive for accuracy
                but cannot guarantee all information is current or complete.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Changes</h2>
              <p className="text-gray-700 dark:text-gray-300">
                These terms may be updated periodically. Continued use constitutes acceptance.
                Contact wortholicai@gmail.com with questions about website usage.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUsePage;