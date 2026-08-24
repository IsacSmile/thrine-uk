import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { faqItems } from '../../data/faq';

export const FAQ: React.FC = () => {
  const accordionItems = faqItems.map((item, index) => ({
    id: `faq-${index}`,
    title: item.question,
    content: item.answer
  }));

  return (
    <section className="py-20 bg-paper border-b border-studio-border">
      <Container size="md">
        <SectionHeading
          eyebrow="09 / FREQUENTLY ASKED"
          title="Frequently Asked Questions"
          subtitle="Straight answers about working with us."
          align="center"
        />

        <Accordion items={accordionItems} />
      </Container>
    </section>
  );
};
