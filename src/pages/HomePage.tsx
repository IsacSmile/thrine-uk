import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { SelectedWork } from '../components/sections/SelectedWork';
import { HowItWorks } from '../components/sections/HowItWorks';
import { WhoThisIsFor } from '../components/sections/WhoThisIsFor';
import { Services } from '../components/sections/Services';
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

      {/* 02 — Client Proof Strip */}
      <TrustBar />

      {/* 03 — Selected Work (Outcome & Workflow Case Studies) */}
      <SelectedWork />

      {/* 04 — How The System Works (Interactive Customer vs Admin Walkthrough) */}
      <HowItWorks initialProject="travel" />

      {/* 05 — Who We Build For (3 Editorial Industry Columns) */}
      <WhoThisIsFor />

      {/* 06 — Core Capabilities (2 Major Service Groups) */}
      <Services />

      {/* 07 — Meet The Studio (Founder Profile & Remote Model) */}
      <About />

      {/* 08 — What Happens Next & Scope Transparency */}
      <WhatHappensNext />

      {/* 09 — Technical Trust */}
      <TechStack />

      {/* 10 — Commercial FAQ */}
      <FAQ />

      {/* 11 — Final Call to Action */}
      <CTA />
    </div>
  );
};
