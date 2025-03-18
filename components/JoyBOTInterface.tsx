import React from "react";
import "../css/JoyBOTInterface.css"; // Ensure the CSS file is correctly linked

const JoyBOTInterface = () => {
  return (
    <div className="joybot-container">
      <header className="joybot-header">
        <a href="/" className="back-link">
          &larr; Back
        </a>
        <img
          src="../assets/images/qcu-logo.png"
          alt="Quezon City University Logo"
          className="qcu-logo"
        />
      </header>
      <main className="joybot-content">
        <h1>
          Hello there, <span className="joybot-highlight">JoyBOT</span> at your
          service!
        </h1>
        <p>How can I assist you today?</p>
        <div className="joybot-input">
          <p>Ask me anything...</p>
          <div className="joybot-questions">
            <button className="joybot-question">
              Where is Quezon City University located?
            </button>
            <button className="joybot-question">When is the admission?</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JoyBOTInterface;
