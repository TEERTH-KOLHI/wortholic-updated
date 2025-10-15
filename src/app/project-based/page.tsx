import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Based Development | Wortholic - Complete Solutions",
  description: "Project-based development services from Wortholic. Complete solution delivery with fixed timeline and budget for your software projects.",
};

export default function ProjectBased() {
  return (
    <ServiceForm
      serviceType="project-based"
      title="Project Based Development"
      description="Have a complete project in mind? Our project-based development service provides end-to-end solution delivery with fixed timeline, budget, and scope. Perfect for startups and enterprises looking for complete software solutions."
    />
  );
}