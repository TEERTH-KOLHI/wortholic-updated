import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Wortholic",
  description: "Refund policy for Wortholic software development services.",
};

const RefundPolicyPage = () => {
  return (
    <>
      <Breadcrumb pageName="Refund Policy" description="Our refund terms and conditions" />
      <div className="bg-white px-4 py-16 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl dark:text-white">Refund Policy</h1>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Project-Based Refunds</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Refunds are evaluated case-by-case for project-based work. If project requirements
                change significantly or cannot be delivered as agreed, partial refunds may apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Work Completed</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Payment for completed work phases is non-refundable. This includes delivered
                milestones, code reviews, and approved project components.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Cancellation</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Project cancellation must be requested in writing. Refunds will be calculated
                based on work completed and resources allocated at time of cancellation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Processing Time</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Approved refunds are processed within 10-15 business days via the original
                payment method used for the project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Contact</h2>
              <p className="text-gray-700 dark:text-gray-300">
                For refund requests or questions, contact us at wortholicai@gmail.com
                with your project details and request reason.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicyPage;