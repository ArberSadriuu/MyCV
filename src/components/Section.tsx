import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => (
  <section id={id} className={className}>
    {children}
  </section>
);

export default Section; 