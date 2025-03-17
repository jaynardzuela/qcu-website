import "../css/QuickLinks.css";
import React from "react";

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <button
        className="quick-link-button"
        style={{ backgroundImage: "url('./assets/images/btbg1.png')" }}
      >
        <div className="button-content">
          <img
            src="./assets/images/programs-icon.png"
            alt="Programs Offered"
            className="button-icon"
          />
          <span>Programs Offered</span>
        </div>
      </button>
      <button
        className="quick-link-button"
        style={{ backgroundImage: "url('./assets/images/btbg2.png')" }}
      >
        <div className="button-content">
          <img
            src="./assets/images/scholarship-icon.png"
            alt="Apply For Scholarship"
            className="button-icon"
          />
          <span>Apply For Scholarship</span>
        </div>
      </button>
      <button
        className="quick-link-button"
        style={{ backgroundImage: "url('./assets/images/btbg3.png')" }}
      >
        <div className="button-content">
          <img
            src="./assets/images/campuses-icon.png"
            alt="Campuses"
            className="button-icon"
          />
          <span>School Campuses</span>
        </div>
      </button>
      <button
        className="quick-link-button"
        style={{ backgroundImage: "url('./assets/images/btbg4.png')" }}
      >
        <div className="button-content">
          <img
            src="./assets/images/requirements-icon.png"
            alt="Request for Requirements"
            className="button-icon"
          />
          <span>Request Requirements</span>
        </div>
      </button>
      <button
        className="quick-link-button"
        style={{ backgroundImage: "url('./assets/images/btbg5.png')" }}
      >
        <div className="button-content">
          <img
            src="./assets/images/calendar-icon.png"
            alt="Academic Calendar"
            className="button-icon"
          />
          <span>Academic Calendar</span>
        </div>
      </button>
      <button
        className="quick-link-button"
        style={{ backgroundImage: "url('./assets/images/btbg6.png')" }}
      >
        <div className="button-content">
          <img
            src="./assets/images/news-icon.png"
            alt="News"
            className="button-icon"
          />
          <span>Latest News</span>
        </div>
      </button>
    </div>
  );
};

export default QuickLinks;
