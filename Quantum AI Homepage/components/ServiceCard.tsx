import React from 'react'
import { TypeIcon as type, LucideIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  price: string
  timeline: string
  roi: string
  features: string[]
  highlightedBenefit: string
  learnMoreLink: string;
  ctaText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  price,
  timeline,
  roi,
  features,
  highlightedBenefit,
  learnMoreLink,
  ctaText
}) => (
  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 shadow-lg transition-all duration-300 hover:bg-white/15 hover:shadow-xl relative overflow-hidden group hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-purple-400 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{description}</p>
      <div className="bg-purple-600/20 border border-purple-400/30 rounded-md p-2 mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-purple-600/30 group-hover:border-purple-400/50">
        <p className="text-xs sm:text-sm text-purple-300 font-semibold">{highlightedBenefit}</p>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 transition-colors duration-300 group-hover:text-purple-300">{price}</div>
      <div className="mb-3 sm:mb-4">
        <div className="text-xs sm:text-sm text-gray-300">Implementation: {timeline}</div>
        <div className="text-xs sm:text-sm text-gray-300">Expected ROI: {roi}</div>
      </div>
      <ul className="mb-4 sm:mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2 transition-transform duration-300 group-hover:translate-x-1">
            <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-purple-400 transition-colors duration-300 group-hover:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-sm sm:text-base py-2 sm:py-4 relative overflow-hidden group">
        <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        <span className="relative">{ctaText}</span>
      </Button>
      <Link href={learnMoreLink} className="block mt-4 text-center text-purple-400 hover:text-purple-300 transition-colors duration-300 group-hover:underline">
        Learn More
      </Link>
    </div>
  </div>
)

export default ServiceCard

