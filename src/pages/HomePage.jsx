import React from "react";
import Header from "../components/homePage/Header";
import Footer from "../components/homePage/Footer";
import Cards from "../components/homePage/Cards";
import FAQComponent from "../components/homePage/FAQComponent";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Cards />
      <FAQComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
