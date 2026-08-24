import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { SelectedWork } from '../components/sections/SelectedWork';
import { SocialProof } from '../components/sections/SocialProof';
import { Services } from '../components/sections/Services';
import { WhyThrine } from '../components/sections/WhyThrine';
import { Process } from '../components/sections/Process';
import { About } from '../components/sections/About';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-paper text-editorial">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Agency Trust & Capabilities Matrix */}
      <TrustBar />

      {/* 03 — Featured Case Studies (Bakery & Tours Platforms) */}
      <SelectedWork />

      {/* 04 — Social Proof (Real Businesses. Real Results.) */}
      <SocialProof />

      {/* 05 — Core Engineering Services (4 Pillars) */}
      <Services />

      {/* 06 — Why Thrine (5 Agency Trust Pillars) */}
      <WhyThrine />

      {/* 07 — 6-Step Agency Delivery Process */}
      <Process />

      {/* 08 — Studio Team Profile */}
      <About />

      {/* 09 — Commercial Buyer FAQ */}
      <FAQ />

      {/* 10 — Final Conversion Call to Action */}
      <CTA />
    </div>
  );
};
