import React from 'react'
import ContactSection from '../ContactSection'

import HeroSection from '../HeroSection'
import ServicesSection from '../ServicesSection'
import TeamsPage from '../TeamsPage/TeamsPage'
import CaseStudiesPage from '../CaseStudiesPage/CaseStudiesPage'
import TestimonialPage from '../TestimonialPage/TestimonialPage'
import VideoSection from '../VideoSection'
function HomePage() {
  return (
    <>
        <HeroSection />
        {/* <FeaturesSection /> */}
        <TestimonialPage />
        <ServicesSection />
        <CaseStudiesPage />
        <VideoSection />
        <TeamsPage />
        <ContactSection />
        
    </>
  )
}

export default HomePage