import React from 'react';

import { nav } from '../data';

export default function Nav() {
  return (
    <div>
      <ul className='flex gap-x-10'>
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <a className='hover:text-accent transition' href={href}>{name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  );
};