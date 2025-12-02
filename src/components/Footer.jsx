import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12 sm:py-16">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-coffee-gold rounded-full flex items-center justify-center">
                <span className="text-coffee-dark text-lg">☕</span>
              </div>
              <h3 className="font-display text-lg font-bold text-coffee-gold">
                Kopi Nusantara
              </h3>
            </div>
            <p className="text-coffee-cream text-opacity-70 text-sm">
              Premium coffee shop dengan kualitas terbaik dan cita rasa autentik
              Nusantara.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-coffee-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-coffee-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="hover:text-coffee-gold transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-coffee-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="hover:text-coffee-gold transition-colors"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-coffee-gold mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-coffee-gold" />
                <a
                  href="tel:+62123456789"
                  className="hover:text-coffee-gold transition-colors"
                >
                  +62 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-coffee-gold" />
                <a
                  href="mailto:info@kopinusantara.com"
                  className="hover:text-coffee-gold transition-colors"
                >
                  info@kopinusantara.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-coffee-gold" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-display font-bold text-coffee-gold mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-coffee-gold bg-opacity-20 hover:bg-coffee-gold hover:text-coffee-dark rounded-lg transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-coffee-gold bg-opacity-20 hover:bg-coffee-gold hover:text-coffee-dark rounded-lg transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-coffee-gold bg-opacity-20 hover:bg-coffee-gold hover:text-coffee-dark rounded-lg transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-coffee-gold border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-coffee-cream text-opacity-70">
              &copy; {currentYear} Kopi Nusantara Brew. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-coffee-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-coffee-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-coffee-gold transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
