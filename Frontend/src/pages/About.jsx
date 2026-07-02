import React from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { CompanyIntro } from '../components/about/CompanyIntro';
import { OurPhilosophy } from '../components/about/OurPhilosophy';
import { TrustStatistics } from '../components/about/TrustStatistics';
import { PeopleBehind } from '../components/about/PeopleBehind';
import { ManufacturingStory } from '../components/about/ManufacturingStory';
import { WhyTrustUs } from '../components/about/WhyTrustUs';
import { HowWeWork } from '../components/about/HowWeWork';
import { ConnectCTA } from '../components/products/ConnectCTA';
import './About.css';

export const About = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <CompanyIntro />
      <OurPhilosophy />
      <WhyTrustUs />
      <HowWeWork />
      <ManufacturingStory />
      <TrustStatistics />
      <PeopleBehind />
      <ConnectCTA
        title="Let's Build Something Meaningful Together"
        description="Whether you're building your dream home or planning a commercial project, we would be delighted to understand your requirements and explore the possibilities together."
      />
    </main>
  );
};
