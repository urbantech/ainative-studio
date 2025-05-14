import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageSquare, Clock, Building2 } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, content, link = '' }) => (
  <Card className="border border-primary/20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          {link ? (
            <a 
              href={link} 
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {content}
            </a>
          ) : (
            <CardDescription>{content}</CardDescription>
          )}
        </div>
      </div>
    </CardHeader>
  </Card>
);

export default function ContactPage() {
  return (
    <div className="full-width-section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're here to help with any questions about our products, services, or enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="grid gap-6">
                <ContactCard
                  icon={Mail}
                  title="Email Us"
                  content="hello@ainative.studio"
                  link="mailto:hello@ainative.studio"
                />
                <ContactCard
                  icon={Phone}
                  title="Call Us"
                  content="(831) 295-1482"
                  link="tel:+18312951482"
                />
                <ContactCard
                  icon={MapPin}
                  title="Visit Us"
                  content="1101 Pacific Avenue, Santa Cruz, CA 95060"
                />
                <ContactCard
                  icon={Clock}
                  title="Business Hours"
                  content="Monday - Friday, 9:00 AM - 6:00 PM PST"
                />
              </div>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Inquiry Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Brief description of your inquiry" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry"
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <CardTitle>Enterprise Support</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Looking for enterprise-grade support? Our dedicated enterprise team is ready to help with custom solutions, deployment options, and premium support packages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a href="http://calendly.com/seedlingstudio/" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                  Contact Enterprise Sales
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}