import React from "react";
import NewsItem from "./NewsItem";
import "../css/NewsSection.css"; // Ensure you have the appropriate CSS file for styling

const NewsSection = () => {
  return (
    <div className="news-section">
      <h1 className="news-header">More Latest News</h1>
      <div className="news-section-grid">
        <NewsItem
          date="March 10, 2025"
          title="Quezon City University and Konkuk University South Korea Strengthen Ties for ICT and Research Advancement"
          description="The new east wing of our library will be opening next month, featuring study pods and digital resources."
          image="../assets/images/news2.png"
          category="Campus"
        />
        <NewsItem
          date="March 5, 2025"
          title="QCU Ligers Pep Squad Shines as 2nd Runner-Up at Milo Cheerdance Competition 2025"
          description="Registration is now open for spring sports including soccer, track and field, and baseball."
          image="../assets/images/news3.png"
          category="Sports"
        />
        <NewsItem
          date="February 28, 2025"
          title="Team QCU1 Qualifies for VEX World Robotics Championship, Set to Compete in Dallas, Texas"
          description="Parent-teacher conferences will be held next week to discuss student progress and address any concerns."
          image="../assets/images/news4.png"
          category="Events"
        />
        <NewsItem
          date="February 20, 2025"
          title="QCU Strengthens Partnership with Barangay Bagbag for Education and Community Development"
          description="Our annual student art exhibition will showcase the creative talents of our students in various mediums."
          image="../assets/images/news5.png"
          category="Arts"
        />
      </div>
    </div>
  );
};

export default NewsSection;
