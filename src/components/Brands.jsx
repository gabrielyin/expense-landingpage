import React from 'react';

import { overview } from '../data';

export default function Brands() {
  const { brands } = overview;
  return (
    <section className='py-9'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6'>
        {brands.map((item, index) => {
          const { image, delay } = item;
          return (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={delay}
            >
              <img src={image} alt="" />
            </div>
          )
        })}
      </div>
    </section>
  );
};