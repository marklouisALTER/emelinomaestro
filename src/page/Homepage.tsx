import React from 'react';
import { Partners } from '../components/Partners/Partners';
import { Statistics } from '../components/Statistics/Statistics';
import { Hero } from '../components/Hero/Hero,';

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero/>
      <Statistics/>      
      <Partners/>
    </div>
  );
};

export default Homepage;
