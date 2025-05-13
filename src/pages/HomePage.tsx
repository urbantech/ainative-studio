import React from 'react';
import Hero from '@/components/sections/Hero';
import AudioDemo from '@/components/sections/AudioDemo';
import Solutions from '@/components/sections/Solutions';
import Pricing from '@/components/sections/Pricing';
import Documentation from '@/components/sections/Documentation';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AudioDemo />
      <Solutions />
      <Pricing />
      <Documentation />
    </>
  );
};

export default HomePage;