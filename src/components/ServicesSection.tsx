 
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  CloudIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Web & App Development",
    description:
      "Modern, scalable applications using the latest frontend and backend technologies.",
    icon: <CodeBracketIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Secure and scalable cloud setups for web, mobile, and enterprise solutions.",
    icon: <CloudIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "AI & Automation",
    description:
      "Build AI-driven tools and systems to automate and optimize business processes.",
    icon: <SparklesIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Space & Satellite Tech",
    description:
      "Innovative solutions in satellite data processing and space-grade software.",
    icon: <GlobeAltIcon className="w-8 h-8 text-blue-600" />,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            At SriTechLabs, we offer solutions built for scale, speed, and intelligence — tailored for the digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
