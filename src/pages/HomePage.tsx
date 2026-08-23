import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { SelectedWork } from '../components/sections/SelectedWork';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Services } from '../components/sections/Services';
import { WhoThisIsFor } from '../components/sections/WhoThisIsFor';
import { SolutionsGrid } from '../components/sections/SolutionsGrid';
import { Process } from '../components/sections/Process';
import { About } from '../components/sections/About';
import { WhatHappensNext } from '../components/sections/WhatHappensNext';
import { TechStack } from '../components/sections/TechStack';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-paper text-editorial">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Trust Strip */}
      <TrustBar />

      {/* 03 — Selected Work (Outcome-Oriented Case Studies) */}
      <SelectedWork />

      {/* 04 — How The System Works (Interactive Dual-Role Walkthrough) */}
      <HowItWorks initialProject="bakery" />

      {/* 05 — What We Do / Capabilities */}
      <Services />

      {/* 06 — Who We Work With */}
      <WhoThisIsFor />

      {/* 07 — Solution Domain Matrix */}
      <SolutionsGrid />

      {/* 08 — The Studio & Founder Profile */}
      <About />

      {/* 09 — How We Work / Process & Risk Control */}
      <Process />

      {/* 10 — What Happens After You Contact Us & Pricing Philosophy */}
      <WhatHappensNext />

      {/* 11 — Tech Stack */}
      <TechStack />

      {/* 12 — Commercial FAQ */}
      <FAQ />

      {/* 13 — Final Call to Action */}
      <CTA />
    </div>
  );
};
