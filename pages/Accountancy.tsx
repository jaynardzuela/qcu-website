import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AIChatbot from "../components/AIChatbot.tsx";
import "../css/Home.css";

const Accountancy = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Accountancy;
