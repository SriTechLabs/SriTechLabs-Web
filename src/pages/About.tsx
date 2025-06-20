 import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">About SriTechLabs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering India's digital future through innovation in AI, Cloud, SpaceTech, and full-stack development.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-slate-50 p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700 text-base">
            To build a self-reliant Indian tech ecosystem that fuels global innovation and creates cutting-edge solutions in web, mobile, AI, and aerospace software.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-slate-50 p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-700 text-base">
            To become a global leader in technology innovation — proudly Made in India — while supporting startups, government, and enterprises with powerful digital solutions.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
            <li>Innovation with purpose</li>
            <li>Indigenous development first</li>
            <li>Quality and transparency</li>
            <li>Empowering communities</li>
            <li>Global thinking, local execution</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
