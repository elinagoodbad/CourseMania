import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import ProjectContextProvider from "./context/ProjectContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProjectContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </AuthContextProvider>
      </ProductContextProvider>
    </ProjectContextProvider>
  </BrowserRouter>
);
