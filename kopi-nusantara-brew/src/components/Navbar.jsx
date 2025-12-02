import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { getItemCount } = useCart();
  const [cart] = useState([]); // Will be updated with context
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-coffee-cream dark:bg-coffee-dark shadow-md transition-colors duration-300">
      <div className="container-xl flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-coffee-gold to-coffee-dark rounded-full flex items-center justify-center">
            <span className="text-coffee-cream font-bold text-lg">☕</span>
          </div>
          <span className="font-display text-xl font-bold text-coffee-dark dark:text-coffee-gold hidden sm:inline">
            Kopi Nusantara
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${
                isActive(link.path)
                  ? "text-coffee-gold border-b-2 border-coffee-gold"
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
            className="relative p-2 hover:bg-coffee-gold hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <ShoppingCart
              size={24}
              className="text-coffee-dark dark:text-coffee-gold"
            />
            {getItemCount() > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {getItemCount()}
              </span>
            )}
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-coffee-gold hover:bg-opacity-20 rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={24} className="text-coffee-gold" />
            ) : (
              <Moon size={24} className="text-coffee-dark" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-coffee-gold hover:bg-opacity-20 rounded-lg transition-colors"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-coffee-cream dark:bg-coffee-dark border-t border-coffee-gold border-opacity-20">
          <div className="container-xl py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-coffee-gold text-coffee-black"
                    : "text-coffee-dark dark:text-coffee-cream hover:bg-coffee-gold hover:bg-opacity-20"
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
