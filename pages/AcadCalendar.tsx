import React from "react";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AIChatbot from "../components/AIChatbot.tsx";
import "../css/Home.css";
import AcademicCalendar from "../components/Academic-Calendar.tsx";

const AcadCalenadar = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <AcademicCalendar />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default AcadCalenadar;
