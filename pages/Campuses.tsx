import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AIChatbot from "../components/AIChatbot";
import "../css/Campuses.css"; // Ensure you have the appropriate CSS file for styling

const Campuses = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
        <h1 className="campus-header">
          Quezon City University | CAMPUS LOCATIONS
        </h1>
        <div className="campus-section">
          <div className="campus-item">
            <h2 className="campus-title">Main Campus</h2>
            <div className="campus-images">
              <img src="../assets/images/sb.png" alt="Main Campus 1" />
              <img src="../assets/images/sb-map.png" alt="Main Campus 2" />
            </div>
            <p className="campus-description">
              The Main Campus is located in the heart of Quezon City and offers
              a wide range of programs and facilities.
            </p>
          </div>
          <div className="campus-item">
            <h2 className="campus-title">San Francisco Campus</h2>
            <div className="campus-images">
              <img src="../assets/images/sf.png" alt="San Francisco Campus 1" />
              <img
                src="../assets/images/sf-map.png"
                alt="San Francisco Campus 2"
              />
            </div>
            <p className="campus-description">
              The San Francisco Campus is known for its state-of-the-art
              laboratories and research centers.
            </p>
          </div>
          <div className="campus-item">
            <h2 className="campus-title">Batasan Campus</h2>
            <div className="campus-images">
              <img src="../assets/images/btsn.png" alt="Batasan Campus 1" />
              <img src="../assets/images/btsn-map.png" alt="Batasan Campus 2" />
            </div>
            <p className="campus-description">
              The Batasan Campus offers specialized programs in law and public
              administration.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Campuses;
