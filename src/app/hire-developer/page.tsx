import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Developer | Wortholic - Expert Software Developers",
  description: "Hire skilled developers from Wortholic. React, Node.js, Python, AI/ML experts available for your project needs.",
};

export default function HireDeveloper() {
  return (
    <ServiceForm
      serviceType="hire-developer"
      title="Hire Expert Developer"
      description="Looking for a skilled developer to join your team? Our expert developers specialize in various technologies including React, Node.js, Python, AI/ML, and more. Get matched with the perfect developer for your project requirements."
    />
  );
}