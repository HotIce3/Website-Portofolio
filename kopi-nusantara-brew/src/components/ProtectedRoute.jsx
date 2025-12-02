import React from "react";
import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "../utils/auth";

export default function ProtectedRoute({ children }) {
  return isAdminAuthenticated() ? (
    children
  ) : (
    <Navigate to="/admin-login" replace />
  );
}
