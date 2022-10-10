import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarSection from "./Components/NavbarSection";
import FooterSection from "./Components/FooterSection";
import HomePage from "./Components/HomePage/HomePage";
import TeamsPage from "./Components/TeamsPage/TeamsPage";
import TestimonialPage from "./Components/TestimonialPage/TestimonialPage"
import PagenotfoundSection from "./Components/PagenotfoundSection";
import CaseStudiesPage from "./Components/CaseStudiesPage/CaseStudiesPage";

function App() {
  return (
    <div className="App">
      {/* <NavbarSection /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="team" element={<TeamsPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="testimonials" element={<TestimonialPage />} />

        <Route path="*" element={<PagenotfoundSection />} />
      </Routes>
      {/* 
    
      <VideoSection />
      <PartnersSection />
      <TestimonialSection />
      <ContactSection />
      */}
       <FooterSection />
    </div>
  );
}

export default App;
