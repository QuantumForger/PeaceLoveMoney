import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { type LucideIcon } from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: LucideIcon
  price: string
  features: string[]
  learnMoreLink: string
}

interface ServicesOverviewProps {
  services: Service[]
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-12">Our AI-Powered Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/10">
              <service.icon className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <p className="text-lg font-bold text-purple-400 mb-4">{service.price}</p>
              <ul className="mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 mb-2">
                    <svg className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.learnMoreLink} passHref>
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview

