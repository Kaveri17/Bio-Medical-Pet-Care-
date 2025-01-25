import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authenticate } from "../api/Userapp";

const AdminRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading, false = not authenticated, true = authenticated

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authResponse = await authenticate();
        if (authResponse?.user?.role === 0) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Show a loading state while authentication is being checked
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // Render child routes if authenticated, otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;