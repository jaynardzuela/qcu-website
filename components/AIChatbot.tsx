import React, { useState } from "react";
import "../css/AIChatbot.css";

const AIChatbot = () => {
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button
        className="chatbot-toggle"
        onClick={() => setChatbotVisible(!isChatbotVisible)}
      >
        <img
          src="../assets/images/joybot-logo.png"
          alt="Open Chatbot"
          className="chat-icon"
        />
      </button>

      {/* Chatbot UI (only visible when isChatbotVisible is true) */}
      {isChatbotVisible && (
        <div className="ai-chatbot">
          <div className="chatbot-header">
            <img
              src="../assets/images/joybot-logo.png"
              alt="Chatbot Icon"
              className="chatbot-icon"
            />
            <span>Ask AI assistant JoyBot...</span>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-response">
              {/* Placeholder for chatbot response */}
            </div>
            <div className="chatbot-suggestions">
              <button className="chatbot-suggestion">
                Where is Quezon City University located?
              </button>
              <button className="chatbot-suggestion">
                When is the admission?
              </button>
            </div>
            <input
              type="text"
              placeholder="Type here..."
              className="chatbot-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
