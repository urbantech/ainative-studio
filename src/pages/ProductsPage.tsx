import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Cpu,
  Code,
  Search,
  GitBranch,
  Bug,
  Database,
  Network,
  Zap,
  CheckCircle2,
  BarChart4,
  Workflow,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const fadeIn = {
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

const features = [
  { title: 'Code Search', description: 'Semantic search powered by quantum-enhanced neural networks.', icon: Search, completed: true },
  { title: 'Refactoring', description: 'Intelligent code restructuring with context awareness.', icon: GitBranch, completed: true },
  { title: 'Debugging', description: 'Advanced error detection and correction.', icon: Bug, completed: true },
  { title: 'Repo Understanding', description: 'Deep codebase analysis and documentation.', icon: Code, completed: true },
  { title: 'Checkpoints', description: 'Automated code versioning and rollback.', icon: CheckCircle2, completed: true },
  { title: 'CI/CD Integration', description: 'Seamless integration with your deployment pipeline.', icon: Workflow, completed: true },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#0D1117] text-white font-sans">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32 space-y-32">

        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeIn}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Cody IDE
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The world’s first AI-native development environment powered by quantum neural networks.
          </p>
        </motion.div>

        {/* CORE CAPABILITIES */}
        <section className="space-y-14">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Core Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Brain, title: 'Multi-Agent Orchestration', desc: 'Coordinate multiple AI agents for complex development tasks with shared context and memory.' },
              { icon: Database, title: 'Memory + Context Layer', desc: 'Persistent memory system for maintaining context across development sessions.' },
              { icon: Cpu, title: 'Quantum-Enhanced Hooks', desc: 'React hooks supercharged with quantum computing capabilities.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Card className="bg-[#1C2128]/90 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition-all rounded-xl p-6">
                  <CardHeader className="space-y-3">
                    <Icon className="h-8 w-8 text-[#4B6FED]" />
                    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">{desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QNN SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quantum Neural Network (QNN)</h2>
            <p className="text-gray-400 mb-8">
              Our quantum-enhanced neural network delivers unprecedented performance improvements:
            </p>
            <div className="space-y-4">
              {[
                { icon: BarChart4, text: '44.6% speedup on semantic search' },
                { icon: Zap, text: 'Enhanced code quality & accuracy' },
                { icon: Network, text: 'Hybrid GPU + quantum training' },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  className="flex items-center gap-4 p-4 bg-[#1F2937] rounded-lg"
                >
                  <Icon className="h-6 w-6 text-[#4B6FED]" />
                  <span className="text-base text-white">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 bg-[#4B6FED]/10 p-8 rounded-xl"
            initial="hidden"
            animate="show"
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-lg bg-[#4B6FED]/30 animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: 'inset 0 0 15px rgba(75, 111, 237, 0.3)',
                }}
              />
            ))}
          </motion.div>
        </section>

        {/* DEVELOPMENT FEATURES */}
        <section className="space-y-14">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center"
          >
            Development Features
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <motion.div key={i} custom={i} variants={fadeIn}>
                <Card className="bg-[#1C2128]/90 border border-white/10 hover:border-[#4B6FED] transition-all rounded-xl p-6">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-[#4B6FED]/10 rounded-md">
                        <feature.icon className="h-6 w-6 text-[#4B6FED]" />
                      </div>
                      {feature.completed && (
                        <span className="text-sm text-green-400 flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full">
                          <CheckCircle2 className="h-4 w-4" />
                          Ready
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-md font-semibold">{feature.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-400">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-[#4B6FED] hover:bg-[#3A56D3] text-white text-lg px-6 py-3 rounded-md shadow-md">
              Try Cody IDE Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
