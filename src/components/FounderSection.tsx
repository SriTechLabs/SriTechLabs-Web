 import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/24/outline";

export default function FounderSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
            <UserIcon className="w-8 h-8" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet the Founder
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            <span className="font-semibold text-blue-600">Srikantha L.</span>, the visionary behind <span className="font-semibold text-gray-800">SriTechLabs</span>, is passionate about building an indigenous digital ecosystem that powers AI, Web, Cloud, SpaceTech, and next-gen solutions for India and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
