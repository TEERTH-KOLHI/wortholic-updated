import ServiceForm from "@/components/ServiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hourly Developer Services | Wortholic - Flexible Development",
  description: "Hire developers on hourly basis from Wortholic. Flexible engagement model for your development needs with transparent pricing.",
};

export default function HourlyDeveloper() {
  return (
    <ServiceForm
      serviceType="hourly-developer"
      title="Hourly Based Developer Services"
      description="Need flexible development support? Our hourly-based developer services offer the perfect solution for ongoing maintenance, feature additions, or short-term projects. Pay only for the hours you need."
    />
  );
}