import React from "react";
import { Link } from "react-router-dom";
import "../css/NewsItem.css"; // Ensure you have the appropriate CSS file for styling

const NewsItem = ({ date, title, description, image, category }) => {
  return (
    <div className="news-item">
      <div className="news-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="news-category">{category}</div>
      </div>
      <div className="news-content">
        <div className="news-date">{date}</div>
        <h2 className="news-title">{title}</h2>
        <p className="news-description">{description}</p>
        <Link to="/news/full-story" className="news-link">
          Read Full Story
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
