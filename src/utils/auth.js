import { supabase } from "./supabase";
import { jwtDecode } from "jwt-decode";

export const adminLogin = async (email, password) => {
  // In a real app, validate against backend
  // For demo, using hardcoded credentials
  const validEmail = "admin@kopinusantara.com";
  const validPassword = "Admin@2024";

  if (email === validEmail && password === validPassword) {
    const token = generateMockJWT();
    localStorage.setItem("admin_token", token);
    return { success: true, token };
  }

  throw new Error("Email atau password salah");
};

export const adminLogout = () => {
  localStorage.removeItem("admin_token");
};

export const getAdminToken = () => {
  return localStorage.getItem("admin_token");
};

export const isAdminAuthenticated = () => {
  const token = getAdminToken();
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch (error) {
    return false;
  }
};

// Mock JWT for demo purposes
const generateMockJWT = () => {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = btoa(
    JSON.stringify({
      sub: "admin",
      email: "admin@kopinusantara.com",
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      iat: Math.floor(Date.now() / 1000),
    })
  );
  const signature = btoa("mock-signature");

  return `${header}.${payload}.${signature}`;
};
