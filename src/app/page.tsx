import Blog from "@/components/Blog";

import ScrollUp from "@/components/Common/ScrollUp";
import OurServices from "@/components/OurServices";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import OurService from "@/components/ProvidedService";
import ContactSection from "@/components/ContactSection/ContactSection";
import WortholicLanding from "@/components/WortholicLanding/WortholicLanding";
import Portfolio from "@/components/Portfolio/Portfolio";
import ToolsAndTechnologies from "@/components/ToolsAndTechnologies/ToolsAndTechnologies";
import IndustriesPage from "@/components/IndustriesPage/IndustriesPage";

import ContactForm from "@/components/ContactForm/ContactForm";
import HeroParallax from "@/components/HeroParallax/HeroParallax";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import { cardsDataByPage } from "../components/ProvidedService/featurepage1";
import {
  featuredWork1,
  featuredWork2,
  featuredWork3,
  featuredWork4,
  featuredWork5,
  featuredWork6,
} from "../components/ProvidedService/featurepage1";
import FeaturedWork from "../components/ProvidedService/FeaturedWork";
import CareersSection from "@/components/CareersSection/CareersSection";
export const metadata: Metadata = {
  title: "Wortholic - Premium Software Services & AI Solutions",
  description:
    "Wortholic provides cutting-edge software services with 100+ experienced developers, engineers, and AI researchers.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <OurServices />
      {/* Sticky Featured Works Container - 300vh for 3x full-screen scroll */}
      <div className="relative h-[600vh] mt-10">
        <FeaturedWork
          {...featuredWork1}
          cardsData={cardsDataByPage[0]}
          sectionType="apps"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork2}
          cardsData={cardsDataByPage[1]}
          sectionType="ai-products"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork3}
          cardsData={cardsDataByPage[2]}
          sectionType="ai-ml"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork4}
          cardsData={cardsDataByPage[3]}
          sectionType="automation"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork5}
          cardsData={cardsDataByPage[4]}
          sectionType="educators"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
        <FeaturedWork
          {...featuredWork6}
          cardsData={cardsDataByPage[5]}
          sectionType="crm"
          additionalClass="sticky top-15 h-screen w-full overflow-hidden"
        />
      </div>

      <CareersSection />
      <ToolsAndTechnologies />
      <IndustriesPage />
      <Blog />
      <ContactForm />
    </>
  );
}
