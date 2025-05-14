import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Book, Code, Terminal, ArrowRight, Database, Network, Brain, Cpu } from "lucide-react";

export default function DevResourcesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('react');

  const apiEndpoints = {
    coordination: [
      { method: 'POST', endpoint: '/messages/', description: 'Create inter-agent messages' },
      { method: 'GET', endpoint: '/messages/{agent_id}', description: 'Get messages for an agent' },
      { method: 'POST', endpoint: '/sequences/', description: 'Create new task sequences' },
      { method: 'POST', endpoint: '/sequences/{sequence_id}/tasks', description: 'Add tasks to a sequence' },
      { method: 'POST', endpoint: '/sequences/{sequence_id}/execute', description: 'Execute a task sequence' },
      { method: 'GET', endpoint: '/sequences/{sequence_id}', description: 'Get sequence status' },
      { method: 'GET', endpoint: '/agents/workload', description: 'Get agent workload statistics' },
      { method: 'PUT', endpoint: '/messages/{message_id}/read', description: 'Mark messages as read' }
    ],
    memory: [
      { method: 'POST', endpoint: '/agent/framework/memory', description: 'Create agent memory' },
      { method: 'GET', endpoint: '/agent/framework/memory/{memory_id}', description: 'Get memory by ID' },
      { method: 'PUT', endpoint: '/agent/framework/memory/{memory_id}', description: 'Update memory' },
      { method: 'DELETE', endpoint: '/agent/framework/memory/{memory_id}', description: 'Delete memory' },
      { method: 'POST', endpoint: '/agent/framework/memory/semantic-search', description: 'Semantic search of memories' }
    ],
    orchestration: [
      { method: 'POST', endpoint: '/agents', description: 'Create an agent instance' },
      { method: 'GET', endpoint: '/agents', description: 'List all agent instances' },
      { method: 'POST', endpoint: '/tasks', description: 'Create and assign a task' },
      { method: 'POST', endpoint: '/tasks/{task_id}/execute', description: 'Execute a specific task' },
      { method: 'GET', endpoint: '/tasks/{task_id}', description: 'Get task status' }
    ]
  };

  const sdkExamples = {
    react: `import { AINative, useAgent } from '@ainative/react';

// Initialize the client
const client = new AINative({
  apiKey: 'your_api_key',
  options: {
    memory: true,
    agents: ['cody', 'assistant']
  }
});

// Use in your component
function App() {
  const { agent, memory } = useAgent('cody');

  const handleTask = async () => {
    const result = await agent.executeTask({
      type: 'code_review',
      content: 'path/to/file.ts'
    });
    console.log(result);
  };

  return (
    <AINative.Provider value={client}>
      <button onClick={handleTask}>Review Code</button>
    </AINative.Provider>
  );
}`,
    javascript: `const { AINative } = require('@ainative/sdk');

// Initialize the client
const client = new AINative({
  apiKey: 'your_api_key'
});

// Create an agent instance
const agent = client.createAgent('cody');

// Execute a task
async function reviewCode() {
  const result = await agent.executeTask({
    type: 'code_review',
    content: 'path/to/file.js'
  });
  console.log(result);
}

reviewCode();`,
    mobile: `import AINativeSDK from '@ainative/react-native';

// Initialize the client
const client = new AINativeSDK({
  apiKey: 'your_api_key'
});

// Use in your React Native component
function CodeReviewScreen() {
  const [results, setResults] = useState(null);

  const reviewCode = async () => {
    const agent = client.createAgent('cody');
    const review = await agent.executeTask({
      type: 'code_review',
      content: 'path/to/file.ts'
    });
    setResults(review);
  };

  return (
    <View>
      <Button onPress={reviewCode} title="Review Code" />
      {results && <Text>{results}</Text>}
    </View>
  );
}`
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Developer Resources</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete documentation for the AI Native Studio platform
            </p>
          </div>

          <Tabs defaultValue="api" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="sdk">SDK Documentation</TabsTrigger>
            </TabsList>

            <TabsContent value="api">
              <div className="grid grid-cols-1 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Network className="h-6 w-6 text-primary" />
                      <CardTitle>Agent Coordination API</CardTitle>
                    </div>
                    <CardDescription>Endpoints for managing agent communication and task coordination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {apiEndpoints.coordination.map((endpoint, index) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-sm font-mono px-2 py-1 rounded ${
                              endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                              endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                              endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-sm">{endpoint.endpoint}</code>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="h-6 w-6 text-primary" />
                      <CardTitle>Memory Framework API</CardTitle>
                    </div>
                    <CardDescription>Endpoints for managing agent memory and context</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {apiEndpoints.memory.map((endpoint, index) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-sm font-mono px-2 py-1 rounded ${
                              endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                              endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                              endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-sm">{endpoint.endpoint}</code>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Cpu className="h-6 w-6 text-primary" />
                      <CardTitle>Orchestration API</CardTitle>
                    </div>
                    <CardDescription>Endpoints for managing agent instances and tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {apiEndpoints.orchestration.map((endpoint, index) => (
                        <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-sm font-mono px-2 py-1 rounded ${
                              endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                              endpoint.method === 'POST' ? 'bg-green-100 text-green-700' :
                              endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-sm">{endpoint.endpoint}</code>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{endpoint.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sdk">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>SDK Implementation</CardTitle>
                  <CardDescription>
                    Choose your platform to see implementation examples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex space-x-4 mb-4">
                      <Button
                        variant={selectedLanguage === 'react' ? 'default' : 'outline'}
                        onClick={() => setSelectedLanguage('react')}
                      >
                        React
                      </Button>
                      <Button
                        variant={selectedLanguage === 'javascript' ? 'default' : 'outline'}
                        onClick={() => setSelectedLanguage('javascript')}
                      >
                        JavaScript
                      </Button>
                      <Button
                        variant={selectedLanguage === 'mobile' ? 'default' : 'outline'}
                        onClick={() => setSelectedLanguage('mobile')}
                      >
                        React Native
                      </Button>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
                        <code>{sdkExamples[selectedLanguage]}</code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Installation</CardTitle>
                    <CardDescription>
                      Install the SDK using your preferred package manager
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-sm text-gray-100">npm install @ainative/sdk</code>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-sm text-gray-100">yarn add @ainative/sdk</code>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                    <CardDescription>
                      Set up authentication for the SDK
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-sm text-gray-100">
                        <code>{`const client = new AINative({
  apiKey: process.env.AINATIVE_API_KEY
});`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Need help with implementation?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center">
                Join Our Discord
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}