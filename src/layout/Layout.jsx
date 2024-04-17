import React, { useContext } from "react";
import { Footer, Navbar } from "../components";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../services/contexts/AuthContext";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

const Authenticated = () => {
  const { user } = useContext(AuthContext);

  return !user ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export { Layout, Authenticated };
