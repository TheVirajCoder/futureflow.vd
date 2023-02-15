import React from 'react';
import SectionHeader from '../sectioinHeader/SectionHeader';
import PorftfolioCard from './PorftfolioCard';

const Portfolio = () => {
  return (
    <>
      <SectionHeader id="portfolio" title="What I Did ?" subtitle="Portfolio" />
      <PorftfolioCard />
    </>
  );
};

export default Portfolio;
