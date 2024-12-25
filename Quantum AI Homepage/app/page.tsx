import React from 'react'
import Link from 'next/link'
import { ArrowRight, BarChart2, Bot, Brain, Clock, Shield, Star, Users, Award, FileCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import TrustBar from '@/components/TrustBar'
import ServiceCard from '@/components/ServiceCard'
import HeroVideo from '@/components/HeroVideo'
import CyclingWords from '@/components/CyclingWords'
import ServicesOverview from '@/components/ServicesOverview'
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import ConsultationForm from '@/components/ConsultationForm'

const services = [
  {
    title: "AI Implementation",
    description: "Custom enterprise AI solutions perfectly integrated with your business",
    icon: Brain,
    price: "From $2,500/mo",
    timeline: "90 days",
    roi: "280% efficiency increase",
    features: ["Custom Integration", "24/7 Support", "ROI Guarantee", "Tailored AI Models", "Data Security"],
    highlightedBenefit: "Boost Decision-Making Speed by 75%!",
    learnMoreLink: "/services/ai-implementation",
    ctaText: "Start Your AI Implementation"
  },
  {
    title: "Process Automation",
    description: "Automate workflows and multiply team productivity",
    icon: Bot,
    price: "From $1,500/mo",
    timeline: "60 days",
    roi: "180% productivity boost",
    features: ["Custom Workflows", "Full Training", "24/7 Support", "Scalable Solutions", "Integration with Existing Tools"],
    highlightedBenefit: "Save 20+ Hours Per Week!",
    learnMoreLink: "/services/process-automation",
    ctaText: "Begin Process Automation"
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable business insights",
    icon: BarChart2,
    price: "From $2,000/mo",
    timeline: "45 days",
    roi: "320% better decision making",
    features: ["Custom Dashboards", "AI Insights", "Full Support", "Predictive Analytics", "Real-time Reporting"],
    highlightedBenefit: "Increase Revenue by 30%!",
    learnMoreLink: "/services/data-analytics",
    ctaText: "Explore Data Analytics"
  }
]


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]"></div>
        </div>
        
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              {/* Social Proof Banner */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-8 animate-fade-in">
                <Star className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Trusted by 500+ businesses worldwide</span>
                <span className="sm:hidden">500+ businesses trust us</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center lg:text-left mb-6 max-w-4xl mx-auto lg:mx-0">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600">
                  Struggling to <CyclingWords words={["Innovate", "Dominate", "Grow"]} interval={3000} />?
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-300 to-white mt-2">
                  Let AI Transform Your Business
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 text-center lg:text-left mt-4 mb-8 max-w-3xl mx-auto lg:mx-0">
                Streamline your operations, cut costs by 65%, and achieve 280% growth in 90 days.
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2 text-center lg:text-left">
                280% Average Growth in 90 Days
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mb-8 text-center lg:text-left">
                Based on aggregated client data
              </p>

              {/* Metrics Showcase */}
              <div className="space-y-4 mt-8 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "65%", label: "Cost Reduction" },
                    { value: "24/7", label: "Expert Support" },
                    { value: "90-Day", label: "Implementation" }
                  ].map((metric, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center transition-all duration-300 hover:bg-white/15 hover:scale-105">
                      <div className="text-xl sm:text-2xl font-bold text-purple-400 transition-colors duration-300 hover:text-purple-300">{metric.value}</div>
                      <div className="text-xs sm:text-sm text-gray-300">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 text-center">Based on results from real client case studies.</p>
              </div>

              {/* CTA Section */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/book-consultation" passHref className="w-full sm:w-auto">
                  <Button 
                    size="lg"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-base sm:text-xl px-4 sm:px-8 py-3 sm:py-6 relative overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    <span className="relative flex items-center justify-center">
                      Get Your Free AI Assessment
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 rounded-lg blur-lg bg-purple-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
                {[
                  { icon: Shield, text: "Enterprise-grade security" },
                  { icon: Clock, text: "24/7 expert support" },
                  { icon: Users, text: "99.9% client satisfaction" },
                  { icon: Star, text: "5-star rated service" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-purple-500/10 rounded-full px-2 sm:px-3 py-1 transition-all duration-300 hover:bg-purple-500/20 hover:scale-105">
                    <item.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-purple-400" />
                    <span className="text-xs sm:text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Video */}
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <HeroVideo />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesOverview services={services} />

      {/* Featured Case Study */}
      <FeaturedCaseStudy />

      {/* Consultation Form */}
      <ConsultationForm />

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">© 2023 Quantum AI. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

