// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import CoursesPage from "../pages/CoursesPage";
// import AboutPage from "../pages/AboutPage";
// import ContactPage from "../pages/ContactPage";
// import Register from "../components/auth/Register";
// import Login from "../components/auth/Login";
// import Activate from "../components/auth/Activate";
// import ForgotPassword from "../components/auth/ForgotPassword";
// import ForgotPasswordSolution from "../components/auth/ForgotPasswordSolution";
// import ChangePassword from "../components/auth/ChangePassword";
// import FavoritesPage from "../pages/FavoritesPage";
// import ProductList from "../components/products/ProductList";
// import AddCourse from "../components/products/AddCourse";
// import EditCourse from "../components/products/EditCourse";
// import AddProject from "../components/products/AddProject";
// import Cart from "../pages/Cart";

// const MainRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/courses" element={<CoursesPage />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/contact" element={<ContactPage />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/activate" element={<Activate />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ForgotPasswordSolution />} />
//       <Route path="/change-password" element={<ChangePassword />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/favorites" element={<FavoritesPage />} />
//       <Route path="/addCourse" element={<AddCourse />} />
//       <Route path="/edit/:slug" element={<EditCourse />} />
//       <Route path="/productList" element={<ProductList />} />
//       <Route path="/addProject" element={<AddProject />} />
//     </Routes>
//   );
// };

// export default MainRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import ContactPage from "../pages/ContactPage";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Activate from "../components/auth/Activate";
import ForgotPassword from "../components/auth/ForgotPassword";
import ForgotPasswordSolution from "../components/auth/ForgotPasswordSolution";
import ChangePassword from "../components/auth/ChangePassword";
import FavoritesPage from "../pages/FavoritesPage";
import ProductList from "../components/products/ProductList";
import AddCourse from "../components/products/AddCourse";
import EditCourse from "../components/products/EditCourse";
import AddProject from "../components/products/ProjectCRUD/AddProject";
import ProjectList from "../components/products/ProjectCRUD/ProjectList";
import AboutPage from "../pages/AboutPage";
import Cart from "../pages/Cart";
const MainRoutes = () => {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />{" "}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />{" "}
      <Route path="/register" element={<Register />} />
      <Route path="/activate" element={<Activate />} />{" "}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />{" "}
      <Route path="/reset-password" element={<ForgotPasswordSolution />} />
      <Route path="/change-password" element={<ChangePassword />} />{" "}
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<FavoritesPage />} />{" "}
      <Route path="/addCourse" element={<AddCourse />} />
      <Route path="/edit/:slug" element={<EditCourse />} />{" "}
      <Route path="/productList" element={<ProductList />} />
      <Route path="/projectList" element={<ProjectList />} />{" "}
      <Route path="/addProject" element={<AddProject />} />
    </Routes>
  );
};
export default MainRoutes;
