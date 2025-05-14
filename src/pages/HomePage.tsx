import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Network, Scale, Cpu, Database, Users, Sparkles, ArrowRight, FileText, Book, Rocket, FlaskRound as Flask } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom mx-auto text-center relative">
          {/* Animated grid background */}
          <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="h-8 bg-primary/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight mb-6">
            The AI Native Studio<br />for Builders
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-native, full-stack development with memory, reasoning, and quantum acceleration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://calendly.com/seedlingstudio/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book a Call
              </Button>
            </a>
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                See Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Long-Term Memory</CardTitle>
                <CardDescription>
                  Persistent context understanding across sessions with advanced memory management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/blog/memory" className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Network className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Multi-Agent Coordination</CardTitle>
                <CardDescription>
                  Seamless collaboration between specialized AI agents for complex tasks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/blog/agents" className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Scale className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Scaling & Throughput</CardTitle>
                <CardDescription>
                  Enterprise-grade performance with quantum-enhanced processing capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/blog/scaling" className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0">
              <CardHeader>
                <Cpu className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Core App</CardTitle>
                <CardDescription>
                  Advanced IDE with AI-powered code completion, refactoring, and debugging.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0">
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-4" />
                <CardTitle>QNN APIs</CardTitle>
                <CardDescription>
                  Quantum Neural Network APIs for accelerated machine learning operations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <CardTitle>MCP Stack</CardTitle>
                <CardDescription>
                  Memory, Coordination, and Processing stack for AI-native development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Shared Memory Agents</CardTitle>
                <CardDescription>
                  Collaborative AI agents with shared context and memory systems.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Ambassador Program */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Join Our Ambassador Program</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Help shape the future of AI-native development. Get early access to features, exclusive events, and connect with fellow builders.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply to be an Ambassador
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Developers collaborating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Builder Resources */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Builder Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/dev-resources">
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-primary/20">
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-xl">Documentation</CardTitle>
                  <CardDescription>
                    Comprehensive guides and API references
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/tutorials">
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-primary/20">
                <CardHeader>
                  <Book className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-xl">Tutorials</CardTitle>
                  <CardDescription>
                    Step-by-step guides and examples
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/credits">
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-primary/20">
                <CardHeader>
                  <Rocket className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-xl">Startup Credits</CardTitle>
                  <CardDescription>
                    Resources for early-stage companies
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            
            <Link to="/research">
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-primary/20">
                <CardHeader>
                  <Flask className="h-8 w-8 text-primary mb-3" />
                  <CardTitle className="text-xl">Research</CardTitle>
                  <CardDescription>
                    Latest in quantum AI development
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;