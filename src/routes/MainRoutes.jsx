import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Activate from "../components/auth/Activate";
import ForgotPassword from "../components/auth/ForgotPassword";
import ForgotPasswordSolution from "../components/auth/ForgotPasswordSolution";
import ChangePassword from "../components/auth/ChangePassword";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/activate" element={<Activate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ForgotPasswordSolution />} />
      <Route path="/change-password" element={<ChangePassword />} />
    </Routes>
  );
};

export default MainRoutes;
