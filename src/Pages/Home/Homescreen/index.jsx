import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import AboutMe from '../AboutMe';
import MySkills from '../MySkills';
import Project from '../Project';
import Experience from '../Experience';
import ContactMe from '../ContactMe';
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <HeroSection />
      
      <AboutMe />
      
      <MySkills />
      
      <Project />
      
      <Experience />
      
      <ContactMe />
      
      <Footer/>
    </>
  );
}