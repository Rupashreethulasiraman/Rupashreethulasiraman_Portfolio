import React from "react";
import data from "../../data/index.json";

export default function Experience() {
  return (
    <section className="experience--section" id="Experience">
      <div className="experience--header">
        <p className="section--subtitle">MY JOURNEY</p>
        <h2 className="section--heading">Professional Experience.</h2>
      </div>

      <div className="timeline-container">
        {/* The glowing vertical line running down the middle/side */}
        <div className="timeline-track"></div>

        {data?.experience?.map((item, index) => (
          <div key={item.id} className="timeline-item">
            
            {/* The glowing dot on the timeline */}
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>

            {/* The Content Card */}
            <div className="timeline-content">
              <div className="timeline-card-header">
                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-date">{item.date}</span>
              </div>
              <h4 className="timeline-company">{item.company}</h4>
              <p className="timeline-description">{item.description}</p>
              
              <div className="timeline-tags">
                {item.tech.map((techItem, techIndex) => (
                  <span key={techIndex} className="tech-tag">{techItem}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}