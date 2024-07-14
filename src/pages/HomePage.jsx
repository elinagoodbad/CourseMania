import React from "react";
import Header from "../components/homePage/Header";
import Footer from "../components/homePage/Footer";
import TalentSection from "../components/homePage/TalentSection";
import FAQComponent from "../components/homePage/FAQComponent";

const HomePage = () => {
  return (
    <div>
      <Header />
      <TalentSection />
      <FAQComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
