import React from "react";

import Header from "../components/Header.tsx";
import Banner from "../components/Banner.tsx";
import QuickLinks from "../components/QuickLinks.tsx";
import Values from "../components/Values.tsx";
import Calendar from "../components/Calendar.tsx";
import Footer from "../components/Footer.tsx";
import AIChatbot from "../components/AIChatbot.tsx";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <Banner />
        <QuickLinks />
      </div>
      <Values />
      <Calendar />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Home;
