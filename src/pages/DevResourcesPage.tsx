import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, Book, Code, Terminal, ArrowRight, Database, 
  Network, Brain, Cpu, MessageSquare, Search, Bug, 
  BarChart2, Users, Folder, AlertTriangle, Shield
} from 'lucide-react';

const ApiSection = ({ title, icon: Icon, description, endpoints }) => (
  <Card className="mb-8">
    <CardHeader>
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-6 w-6 text-primary" />
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {endpoints.map((endpoint, index) => (
          <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-sm font-mono px-2 py-1 rounded ${
                endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' :
                endpoint.method === 'POST' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
                endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
                'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
              }`}>
                {endpoint.method}
              </span>
              <code className="text-sm">{endpoint.path}</code>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{endpoint.description}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default function DevResourcesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('react');

  const apiEndpoints = {
    context: {
      title: "Context Management",
      icon: Brain,
      description: "Endpoints for managing AI context and conversations",
      endpoints: [
        { method: 'GET', path: '/api/v1/ai-context/contexts/', description: 'List all contexts' },
        { method: 'GET', path: '/api/v1/ai-context/contexts/{context_id}', description: 'Get specific context' },
        { method: 'GET', path: '/api/v1/ai-context/conversations/', description: 'List all conversations' },
        { method: 'GET', path: '/api/v1/ai-context/conversations/{conversation_id}', description: 'Get specific conversation' },
        { method: 'POST', path: '/api/v1/ai-context/conversations/{conversation_id}/messages/', description: 'Add message to conversation' }
      ]
    },
    orchestration: {
      title: "AI Orchestration",
      icon: Network,
      description: "Endpoints for managing AI requests and orchestration",
      endpoints: [
        { method: 'POST', path: '/api/v1/ai-orchestration/requests', description: 'Create new AI request' },
        { method: 'GET', path: '/api/v1/ai-orchestration/requests/{request_id}', description: 'Get request status' }
      ]
    },
    usage: {
      title: "Usage & Analytics",
      icon: BarChart2,
      description: "Endpoints for monitoring AI usage and costs",
      endpoints: [
        { method: 'GET', path: '/api/v1/ai-usage/aggregate', description: 'Get aggregated usage statistics' },
        { method: 'GET', path: '/api/v1/ai-usage/cache/metrics', description: 'Get cache performance metrics' },
        { method: 'GET', path: '/api/v1/ai-usage/costs', description: 'Get usage costs' },
        { method: 'GET', path: '/api/v1/ai-usage/logs', description: 'Get usage logs' },
        { method: 'GET', path: '/api/v1/ai-usage/logs/{log_id}', description: 'Get specific log entry' }
      ]
    },
    chat: {
      title: "Chat Sessions",
      icon: MessageSquare,
      description: "Endpoints for managing chat sessions and messages",
      endpoints: [
        { method: 'GET', path: '/api/v1/chat/sessions/', description: 'List all chat sessions' },
        { method: 'GET', path: '/api/v1/chat/sessions/{chat_session_id}', description: 'Get specific chat session' },
        { method: 'GET', path: '/api/v1/chat/sessions/{chat_session_id}/messages/', description: 'Get messages for a chat session' }
      ]
    },
    codeQuality: {
      title: "Code Quality",
      icon: Code,
      description: "Endpoints for code analysis and improvements",
      endpoints: [
        { method: 'GET', path: '/api/v1/code-quality/', description: 'Get code quality overview' },
        { method: 'GET', path: '/api/v1/code-quality/agent', description: 'Get code quality agent status' },
        { method: 'POST', path: '/api/v1/code-quality/fixes', description: 'Get suggested code fixes' },
        { method: 'POST', path: '/api/v1/code-quality/fixes/direct', description: 'Apply code fixes directly' },
        { method: 'GET', path: '/api/v1/code-quality/{analysis_id}', description: 'Get specific analysis results' }
      ]
    },
    debugging: {
      title: "Debugging",
      icon: Bug,
      description: "Endpoints for debugging sessions and analysis",
      endpoints: [
        { method: 'POST', path: '/api/v1/debugging/analyze', description: 'Analyze code for debugging' },
        { method: 'GET', path: '/api/v1/debugging/sessions', description: 'List debugging sessions' },
        { method: 'GET', path: '/api/v1/debugging/sessions/{session_id}', description: 'Get session details' },
        { method: 'GET', path: '/api/v1/debugging/sessions/{session_id}/details', description: 'Get detailed session info' },
        { method: 'GET', path: '/api/v1/debugging/sessions/{session_id}/steps', description: 'Get debugging steps' },
        { method: 'GET', path: '/api/v1/debugging/sessions/{session_id}/suggestions', description: 'Get debugging suggestions' },
        { method: 'GET', path: '/api/v1/debugging/sessions/{session_id}/test-cases', description: 'Get test cases' },
        { method: 'GET', path: '/api/v1/debugging/steps', description: 'List all debugging steps' },
        { method: 'GET', path: '/api/v1/debugging/steps/{step_id}', description: 'Get specific step details' },
        { method: 'GET', path: '/api/v1/debugging/suggestions', description: 'List all debugging suggestions' },
        { method: 'GET', path: '/api/v1/debugging/test-cases', description: 'List all test cases' }
      ]
    },
    documents: {
      title: "Documents",
      icon: FileText,
      description: "Endpoints for document management and search",
      endpoints: [
        { method: 'GET', path: '/api/v1/documents/', description: 'List all documents' },
        { method: 'POST', path: '/api/v1/documents/search', description: 'Search documents' },
        { method: 'GET', path: '/api/v1/documents/{document_id}', description: 'Get specific document' }
      ]
    },
    errorAnalysis: {
      title: "Error Analysis",
      icon: AlertTriangle,
      description: "Endpoints for error analysis and metrics",
      endpoints: [
        { method: 'GET', path: '/api/v1/error-analysis/errors', description: 'List all errors' },
        { method: 'POST', path: '/api/v1/error-analysis/errors/analyze', description: 'Analyze errors' },
        { method: 'GET', path: '/api/v1/error-analysis/errors/metrics/{project_id}', description: 'Get error metrics' },
        { method: 'GET', path: '/api/v1/error-analysis/errors/{analysis_id}', description: 'Get analysis details' }
      ]
    },
    health: {
      title: "Health Checks",
      icon: Shield,
      description: "Endpoints for system health monitoring",
      endpoints: [
        { method: 'GET', path: '/api/v1/health', description: 'Check system health' },
        { method: 'GET', path: '/api/v1/health/', description: 'Detailed health check' }
      ]
    },
    memories: {
      title: "Memory Management",
      icon: Database,
      description: "Endpoints for managing AI memories",
      endpoints: [
        { method: 'GET', path: '/api/v1/memories/', description: 'List all memories' },
        { method: 'GET', path: '/api/v1/memories/{memory_id}', description: 'Get specific memory' }
      ]
    },
    organizations: {
      title: "Organizations",
      icon: Users,
      description: "Endpoints for organization management",
      endpoints: [
        { method: 'GET', path: '/api/v1/organizations/', description: 'List organizations' },
        { method: 'GET', path: '/api/v1/organizations/{organization_id}', description: 'Get organization details' },
        { method: 'GET', path: '/api/v1/organizations/{organization_id}/members/{user_id}', description: 'Get member details' }
      ]
    },
    projects: {
      title: "Projects",
      icon: Folder,
      description: "Endpoints for project management",
      endpoints: [
        { method: 'GET', path: '/api/v1/projects/', description: 'List all projects' },
        { method: 'GET', path: '/api/v1/projects/{project_id}', description: 'Get project details' }
      ]
    },
    users: {
      title: "Users",
      icon: Users,
      description: "Endpoints for user management",
      endpoints: [
        { method: 'GET', path: '/api/v1/users/', description: 'List all users' },
        { method: 'GET', path: '/api/v1/users/me/', description: 'Get current user' },
        { method: 'GET', path: '/api/v1/users/{user_id}', description: 'Get user details' }
      ]
    }
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
                {Object.values(apiEndpoints).map((section, index) => (
                  <ApiSection key={index} {...section} />
                ))}
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