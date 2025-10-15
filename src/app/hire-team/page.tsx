import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Development Team | Wortholic - Dedicated Teams",
  description: "Hire a complete development team from Wortholic. Dedicated teams for web apps, mobile apps, AI solutions, and enterprise software.",
};

export default function HireTeam() {
  return (
    <ServiceForm
      serviceType="hire-team"
      title="Hire Dedicated Development Team"
      description="Scale your development capacity with our dedicated teams. We provide complete development teams with project managers, developers, designers, and QA specialists to deliver your project successfully."
    />
  );
}