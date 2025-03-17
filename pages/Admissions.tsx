import React from "react";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import AIChatbot from "../components/AIChatbot.tsx";
import "../css/Home.css";
import AdmissionInstruction from "../components/Admission-Instruction.tsx";

const Admissions = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <AdmissionInstruction />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Admissions;
