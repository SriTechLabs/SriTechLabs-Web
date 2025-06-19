import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";

export default function Contact() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're ready to collaborate, need help, or have an idea to share — we’re here to listen. Reach out now!
          </p>
        </motion.div>
      </section>

      {/* Contact Form + Info */}
      <ContactSection />
    </main>
  );
}
