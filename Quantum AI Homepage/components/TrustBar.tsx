import React from 'react'

const TrustBar = () => (
  <div className="w-full py-6 bg-white/5 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { metric: "500+", label: "Enterprise Clients", description: "Trusted globally" },
          { metric: "280%", label: "Average Growth", description: "In first 90 days" },
          { metric: "95%", label: "Success Rate", description: "Guaranteed results" },
          { metric: "24/7", label: "Expert Support", description: "Always available" }
        ].map((stat, i) => (
          <div key={i} className="text-center group cursor-pointer hover:bg-white/5 rounded-lg p-4 transition-all">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              {stat.metric}
            </div>
            <div className="mt-1 font-medium text-gray-200">{stat.label}</div>
            <div className="mt-1 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default TrustBar

