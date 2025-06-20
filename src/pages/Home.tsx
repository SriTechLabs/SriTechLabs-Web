import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import FounderSection from "../components/FounderSection";
import ServicesSection from "../components/ServicesSection";
import CareersSection from "../components/CareersSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SriTechLabs – Innovation Meets Execution</title>
        <meta
          name="description"
          content="SriTechLabs is a modern Indian tech company building innovative cloud, AI, and software solutions tailored for the future."
        />
        <meta name="keywords" content="SriTechLabs, software, AI, innovation, startup, India, cloud solutions, tech company" />
        <meta name="author" content="Srikantha L" />
        <meta property="og:title" content="SriTechLabs – Official Website" />
        <meta property="og:description" content="Discover SriTechLabs – driving India's future with software, AI, and technology innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sritechlabs.vercel.app/" />
        <meta property="og:site_name" content="SriTechLabs" />
      </Helmet>

      <main className="bg-white text-gray-900">
        <HeroSection />
        <FounderSection />
        <ServicesSection />
        <CareersSection />
        <ContactSection />
      </main>
    </>
  );
}
