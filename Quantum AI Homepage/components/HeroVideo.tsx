import React from 'react'

const HeroVideo: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-96 lg:h-full rounded-lg overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai-visualization-iEm3awL0gvWYk1nAu1Qqf0vuQ6d8P4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
    </div>
  )
}

export default HeroVideo

