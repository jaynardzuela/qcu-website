import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AIChatbot from "../components/AIChatbot";
import "../css/Programs.css"; // Ensure you have the appropriate CSS file for styling

const Programs = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <div className="programs-section">
          <h2 className="programs-title">PROGRAMS OFFERED</h2>
          <div className="programs-grid">
            <div className="program-item">
              <img
                src="../assets/images/coe.png"
                alt="College of Engineering"
              />
              <div className="program-label">College of Engineering</div>
            </div>
            <div className="program-item">
              <img
                src="../assets/images/cbaa.png"
                alt="College of Business Administration and Accountancy"
              />
              <div className="program-label">
                College of Business Administration and Accountancy
              </div>
            </div>
            <div className="program-item">
              <img
                src="../assets/images/ccs.png"
                alt="College of Computer Studies"
              />
              <div className="program-label">College of Computer Studies</div>
            </div>
            <div className="program-item">
              <img src="../assets/images/coed.png" alt="College of Education" />
              <div className="program-label">College of Education</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Programs;
