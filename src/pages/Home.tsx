import React from "react";
import HeroSection from "../components/HeroSection";
import FounderSection from "../components/FounderSection";
import ServicesSection from "../components/ServicesSection";
import CareersSection from "../components/CareersSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <FounderSection />
      <ServicesSection />
      <CareersSection />
      <ContactSection />
    </main>
  );
}
