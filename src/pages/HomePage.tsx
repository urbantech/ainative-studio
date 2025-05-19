import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Network,
  Scale,
  Cpu,
  Database,
  Users,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#0D1117] text-white">

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-24 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        <div className="container-custom max-w-4xl mx-auto text-center px-4">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          >
            The AI Native Studio <span className="text-[#4B6FED]">For Builders</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10"
          >
            Empower your team with memory-powered agents, blazing-fast infrastructure,
            and a quantum-accelerated IDE experience.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.35 }}
          >
            <a
              href="https://calendly.com/seedlingstudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#4B6FED] hover:bg-[#3A56D3] text-white shadow-md hover:shadow-lg"
              >
                Book a Call
              </Button>
            </a>
            <Link to="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-[#4B6FED] text-white hover:bg-[#4B6FED]/10"
              >
                See Pricing
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-[#161B22]">
        <div className="container-custom max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Brain,
              title: 'Memory-Powered Agents',
              desc: 'Context-aware agents that remember your workflow and accelerate productivity.',
              link: '/blog/memory',
            },
            {
              icon: Network,
              title: 'Multi-Agent Collaboration',
              desc: 'Chain expert LLM agents to complete advanced software tasks together.',
              link: '/blog/agents',
            },
            {
              icon: Scale,
              title: 'Quantum Speed Scaling',
              desc: 'Experience near-instant inference and execution with enterprise scaling.',
              link: '/blog/scaling',
            },
          ].map(({ icon: Icon, title, desc, link }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#1C2128] rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <Icon className="h-8 w-8 text-[#4B6FED] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-400 mb-4">{desc}</p>
              <Link
                to={link}
                className="inline-flex items-center text-[#4B6FED] hover:underline text-sm font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-[#0D1117]">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Platform Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: Cpu,
                title: 'AI-Powered IDE',
                desc: 'Context-aware code suggestions, refactoring, and test generation in real-time.',
              },
              {
                icon: Database,
                title: 'QNN API Layer',
                desc: 'Expose quantum-accelerated ML APIs to frontend or microservices securely.',
              },
              {
                icon: Sparkles,
                title: 'MCP Stack',
                desc: 'Memory, Coordination, and Processing stack built for native AI acceleration.',
              },
              {
                icon: Users,
                title: 'Team-Based Agents',
                desc: 'Train agents to collaborate and share context across teams with persistent memory.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-[#161B22] rounded-xl p-6 border border-[#2D333B] hover:border-[#4B6FED] hover:shadow-lg transition-all duration-300"
              >
                <Icon className="h-6 w-6 text-[#4B6FED] mb-4" />
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
