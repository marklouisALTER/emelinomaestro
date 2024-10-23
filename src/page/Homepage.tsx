import React from 'react';
import { Partners } from '../components/Partners/Partners';
import { Hero } from '../components/Hero/Hero,';
import Meeting from '../components/Meeting/Meeting';

const Homepage: React.FC = () => {
  return (
    <div>
      <Hero/>
      <Partners/>
      <Meeting />
    </div>
  );
};

export default Homepage;
