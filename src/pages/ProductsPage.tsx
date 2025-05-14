import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Workflow
} from 'lucide-react';

const ProductsPage = () => {
  const features = [
    {
      title: "Code Search",
      description: "Semantic search powered by quantum-enhanced neural networks",
      icon: Search,
      completed: true
    },
    {
      title: "Refactoring",
      description: "Intelligent code restructuring with context awareness",
      icon: GitBranch,
      completed: true
    },
    {
      title: "Debugging",
      description: "Advanced error detection and correction",
      icon: Bug,
      completed: true
    },
    {
      title: "Repo Understanding",
      description: "Deep codebase analysis and documentation",
      icon: Code,
      completed: true
    },
    {
      title: "Checkpoints",
      description: "Automated code versioning and rollback",
      icon: CheckCircle2,
      completed: true
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration with your deployment pipeline",
      icon: Workflow,
      completed: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Cody IDE
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The world's first AI-native development environment powered by quantum neural networks
            </p>
          </div>

          {/* IDE Preview */}
          <Card className="border-0 shadow-2xl overflow-hidden bg-gray-900 p-1">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
                alt="Cody IDE Interface"
                className="w-full object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Core Capabilities */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Multi-Agent Orchestration</CardTitle>
                <CardDescription>
                  Coordinate multiple AI agents for complex development tasks with shared context and memory
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Memory + Context Layer</CardTitle>
                <CardDescription>
                  Persistent memory system for maintaining context across development sessions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Cpu className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Quantum-Enhanced Hooks</CardTitle>
                <CardDescription>
                  React hooks supercharged with quantum computing capabilities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* QNN Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Quantum Neural Network (QNN)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our quantum-enhanced neural network delivers unprecedented performance improvements:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <BarChart4 className="h-6 w-6 text-primary" />
                  <span className="text-lg">44.6% speedup on semantic search</span>
                </div>
                <div className="flex items-center gap-4">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="text-lg">Enhanced code quality & accuracy</span>
                </div>
                <div className="flex items-center gap-4">
                  <Network className="h-6 w-6 text-primary" />
                  <span className="text-lg">Hybrid GPU + quantum training</span>
                </div>
              </div>
            </div>
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10 p-8">
              <div className="grid grid-cols-3 gap-4 opacity-80">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-primary/20 animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Development Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                    {feature.completed && (
                      <span className="text-sm text-green-500 flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Ready
                      </span>
                    )}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
              Try Cody IDE Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;