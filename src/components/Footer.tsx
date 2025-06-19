import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-2">SriTechLabs</h2>
          <p className="text-sm">
            Building Future-Ready Digital Ecosystems — AI, Cloud, Web & SpaceTech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link to="/careers" className="hover:text-blue-600">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: <a href="mailto:contact@sritechlabs.in" className="hover:text-blue-600">contact@sritechlabs.in</a></li>
            <li>Phone: <a href="tel:+919876543210" className="hover:text-blue-600">+91-98765-43210</a></li>
            <li>Location: Bengaluru, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-gray-200 text-center text-xs py-4">
        © {new Date().getFullYear()} SriTechLabs. All rights reserved.
      </div>
    </footer>
  );
}
