import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const FeaturedCaseStudy: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-4">280% Growth in 90 Days</h2>
              <p className="text-xl text-purple-300 mb-6">Enterprise SaaS Company</p>
              <h3 className="text-2xl font-semibold text-white mb-4">Implementation Highlights:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom AI model integration
                </li>
                <li className="flex items-center text-gray-300"><svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated workflow optimization
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time data analytics dashboard
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Results:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  280% increase in revenue
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  65% reduction in operational costs
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  50% improvement in customer satisfaction
                </li>
              </ul>
              <h3 className="text-2xl font-semibold text-white mb-4">Timeline:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Day 1-30: Implementation and integration
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Day 31-60: Optimization and fine-tuning
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Day 61-90: Scaling and full deployment
                </li>
              </ul>
              <Link href="/case-studies" passHref>
                <Button className="w-full md:w-auto">View More Case Studies</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCaseStudy

