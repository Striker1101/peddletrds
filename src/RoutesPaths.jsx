import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Landing/Contact";
import Service from "./Pages/Landing/Service";
import About from "./Pages/Landing/About";
import Home from "./Pages/Landing/Home";
import NotFound from "./Pages/NotFound";
import DashboardHome from "./Pages/Dashboard/Home";
import Withdraw from "./Pages/Dashboard/Withdraw";
import Deposit from "./Pages/Dashboard/Deposit";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgetPassword from "./Pages/Auth/ForgetPassword";

export default function RoutesPaths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
    </Routes>
  );
}

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/deposit" element={<Deposit />} />
    </Routes>
  );
}

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget_password" element={<ForgetPassword />} />
    </Routes>
  );
}
