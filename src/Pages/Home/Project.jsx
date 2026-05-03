import React, { useState, useEffect } from "react";
import data from "../../data/index.json";

// 1. The Sub-Component that handles the slideshow and rendering
const ProjectCard = ({ project }) => {
  const images = project.images || [project.src || "/img/placeholder.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only run the interval if there is more than one image
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-card">
      {/* Image Container with Grayscale Hover Effect */}
      <div className="project-image-wrapper">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${project.title} slide ${index + 1}`}
            className={`project-slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Project Details */}
      <div className="project-info">
        <div className="project-meta">
          <span className="project-category">{project.category || "Development"}</span>
          <span className="project-year">{project.year || "2026"}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Render bullet points if they exist in the JSON */}
        {project.bullets && (
          <ul className="project-bullets">
            {project.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
        
        <a href={project.link || "#"} className="project-link" target="_blank" rel="noreferrer">
          <span className="link-text">View Project</span>
          <svg className="link-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

// 2. The Main Component that loops through your JSON
export default function Project() {
  return (
    <section className="projects--section" id="projects">
      <div className="projects-header">
        <span className="section--subtitle">MY WORK</span>
        <h2 className="section--heading">Selected Projects.</h2>
        <div className="projects-line"></div>
      </div>

      <div className="projects-grid">
        {data?.portfolio?.map((item, index) => (
          <ProjectCard key={index} project={item} />
        ))}
      </div>
    </section>
  );
}