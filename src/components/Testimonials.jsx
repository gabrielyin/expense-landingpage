import React from 'react';

import { testimonials } from '../data';

import ClientSlider from '../components/ClientSlider';

export default function Testimonials() {
  const { title, clients } = testimonials;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <h2 className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'>{title}</h2>
        <div>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};