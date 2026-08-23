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
          eyebrow="08 / FREQUENTLY ASKED"
          title="Questions & Answers"
          subtitle="Everything you need to know about working with me on business websites and custom software systems."
          align="center"
        />

        <Accordion items={accordionItems} />
      </Container>
    </section>
  );
};
