import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { adminLogout } from "../utils/auth";
import AdminMenuManager from "./AdminMenuManager";
import AdminOrders from "./AdminOrders";
import AdminTestimonials from "./AdminTestimonials";
import AdminDashboardHome from "./AdminDashboardHome";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin-login");
  };

  const navItems = [
    { path: "", label: "Dashboard", icon: "📊" },
    { path: "menu", label: "Menu Management", icon: "☕" },
    { path: "orders", label: "Orders", icon: "📦" },
    { path: "testimonials", label: "Testimonials", icon: "⭐" },
  ];

  return (
    <div className="flex min-h-screen bg-coffee-cream dark:bg-coffee-black">
      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 h-screen bg-coffee-dark text-coffee-cream shadow-lg transform transition-transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <div className="p-6 border-b border-coffee-gold border-opacity-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-coffee-gold rounded-full flex items-center justify-center">
              <span className="text-coffee-dark text-lg">☕</span>
            </div>
            <span className="font-display font-bold text-lg text-coffee-gold">
              Admin
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-coffee-cream text-opacity-70 mb-4">
            <div className="w-8 h-8 bg-coffee-gold bg-opacity-20 rounded-full flex items-center justify-center">
              <span>A</span>
            </div>
            <div>
              <p className="font-semibold">Admin User</p>
              <p className="text-xs">admin@kopinusantara.com</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors text-white"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        {/* Nav Items */}
        <nav className="p-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(`/admin/${item.path}`);
                setSidebarOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-coffee-gold hover:bg-opacity-20 hover:text-coffee-gold transition-all font-medium flex items-center gap-2"
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Bar */}
        <div className="bg-white dark:bg-coffee-dark border-b border-coffee-gold border-opacity-20 sticky top-0 z-40">
          <div className="flex items-center justify-between p-6">
            <h1 className="font-display text-2xl font-bold text-coffee-dark dark:text-coffee-gold">
              Kopi Nusantara Brew - Admin Panel
            </h1>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-coffee-gold hover:bg-opacity-20 rounded-lg"
            >
              {sidebarOpen ? (
                <X
                  size={24}
                  className="text-coffee-dark dark:text-coffee-cream"
                />
              ) : (
                <Menu
                  size={24}
                  className="text-coffee-dark dark:text-coffee-cream"
                />
              )}
            </button>
          </div>
        </div>

        {/* Routes */}
        <div className="p-6">
          <Routes>
            <Route path="" element={<AdminDashboardHome />} />
            <Route path="menu" element={<AdminMenuManager />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
          </Routes>
        </div>
      </main>

      {/* Overlay untuk mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
