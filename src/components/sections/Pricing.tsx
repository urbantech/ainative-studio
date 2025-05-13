import React, { useState } from 'react';
import { ButtonCustom } from '@/components/ui/button-custom';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  title: string;
  free: boolean;
  pro: boolean;
  enterprise: boolean;
}

const features: PricingFeature[] = [
  { title: 'Acronym vocalization', free: true, pro: true, enterprise: true },
  { title: 'Phone number formatting', free: true, pro: true, enterprise: true },
  { title: 'Date & time optimization', free: true, pro: true, enterprise: true },
  { title: 'Basic measurements', free: true, pro: true, enterprise: true },
  { title: 'Medical terms', free: false, pro: true, enterprise: true },
  { title: 'Scientific notation', free: false, pro: true, enterprise: true },
  { title: 'Custom vocabularies', free: false, pro: false, enterprise: true },
  { title: 'Priority support', free: false, pro: false, enterprise: true },
];

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly');
  };

  const displayedFeatures = showAllFeatures ? features : features.slice(0, 4);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E0D35] dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for your project. All plans include core functionality and regular updates.
          </p>

          <div className="mt-8 inline-flex items-center bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <button
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition",
                billingPeriod === 'monthly'
                  ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-300"
              )}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-6 py-2 text-sm font-medium rounded-full transition",
                billingPeriod === 'annual'
                  ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-300"
              )}
              onClick={() => setBillingPeriod('annual')}
            >
              Annual <span className="text-[#4B6FED] text-xs font-medium">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg scale-in">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0E0D35] dark:text-white mb-2">Free</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                Perfect for personal projects and small websites.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0E0D35] dark:text-white">$0</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ButtonCustom variant="outline" className="w-full mb-6">
                Get Started
              </ButtonCustom>
              <div className="space-y-3">
                {displayedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.free ? (
                      <Check className="h-5 w-5 text-[#4B6FED] mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                    )}
                    <span className={feature.free ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}>
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white dark:bg-gray-800 border-2 border-[#4B6FED] rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl relative scale-in">
            <div className="absolute top-0 right-0 bg-[#4B6FED] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0E0D35] dark:text-white mb-2">Pro</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                Ideal for businesses and professional websites.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0E0D35] dark:text-white">
                  ${billingPeriod === 'monthly' ? '29' : '23'}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
                {billingPeriod === 'annual' && (
                  <span className="ml-2 text-xs bg-[#4B6FED]/10 text-[#4B6FED] px-2 py-1 rounded-full">
                    Billed annually
                  </span>
                )}
              </div>
              <ButtonCustom variant="primary" className="w-full mb-6">
                Try for 14 days
              </ButtonCustom>
              <div className="space-y-3">
                {displayedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.pro ? (
                      <Check className="h-5 w-5 text-[#4B6FED] mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                    )}
                    <span className={feature.pro ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}>
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg scale-in">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0E0D35] dark:text-white mb-2">Enterprise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                Advanced features for large organizations.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0E0D35] dark:text-white">Custom</span>
              </div>
              <ButtonCustom variant="outline" className="w-full mb-6">
                Contact Sales
              </ButtonCustom>
              <div className="space-y-3">
                {displayedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.enterprise ? (
                      <Check className="h-5 w-5 text-[#4B6FED] mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                    )}
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {features.length > 4 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="flex items-center text-sm text-[#4B6FED] font-medium"
            >
              {showAllFeatures ? (
                <>
                  Show less features <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Show all features <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;