import React from 'react';
import SectionHeader from '../sectioinHeader/SectionHeader';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <>
      <SectionHeader id="services" title="What We Do ?" subtitle="Service" />
      <ServicesCard />
    </>
  );
};

export default Services;
