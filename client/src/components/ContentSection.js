import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <div className="content-section">
      <h2 className="section-title">Courses We Offer</h2>
      <div className="card-container">
        <div className="card">
          <h3 className="card-title">Web Development</h3>
          <p className="card-description">
            Learn how to build modern websites using HTML, CSS, and JavaScript. Master the skills to become a web developer.
          </p>
          <button className="card-button">Learn More</button>
        </div>

        <div className="card">
          <h3 className="card-title">Data Science</h3>
          <p className="card-description">
            Dive into data analysis, machine learning, and statistical modeling to become proficient in data science.
          </p>
          <button className="card-button">Learn More</button>
        </div>

        <div className="card">
          <h3 className="card-title">Cybersecurity</h3>
          <p className="card-description">
            Protect systems and networks. Learn essential cybersecurity skills to secure digital assets.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
