import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1121] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-lg md:text-2xl font-bold text-white">
                Dream<span className="text-yellow-400">Visa</span>
              </span>
            </div>
            <p className="text-xs md:text-sm">
              Making visa applications simple and stress-free for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-sm md:text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-yellow-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-sm md:text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <a href="#visa-consultation" className="hover:text-yellow-400 transition-colors">
                  Visa Consultation
                </a>
              </li>
              <li>
                <a href="#document-assistance" className="hover:text-yellow-400 transition-colors">
                  Document Assistance
                </a>
              </li>
              <li>
                <a href="#travel-insurance" className="hover:text-yellow-400 transition-colors">
                  Travel Insurance
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-yellow-400 transition-colors">
                  Appointment Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-sm md:text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-1.5 md:gap-2">
                <Mail size={14} className="text-yellow-400" />
                <a href="mailto:karthik@gmail.com" className="hover:text-yellow-400 transition-colors">
                  karthik@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1.5 md:gap-2">
                <Phone size={14} className="text-yellow-400" />
                <a href="tel:+918008456790" className="hover:text-yellow-400 transition-colors">
                  +91 8008456790
                </a>
              </li>
              <li className="flex items-start gap-1.5 md:gap-2">
                <MapPin size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <p>
                  Gandhi Nagar, Ongole,<br />
                  Andhra Pradesh - 523001
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs md:text-sm">
              © 2024 DreamVisa. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs md:text-sm">
              <a href="/privacy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 