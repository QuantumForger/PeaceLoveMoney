'use client'

import React, { useState, useEffect } from 'react'

interface CyclingWordsProps {
  words: string[]
  interval?: number
}

const CyclingWords: React.FC<CyclingWordsProps> = ({ words, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return (
    <span className="inline-block min-w-[120px] transition-opacity duration-500 ease-in-out">
      {words[currentIndex]}
    </span>
  )
}

export default CyclingWords

