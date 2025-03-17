import React from "react";
import "../css/QuickLinks.css";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <Link to="/programs">
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
      </Link>
      <Link to="/scholarship">
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
      </Link>
      <Link to="/campuses">
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
      </Link>
      <Link to="/requirements">
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
      </Link>
      <Link to="/calendar">
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
      </Link>
      <Link to="/news">
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
      </Link>
    </div>
  );
};

export default QuickLinks;
