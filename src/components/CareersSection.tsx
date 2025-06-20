 import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const careers = [
  {
    title: "Frontend Developer (React)",
    location: "Remote / Bengaluru",
    type: "Full-time",
  },
  {
    title: "Backend Engineer (Spring Boot)",
    location: "Remote / Bengaluru",
    type: "Full-time",
  },
  {
    title: "Mobile App Developer (Flutter)",
    location: "Remote",
    type: "Internship",
  },
  {
    title: "Cloud DevOps Engineer",
    location: "Bengaluru",
    type: "Full-time",
  },
];

export default function CareersSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Join Our Team</h2>
          <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">
            We’re building India’s most innovative digital tech company. Come grow with us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-3 text-blue-600">
                <BriefcaseIcon className="w-6 h-6" />
                <h3 className="text-lg font-semibold">{job.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{job.location}</p>
              <p className="text-sm text-gray-600 mb-4">{job.type}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
