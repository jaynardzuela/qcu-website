import React from "react";
import { Link } from "react-router-dom";
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
          <div className="programs-banner">
            <img
              src="../assets/images/programs-offered-banner.png"
              alt="Programs Offered"
              className="banner-image"
            />
            <div className="banner-text">Programs Offered</div>
          </div>
          <div className="programs-grid">
            <Link to="/programs/engineering" className="program-item">
              <img
                src="../assets/images/coe.png"
                alt="College of Engineering"
              />
              <div className="program-label">College of Engineering</div>
            </Link>
            <Link to="/programs/business" className="program-item">
              <img
                src="../assets/images/cbaa.png"
                alt="College of Business Administration and Accountancy"
              />
              <div className="program-label">
                College of Business Administration and Accountancy
              </div>
            </Link>
            <Link to="/programs/computer-studies" className="program-item">
              <img
                src="../assets/images/ccs.png"
                alt="College of Computer Studies"
              />
              <div className="program-label">College of Computer Studies</div>
            </Link>
            <Link to="/programs/education" className="program-item">
              <img src="../assets/images/coed.png" alt="College of Education" />
              <div className="program-label">College of Education</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Programs;
