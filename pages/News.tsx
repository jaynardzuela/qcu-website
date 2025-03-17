import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AIChatbot from "../components/AIChatbot.tsx";
import "../css/Home.css";
import NewsSection from "../components/NewsSection.tsx";
const News = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <NewsSection />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default News;
