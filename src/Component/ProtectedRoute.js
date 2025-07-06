import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoute({ children }) {
  const userId = Cookies.get("userId");

  //  No cookie, redirect to login
  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  // Cookie exists, allow access
  return children;
}
