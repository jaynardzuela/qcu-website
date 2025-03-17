import React from "react";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AIChatbot from "../components/AIChatbot.tsx";
import History from "../components/History.tsx";
import "../css/Home.css";

const About = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <History />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default About;
