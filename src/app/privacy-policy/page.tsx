import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wortholic",
  description: "Privacy Policy for Wortholic - How we protect your information.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb pageName="Privacy Policy" description="How we protect your information" />
      <div className="bg-white px-4 py-16 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl dark:text-white">Privacy Policy</h1>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Information Collection</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We collect information you provide when contacting us for services, including name,
                email, phone, and project details through our contact forms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Information Use</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Information is used to respond to inquiries, provide services, and communicate about
                projects. We do not sell or share personal information with third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Data Security</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We implement security measures to protect your information. All communications
                are handled securely and project data is protected throughout development.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Cookies</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our website may use cookies to improve user experience. You can control
                cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">Contact</h2>
              <p className="text-gray-700 dark:text-gray-300">
                For privacy-related questions or to request information removal,
                contact us at wortholicai@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;