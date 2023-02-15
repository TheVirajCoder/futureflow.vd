import React from 'react';

import pencilCase from './pencil-case.svg';
import './servicesCard.css';

const ServicesCard = () => {
  const data = [
    {
      logo: pencilCase,
      title: 'Adipisicing',
      description:
        'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
    },
    {
      logo: pencilCase,
      title: 'Adipisicing',
      description:
        'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
    },
    {
      logo: pencilCase,
      title: 'Adipisicing',
      description:
        'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
    },
    {
      logo: pencilCase,
      title: 'Adipisicing',
      description:
        'Labore velit culpa adipisci excepturi consequuntur itaque in nam molestias dolorem iste quod.'
    }
  ];

  return (
    <section className="services-card mb-5">
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <>
                <div className="col-lg-3 col-md-6 col-sm-12 card-main d-flex justify-content-center align-items-center flex-column text-center">
                  <div className="border-card h-100">
                    <img className="logo" src={item.logo} alt="" />
                    <h6 className="title">{item.title}</h6>
                    <p className="subtitle px-4">{item.description}</p>
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

export default ServicesCard;
