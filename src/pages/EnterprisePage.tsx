import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Shield, Zap, Brain, Code, Search, GitBranch, FileCode, TestTube, Bot, Terminal, ArrowRight, CheckCircle2, Network, PenTool as Tool, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureTag = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium">
    {children}
  </div>
);

export default function EnterprisePage() {
  return (
    <div className="full-width-section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Quantum Enabled AI for Enterprise Software Development
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Modernize your development team with AI to ship products faster, without the risk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://calendly.com/seedlingstudio/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                Schedule a Demo
              </Button>
            </a>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="text-gray-700 dark:text-gray-200 w-full sm:w-auto">
                View Plans
              </Button>
            </Link>
          </div>
        </div>

        {/* Outcome Benefits */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Increase in Developer Productivity</CardTitle>
                <CardDescription>
                  Accelerate time-to-delivery by decreasing PR cycle times and reaping the benefits of higher developer output.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Decrease in Onboarding Time</CardTitle>
                <CardDescription>
                  Enable smoother ramp-up with less tech debt and more maintainable, modern code.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Enterprise-Ready</CardTitle>
                <CardDescription>
                  Solutions built for security, compliance, change management, and analytics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Cody Can Handle
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <FeatureTag>Task Planning</FeatureTag>
            <FeatureTag>Unit Test Generation</FeatureTag>
            <FeatureTag>Code Modernization</FeatureTag>
            <FeatureTag>Writing Test Scripts</FeatureTag>
            <FeatureTag>Refactoring</FeatureTag>
            <FeatureTag>Debugging</FeatureTag>
            <FeatureTag>Semantic Code Search</FeatureTag>
            <FeatureTag>Agent Reasoning</FeatureTag>
            <FeatureTag>Enforcing Coding Standards</FeatureTag>
            <FeatureTag>Language Translation</FeatureTag>
            <FeatureTag>Code Reviews</FeatureTag>
            <FeatureTag>Documentation Support</FeatureTag>
          </div>
        </div>

        {/* Deployment Matrix */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Deployment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Terminal className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cody IDE</CardTitle>
                <CardDescription>
                  Most advanced, optimized version with full feature access
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cody Plugin</CardTitle>
                <CardDescription>
                  Lightweight integration for VS Code and JetBrains (coming soon)
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Security Note */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-primary bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                <CardTitle>Enterprise Security</CardTitle>
              </div>
              <CardDescription>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Self-hosted deployment options with air-gapped configurations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    No third-party dependencies; enterprise data never leaves the network
                  </li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Platform Capabilities */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Context-Awareness Engine</CardTitle>
                <CardDescription>
                  Deep semantic indexing and quantum search
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Bot className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Purpose-Built Models</CardTitle>
                <CardDescription>
                  Trained on repo structure for high-accuracy understanding
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Tool className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Tool Use</CardTitle>
                <CardDescription>
                  Modular agent tools with autonomous reasoning support
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Human Action Tracking</CardTitle>
                <CardDescription>
                  Real-time developer intent tracking for adaptive responses
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
            <CardHeader>
              <Network className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Infrastructure</CardTitle>
              <CardDescription className="text-lg">
                Cody AI's QNN system powers orchestration with quantum-enhanced context reasoning, enabling real-time collaboration and ML Ops performance at enterprise scale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}