import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AIChatbot from "../components/AIChatbot";
import JoyBOTInterface from "../components/JoyBOTInterface";
import "../css/Home.css";

const JoyBOT = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <JoyBOTInterface />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default JoyBOT;
