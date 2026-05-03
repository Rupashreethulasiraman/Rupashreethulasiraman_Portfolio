import React from 'react';
import { Link } from "react-scroll"; // 1. Import the scroll tool!
import '../../App.css';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      {/* Ambient background glows */}
      <div className="glow-blob top-left"></div>
      <div className="glow-blob bottom-right"></div>

      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="hero-greeting">Hello World, I'm</p>
          
          <h1 className="hero-name">Rupashree</h1>
          
          <h2 className="hero-title">
            <span className="italic-dev">Full Stack</span>
            <br />
            <span className="bold-stack">Developer.</span>
          </h2>
          <p className="hero-description">
            Bridging the gap between beautiful design and robust engineering. I build scalable applications with modern technologies.
          </p>
        </div>

        <div className="hero-buttons">
          {/* 2. Changed to a scrolling Link targeting your Contact section */}
          <Link 
            to="Contact" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="btn btn-primary"
            style={{ cursor: "pointer" }}
          >
            Let's Talk
          </Link>

          {/* 3. Changed to a scrolling Link targeting your Projects section */}
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500} 
            className="btn btn-outline"
            style={{ cursor: "pointer" }}
          >
            View Work
          </Link>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="image-wrapper">
          <img src="./img/profile.jpg" alt="Rupashree" className="hero-img" />
        </div>
      </div>
    </section>
  );
}