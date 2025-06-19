import React from "react";
import { motion } from "framer-motion";
import ServicesSection from "../components/ServicesSection";

export default function Services() {
  return (
    <main className="bg-white text-gray-900">
      {/* Page Header */}
      <section className="py-20 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At SriTechLabs, we design and deliver high-performance digital solutions for businesses, startups, and government sectors. Explore our core service areas below.
          </p>
        </motion.div>
      </section>

      {/* Reuse the Service Grid */}
      <ServicesSection />
    </main>
  );
}
