import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Book, Code, Terminal, ArrowRight } from "lucide-react";

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      icon: FileText,
      links: ["Quick Start Guide", "Installation", "Basic Concepts"]
    },
    {
      title: "API Reference",
      description: "Detailed documentation of our API endpoints",
      icon: Code,
      links: ["Authentication", "Endpoints", "Rate Limits"]
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides for common use cases",
      icon: Book,
      links: ["Basic Tutorial", "Advanced Features", "Best Practices"]
    },
    {
      title: "CLI Documentation",
      description: "Command-line interface documentation",
      icon: Terminal,
      links: ["Commands", "Configuration", "Plugins"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about AccessKit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {sections.map((section, index) => (
              <Card key={index} className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {React.createElement(section.icon, { className: "h-5 w-5" })}
                    </div>
                    <CardTitle className="text-xl text-gray-800 dark:text-white">{section.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary p-2 h-auto font-normal"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          {link}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 dark:text-white">Quick Implementation</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Get started with just a few lines of code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{`import { AccessKit } from '@accesskit/react';

// Initialize AccessKit
const accessKit = new AccessKit({
  apiKey: 'your_api_key',
  options: {
    enableVoiceOver: true,
    enableScreenReader: true
  }
});

// Wrap your component
function App() {
  return (
    <AccessKit.Provider value={accessKit}>
      <YourComponent />
    </AccessKit.Provider>
  );
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Need help getting started?
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white flex items-center">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}