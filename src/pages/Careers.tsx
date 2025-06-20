 import { motion } from "framer-motion";
import CareersSection from "../components/CareersSection";

export default function Careers() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">Careers at SriTechLabs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re building the next big tech company from India — and we want passionate people like you to join us.
          </p>
        </motion.div>
      </section>

      {/* Careers Grid */}
      <CareersSection />
    </main>
  );
}
