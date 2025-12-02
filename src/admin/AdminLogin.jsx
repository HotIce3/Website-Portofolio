import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../utils/auth";
import { AlertCircle } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await adminLogin(email, password);
      if (result.success) {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-dark to-coffee-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-coffee-gold rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-coffee-dark text-2xl font-bold">☕</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-coffee-gold">
            Admin Panel
          </h1>
          <p className="text-coffee-cream text-opacity-70 mt-2">
            Kopi Nusantara Brew
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-coffee-cream dark:bg-coffee-dark rounded-xl p-8 coffee-shadow"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 rounded flex gap-3">
              <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-bold text-coffee-dark dark:text-coffee-cream mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark transition-colors"
              placeholder="admin@kopinusantara.com"
              disabled={loading}
            />
            <p className="text-xs text-coffee-dark dark:text-coffee-cream text-opacity-70 mt-1">
              Demo: admin@kopinusantara.com
            </p>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-bold text-coffee-dark dark:text-coffee-cream mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-coffee-gold rounded-lg focus:outline-none focus:border-coffee-dark transition-colors"
              placeholder="••••••••"
              disabled={loading}
            />
            <p className="text-xs text-coffee-dark dark:text-coffee-cream text-opacity-70 mt-1">
              Demo: Admin@2024
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <div className="mt-6 pt-6 border-t border-coffee-gold border-opacity-20">
            <p className="text-xs text-coffee-dark dark:text-coffee-cream text-opacity-70 text-center">
              Demo Credentials:
              <br />
              Email: admin@kopinusantara.com
              <br />
              Password: Admin@2024
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
