import React, { useState } from 'react';
import {
  Cpu, Shield, Users, Zap, Check, ChevronDown, ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
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
  { title: 'Custom training & volume pricing', start: false, pro: false, teams: false, enterprise: true },
];

const plans = [
  {
    name: 'Start',
    icon: Cpu,
    price: 'Free',
    buttonText: 'Get Started',
    description: 'Perfect for trying out AI Native Studio',
    level: 'start',
    highlight: false,
  },
  {
    name: 'Pro',
    icon: Zap,
    price: '$15',
    sub: '/month',
    buttonText: 'Start Free Trial',
    description: 'For developers and small teams',
    level: 'pro',
    highlight: true,
  },
  {
    name: 'Teams',
    icon: Users,
    price: '$60',
    sub: '/user/month',
    buttonText: 'Contact Sales',
    description: 'For growing development teams',
    level: 'teams',
    highlight: false,
  },
  {
    name: 'Enterprise',
    icon: Shield,
    price: 'Custom',
    buttonText: 'Contact Sales',
    description: 'Custom solutions for large organizations',
    level: 'enterprise',
    highlight: false,
  },
];

export default function PricingPage() {
  const [showAll, setShowAll] = useState(false);
  const shownFeatures = showAll ? features : features.slice(0, 6);

  return (
    <section className="bg-[#0D1117] text-white py-28">
      <div className="max-w-screen-xl mx-auto px-6 space-y-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-wider text-[#4B6FED]/80 mb-3">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Pick a plan tailored for your team size and development stage.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`
                rounded-2xl relative overflow-hidden p-6 
                ${plan.highlight ? 'border-2 border-[#4B6FED] shadow-lg bg-[#1D2230]' : 'border border-white/10 bg-[#1C2128]'}
                transition-all duration-300 hover:scale-[1.02]
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-[#4B6FED] text-white text-xs font-semibold px-3 py-1 rounded-bl-md shadow-md">
                  POPULAR
                </div>
              )}

              <plan.icon className="h-6 w-6 text-[#4B6FED] mb-4" />
              <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
              <p className="text-gray-400 mb-4 h-12">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.sub && <span className="ml-1 text-sm text-gray-400">{plan.sub}</span>}
              </div>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className="w-full mb-6"
              >
                {plan.buttonText}
              </Button>

              {/* Features List */}
              <div className="space-y-3">
                {shownFeatures.map((feature, index) => {
                  const hasFeature = feature[plan.level as keyof typeof feature];
                  return (
                    <div key={index} className="flex items-start group">
                      {hasFeature ? (
                        <Check className="h-5 w-5 text-[#4B6FED] mt-0.5 mr-2 transition-transform duration-200 group-hover:scale-110" />
                      ) : (
                        <div className="h-5 w-5 mt-1 mr-2 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-500/40" />
                        </div>
                      )}
                      <span className={`text-sm ${hasFeature ? 'text-white' : 'text-gray-500'}`}>
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more/less */}
        {features.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center mx-auto text-[#4B6FED] hover:text-[#3A56D3] font-medium text-sm transition"
            >
              {showAll ? (
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
}
