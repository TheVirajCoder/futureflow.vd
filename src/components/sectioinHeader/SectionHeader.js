/* eslint-disable react/prop-types */
import React from 'react';

import './SectionHeader.css';

const SectionHeader = ({ id, title, subtitle }) => {
  return (
    <section id={id} className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <p className="section-subtitle">{title}</p>
              <h6 className="section-title mb-6">{subtitle}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
