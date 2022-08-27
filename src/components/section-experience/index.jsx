import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;
  console.log(experience)
  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          reference={item.reference}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
