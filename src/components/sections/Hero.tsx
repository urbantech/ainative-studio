import React from 'react';
import { ButtonCustom } from '@/components/ui/button-custom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-6">
          Reduce accessibility gaps in your<br />websites and mobile apps.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          AccessKit, can be used to tackle the biggest challenges in accessibility, providing the solution to all the accessibility gaps between UX design, and development. We provide a dynamic solution that makes accessibility (a11y) easy for any product team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonCustom variant="primary" size="lg" className="flex items-center justify-center">
            Get Started FREE
          </ButtonCustom>
          <ButtonCustom variant="outline" size="lg" className="flex items-center justify-center">
            Talk to us
          </ButtonCustom>
        </div>
      </div>
    </section>
  );
};

export default Hero;