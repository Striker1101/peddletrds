import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Landing/Contact";
import Service from "./Pages/Landing/Service";
import About from "./Pages/Landing/About";
import Home from "./Pages/Landing/Home";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import DashboardIndex from "./Pages/Dashboard";
import Verify from "./Pages/Auth/Verify";
import ForgetPasswordConfirm from "./Pages/Auth/ForgetPasswordConfirm";

export default function RoutesPaths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      {/* auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/forget_password" element={<ForgetPassword />} />
      <Route path="/confirm_password" element={<ForgetPasswordConfirm />} />
      ''
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      {/* dashboard deposit_transaction*/}
      <Route path="/dashboard" element={<DashboardIndex />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
    </Routes>
  );
}
