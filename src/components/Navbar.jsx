import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { getItemCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    // PERBAIKAN: Tambah backdrop-blur dan border bawah halus untuk kesan premium
    <nav className="sticky top-0 z-50 w-full bg-coffee-cream/90 dark:bg-coffee-dark/90 backdrop-blur-md border-b border-coffee-gold/10 transition-colors duration-300">
      <div className="container-xl flex justify-between items-center py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-coffee-gold to-coffee-dark rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-coffee-cream font-bold text-xl">☕</span>
          </div>
          <span className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold hidden sm:inline tracking-tight">
            Kopi Nusantara
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium text-base transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-coffee-gold after:transition-all hover:after:w-full ${
                isActive(link.path)
                  ? "text-coffee-gold after:w-full"
                  : "text-coffee-dark dark:text-coffee-cream hover:text-coffee-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative p-3 hover:bg-coffee-gold/10 rounded-full transition-colors group"
            aria-label="Keranjang Belanja"
          >
            <ShoppingCart
              size={22}
              className="text-coffee-dark dark:text-coffee-gold group-hover:scale-110 transition-transform"
            />
            {getItemCount() > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                {getItemCount()}
              </span>
            )}
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-3 hover:bg-coffee-gold/10 rounded-full transition-colors group"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun
                size={22}
                className="text-coffee-gold group-hover:rotate-90 transition-transform duration-500"
              />
            ) : (
              <Moon
                size={22}
                className="text-coffee-dark group-hover:-rotate-12 transition-transform duration-500"
              />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 hover:bg-coffee-gold/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-coffee-dark dark:text-coffee-gold" />
            ) : (
              <Menu
                size={24}
                className="text-coffee-dark dark:text-coffee-gold"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-coffee-cream dark:bg-coffee-dark border-t border-coffee-gold/10 shadow-xl animate-fadeIn">
          <div className="container-xl py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-6 rounded-xl font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-coffee-gold text-coffee-black shadow-md"
                    : "text-coffee-dark dark:text-coffee-cream hover:bg-coffee-gold/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
