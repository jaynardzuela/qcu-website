import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AIChatbot from "../components/AIChatbot";
import NewsItem from "../components/NewsItem";
import NewsSection from "../components/NewsSection";

import "../css/News.css"; // Ensure you have the appropriate CSS file for styling
const News = () => {
  return (
    <div className="container">
      <div className="top-section">
        <Header />
      </div>
      <div className="news-section">
        <h1 className="news-header">School News & Updates</h1>
        <div className="news-grid">
          <NewsItem
            date="March 15, 2025"
            title="School Wins National Science Competition"
            description="Our students took first place in the National Science Fair with their innovative renewable energy project."
            image="../assets/images/news-1.png"
            category="Achievements"
          />
          {/* Add more NewsItem components as needed */}
        </div>
        <NewsSection />
      </div>
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default News;
