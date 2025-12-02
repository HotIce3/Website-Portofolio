import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-black text-coffee-cream pt-20 pb-10 border-t border-coffee-gold/20">
      <div className="container-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-coffee-gold rounded-full flex items-center justify-center">
                <span className="text-coffee-black font-bold text-xl">☕</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-coffee-gold">
                Kopi Nusantara
              </h3>
            </div>
            <p className="text-coffee-cream/70 text-sm leading-relaxed">
              Menghadirkan cita rasa kopi premium asli Indonesia. Dipetik dari
              biji pilihan, disangrai dengan hati, disajikan dengan cinta.
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-coffee-gold rounded-full flex items-center justify-center transition-all duration-300 hover:text-coffee-black group"
                  aria-label="Social Media"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-coffee-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Menu Pilihan", path: "/menu" },
                { label: "Hubungi Kami", path: "/contact" },
                { label: "Keranjang", path: "/cart" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-coffee-cream/70 hover:text-coffee-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg text-coffee-gold mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-coffee-gold mt-1 flex-shrink-0"
                />
                <span className="text-coffee-cream/70 text-sm">
                  Jl. Sudirman No. 123,
                  <br /> Jakarta Pusat 12910
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-coffee-gold flex-shrink-0" />
                <a
                  href="tel:+62123456789"
                  className="text-coffee-cream/70 hover:text-coffee-gold transition-colors text-sm"
                >
                  +62 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-coffee-gold flex-shrink-0" />
                <a
                  href="mailto:info@kopinusantara.com"
                  className="text-coffee-cream/70 hover:text-coffee-gold transition-colors text-sm"
                >
                  info@kopinusantara.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter (Optional enhancement for alignment) */}
          <div>
            <h4 className="font-display font-bold text-lg text-coffee-gold mb-6">
              Newsletter
            </h4>
            <p className="text-coffee-cream/70 text-sm mb-4">
              Dapatkan promo menarik dan update menu terbaru.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Anda..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-coffee-gold text-sm text-coffee-cream placeholder:text-white/30"
              />
              <button className="w-full btn-primary py-2 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-coffee-cream/50">
            &copy; {currentYear} Kopi Nusantara Brew. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-coffee-cream/50">
            <a href="#" className="hover:text-coffee-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-coffee-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
