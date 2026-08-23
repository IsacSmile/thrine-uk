import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { services } from '../../data/services';
import { ServiceCard } from './ServiceCard';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-paper border-b border-studio-border">
      <Container>
        <SectionHeading
          eyebrow="03 / CAPABILITIES"
          title="Core Offerings"
          subtitle="I specialize exclusively in 2 core software offerings engineered to deliver concrete business outcomes."
        />

        <div className="border-t border-studio-border divide-y divide-studio-border">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
