import React from 'react';
import { Partners } from '../components/Partners/Partners';
import { Hero } from '../components/Hero/Hero,';

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero/>
      <Partners/>
    </div>
  );
};

export default Homepage;
