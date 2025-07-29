"use client"

import * as React from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    
    // Set initial value
    setMatches(mediaQuery.matches)
    
    // Create event listener function
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }
    
    // Add listener
    mediaQuery.addEventListener('change', handleMediaChange)
    
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [query])

  return matches
}
