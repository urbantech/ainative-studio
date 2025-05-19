import React from 'react';
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const handleGitHubLogin = () => {
    const clientId = "Ov23liU7x20VoRInkAiq";
    const redirectUri = "http://localhost:3000/login-success";
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=read:user`;
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#10141c] to-[#161B22] flex items-center justify-center px-4 py-24 md:py-32">
      <Card className="w-full max-w-md shadow-xl border border-white/10 dark:bg-[#1C2128] rounded-2xl">
        <CardHeader className="space-y-3 text-center">
          <div className="flex justify-center mb-1">
            <LogIn className="h-8 w-8 text-[#4B6FED]" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
          <CardDescription className="text-gray-400 text-sm">
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button
            variant="ghost"
            onClick={handleGitHubLogin}
            className="w-full flex items-center justify-center gap-2 bg-[#0B0F19] hover:bg-[#101521] border border-white/10 text-white"
          >
            <Github className="h-5 w-5" />
            Continue with GitHub
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#1C2128] px-2 text-gray-500 tracking-widest">
                or continue with
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="bg-[#0D1117] border-white/10 text-white placeholder-gray-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="bg-[#0D1117] border-white/10 text-white placeholder-gray-500" />
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-5 pt-6">
          <Button className="w-full bg-[#4B6FED] hover:bg-[#3A56D3] text-white font-semibold transition-all">
            Sign In
          </Button>
          <p className="text-sm text-center text-gray-400">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-[#4B6FED] hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
