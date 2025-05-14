import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Cpu, 
  Network, 
  Scale, 
  Zap, 
  BarChart2, 
  Search, 
  Code,
  ArrowRight
} from 'lucide-react';

export default function QNNPage() {
  return (
    <div className="full-width-section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Quantum Neural Networks — Unlock Next-Level AI Performance
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Empower your AI with quantum-enhanced capabilities for unmatched speed and precision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Quantum-Enhanced Speed</CardTitle>
                <CardDescription>
                  Quantum acceleration via QPUs with up to 15% performance boost
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Scale className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Precision and Accuracy</CardTitle>
                <CardDescription>
                  Superior semantic understanding and minimized coding errors
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Seamless Integration</CardTitle>
                <CardDescription>
                  API-first architecture designed to fit naturally into developer workflows
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Platform Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Platform Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Planning",
                "Test Generation",
                "Code Modernization",
                "Refactoring",
                "Debugging",
                "Code Review",
                "Semantic Code Search",
                "Agent Reasoning"
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-primary/20"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border border-primary/20">
                <CardHeader>
                  <CardTitle>Financial Services</CardTitle>
                  <CardDescription>
                    Accelerated fraud detection and risk modeling
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-primary/20">
                <CardHeader>
                  <CardTitle>Healthcare</CardTitle>
                  <CardDescription>
                    Improved diagnostic accuracy and predictive analytics
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-primary/20">
                <CardHeader>
                  <CardTitle>Software Development</CardTitle>
                  <CardDescription>
                    Quantum-enhanced code generation and optimization
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border border-primary/20">
                <CardHeader>
                  <CardTitle>Marketing Analytics</CardTitle>
                  <CardDescription>
                    Predictive accuracy and deeper customer insights
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* How QNN Works */}
          <div className="mb-16">
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">How QNN Works</CardTitle>
                <CardDescription className="text-lg">
                  Combines quantum mechanics and neural networks for exponential computational performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Superposition</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Evaluates many possibilities simultaneously
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Entanglement</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Qubit correlation improves knowledge sharing
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Interference</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Optimizes results and cancels errors during computation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Infrastructure Statement */}
          <div className="text-center">
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Infrastructure</CardTitle>
                <CardDescription className="text-lg">
                  Cody AI's Quantum Neural Network (QNN) redefines enterprise ML ops through orchestration, context-aware intelligence, and quantum-powered developer performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="http://calendly.com/seedlingstudio/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}