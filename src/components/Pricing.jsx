import React, { useState } from 'react';

import { pricing } from '../data';

import { HiCheck, HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function Pricing() {
  const [index, setIndex] = useState(1);

  const { title, cards } = pricing;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-10 lg:mb-20 text-center'>{title}</h2>
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] lg:gap-y-0 justify-center items-center gap-y-[30px]'>
          {cards.map((card, cardIndex) => {
            const { icon, title, services, price, userAmount, btnText, delay } = card;
            return (
              <div key={cardIndex}>
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${cardIndex === index ? 'bg-white shadow-2xl' : 'border border-grey'} w-[350px] h-[350px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                >
                  <div className='mb-8'>
                    <img src={icon} alt="" />
                  </div>
                  <div
                    className='text-[32px] font-semibold mb-8'
                  >
                    {title}
                  </div>
                  <div>
                    {services.map((service, index) => {
                      const { name } = service
                      return (
                        <div key={index} className='flex items-center gap-x-[10px]'>
                          <HiCheck className='text-light' />
                          {name}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};
