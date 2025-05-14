import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Zap, Shield } from "lucide-react";

const ProductsPage = () => {
  const products = [
    {
      title: "Basic",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "24/7 support",
        "Community access"
      ],
      price: "$9.99",
      period: "month"
    },
    {
      title: "Pro",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      price: "$29.99",
      period: "month"
    },
    {
      title: "Enterprise",
      description: "For large organizations",
      features: [
        "Custom solutions",
        "Dedicated support team",
        "SLA guarantees",
        "Advanced security"
      ],
      price: "Custom",
      period: "year"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Products</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your needs. Whether you're just starting out or running a large organization,
          we have you covered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-3xl font-bold">{product.price}</span>
                {product.price !== "Custom" && (
                  <span className="text-muted-foreground">/{product.period}</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    {index === 0 ? <Box className="h-5 w-5" /> : 
                     index === 1 ? <Zap className="h-5 w-5" /> : 
                     <Shield className="h-5 w-5" />}
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-auto group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;