import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, Shield, Zap } from "lucide-react"

export default function EnterprisePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Enterprise Solutions</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Powerful tools and dedicated support for organizations of any size
        </p>

        <div className="grid gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6" />
                Enterprise-Grade Infrastructure
              </CardTitle>
              <CardDescription>
                Built for scale with 99.99% uptime SLA and dedicated support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 mt-0.5 text-primary" />
                  <span>Advanced security features with SSO and audit logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 mt-0.5 text-primary" />
                  <span>Unlimited users and team management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-5 w-5 mt-0.5 text-primary" />
                  <span>High-performance infrastructure with global CDN</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            Contact Sales
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}