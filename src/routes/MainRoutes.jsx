import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Activate from "../components/auth/Activate";

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
    </Routes>
  );
};

export default MainRoutes;
