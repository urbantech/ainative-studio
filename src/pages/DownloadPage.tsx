import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Apple, Windows, Linux, Code, Terminal, Search, Zap } from 'lucide-react';

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Download className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Download AI Native Studio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get started with our powerful AI-native development environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-primary">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Apple className="h-6 w-6 text-primary" />
                  <CardTitle>macOS</CardTitle>
                </div>
                <CardDescription>Universal (Apple Silicon & Intel)</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  Download for Mac
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Version 1.0.0 (Latest)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Windows className="h-6 w-6 text-primary" />
                  <CardTitle>Windows</CardTitle>
                </div>
                <CardDescription>Windows 10/11 64-bit</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg">
                  Download for Windows
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Version 1.0.0 (Latest)
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-gray-800">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Linux className="h-6 w-6 text-gray-500" />
                  <CardTitle className="text-gray-500">Linux</CardTitle>
                </div>
                <CardDescription>Coming Soon</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" variant="outline" disabled>
                  Join Waitlist
                </Button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                  In development
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Plugin Availability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>VS Code Extension</CardTitle>
                  <CardDescription>Available now</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Install Extension</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-gray-500">Other IDEs</CardTitle>
                  <CardDescription>Coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">Support coming for:</p>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• JetBrains IDEs</li>
                    <li>• Vim/NeoVim</li>
                    <li>• Sublime Text</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Code className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Fast Mode</CardTitle>
                <CardDescription>
                  Lightning-fast code completion and suggestions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Terminal className="h-6 w-6 text-primary mb-2" />
                <CardTitle>CLI Interface</CardTitle>
                <CardDescription>
                  Powerful command-line tools for automation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Search className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Semantic Search</CardTitle>
                <CardDescription>
                  Intelligent code search and navigation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 text-primary mb-2" />
                <CardTitle>QNN Integration</CardTitle>
                <CardDescription>
                  Quantum-enhanced neural networks
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}