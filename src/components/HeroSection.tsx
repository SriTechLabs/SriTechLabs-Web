import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Empowering Innovation with <span className="text-blue-600">SriTechLabs</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
            We build next-generation digital ecosystems in AI, Cloud, Web, and SpaceTech — engineered in India for the world.
          </p>
          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Right Iconic Box or Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-xl">
            <span className="text-6xl font-bold text-blue-600">🌐</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
