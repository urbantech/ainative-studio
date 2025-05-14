import React, { useState } from 'react';
import { ButtonCustom } from '@/components/ui/button-custom';
import { Check, ChevronDown, ChevronUp, Cpu, Shield, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingFeature {
  title: string;
  start: boolean;
  pro: boolean;
  teams: boolean;
  enterprise: boolean;
}

const features: PricingFeature[] = [
  { title: 'Local inference', start: true, pro: true, teams: true, enterprise: true },
  { title: '50 completions/month', start: true, pro: true, teams: true, enterprise: true },
  { title: 'Community support', start: true, pro: true, teams: true, enterprise: true },
  { title: 'Hosted models, memory, 5 custom agents', start: false, pro: true, teams: true, enterprise: true },
  { title: 'Semantic code context', start: false, pro: true, teams: true, enterprise: true },
  { title: 'Quantum Boost add-on', start: false, pro: true, teams: true, enterprise: true },
  { title: 'Admin dashboard, usage analytics', start: false, pro: false, teams: true, enterprise: true },
  { title: 'Private VPC hosting, SSO', start: false, pro: false, teams: true, enterprise: true },
  { title: 'RBAC, Hybrid deployments', start: false, pro: false, teams: false, enterprise: true },
  { title: 'Access to QNN APIs', start: false, pro: false, teams: false, enterprise: true },
  { title: 'Custom training & volume pricing', start: false, pro: false, teams: false, enterprise: true }
];

const Pricing = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 6);

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Start Plan */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg scale-in">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-[#0E0D35] dark:text-white">Start</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                Perfect for trying out AI Native Studio
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0E0D35] dark:text-white">Free</span>
              </div>
              <ButtonCustom variant="outline" className="w-full mb-6">
                Get Started
              </ButtonCustom>
              <div className="space-y-3">
                {displayedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.start ? (
                      <Check className="h-5 w-5 text-[#4B6FED] mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                    )}
                    <span className={feature.start ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}>
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
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-[#0E0D35] dark:text-white">Pro</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                For developers and small teams
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0E0D35] dark:text-white">$15</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ButtonCustom variant="primary" className="w-full mb-6">
                Start Free Trial
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

          {/* Teams Plan */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg scale-in">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-[#0E0D35] dark:text-white">Teams</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                For growing development teams
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0E0D35] dark:text-white">$60</span>
                <span className="text-gray-500 dark:text-gray-400">/user/month</span>
              </div>
              <ButtonCustom variant="outline" className="w-full mb-6">
                Contact Sales
              </ButtonCustom>
              <div className="space-y-3">
                {displayedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    {feature.teams ? (
                      <Check className="h-5 w-5 text-[#4B6FED] mt-0.5 mr-2 flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                    )}
                    <span className={feature.teams ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}>
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
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-[#0E0D35] dark:text-white">Enterprise</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-12">
                Custom solutions for large organizations
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
                    <span className={feature.enterprise ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600"}>
                      {feature.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {features.length > 6 && (
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