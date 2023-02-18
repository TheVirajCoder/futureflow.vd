import React from 'react';

import portfolioImg from './portfolio-1.jpg';
import './PortfoliioCard.css';

const PorftfolioCard = () => {
  const cardData = [
    { title: 'Web Designing', subtitle: 'Category: Web Templates' },
    { title: 'Web Designing', subtitle: 'Category: Web Templates' },
    { title: 'Web Designing', subtitle: 'Category: Web Templates' }
  ];
  return (
    <section className="portfolioCard pb-5">
      <div className="container">
        <div className="d-flex flex-wrap">
          {cardData.map((item) => {
            return (
              <>
                <div className="col-lg-4 col-md-12 col-sm-12 p-2">
                  <div className="portfolio-card-main position-relative">
                    <img className="animated bounce infinite w-100" src={portfolioImg} alt="" />
                    <div className="portfolio-card-text position-absolute fixed-top hover-block text-center justify-content-center flex-column h-100">
                      <h4>{item.title}</h4>
                      <p className="font-weight-normal">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PorftfolioCard;
