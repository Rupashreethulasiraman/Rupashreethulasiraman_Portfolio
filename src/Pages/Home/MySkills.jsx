import React from "react";
import data from "../../data/index.json";

export default function MySkills() {
 
  const skillsList = data?.skills?.map((item) => item.title) || [];

  return (
    <section className="skills-marquee-section" id="mySkills">
      
      <div className="skills-header">
        <span className="skills-subtitle">MY SKILLS</span>
        <div className="skills-line"></div>
      </div>

      
      <div className="marquee-container">
        <div className="marquee-content">
          
          <div className="marquee-group">
            {skillsList.map((skill, index) => (
              <React.Fragment key={`group1-${index}`}>
                <span className="marquee-text">{skill}</span>
                <span className="marquee-dot">•</span>
              </React.Fragment>
            ))}
          </div>

          <div className="marquee-group" aria-hidden="true">
            {skillsList.map((skill, index) => (
              <React.Fragment key={`group2-${index}`}>
                <span className="marquee-text">{skill}</span>
                <span className="marquee-dot">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-bottom-line"></div>
    </section>
  );
}
