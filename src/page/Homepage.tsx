import React from 'react';
import { Partners } from '../components/Partners/Partners';
import { Hero } from '../components/Hero/Hero,';
import Meeting from '../components/Meeting/Meeting';
import { Products } from '../components/Products/Products';

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero/>
      <Partners/>
      <Meeting />
      <Products />
    </div>
  );
};

export default Homepage;
