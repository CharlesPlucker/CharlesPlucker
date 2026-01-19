import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import LeadingSection from '../components/LeadingSection'
import FeatureCardsSection from '../components/FeatureCardsSection'
import Accolades from '../components/Accolades'
import StopDoingStartBeing from '../components/StopDoingStartBeing'
import config from '../config'
import styles from './index.module.css'

export default function Home() {
  const [viewportWidth, setViewportWidth] = useState(0)
  const [showDebug, setShowDebug] = useState(false)

  useEffect(() => {
    // Only show debug on client side to avoid hydration mismatch
    setShowDebug(config.isDev)
    
    const updateWidth = () => {
      setViewportWidth(window.innerWidth)
    }
    
    updateWidth()
    window.addEventListener('resize', updateWidth)
    
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const getBreakpointInfo = () => {
    if (viewportWidth < 750) return 'Mobile (<750px) - Buttons below image (stacked)'
    if (viewportWidth < 1024) return 'Tablet (750-1023px) - Buttons below image (stacked)'
    if (viewportWidth < 1250) return 'Tablet+ (1024-1249px) - Buttons below image (stacked)'
    if (viewportWidth < 1480) return 'Desktop SM (1250-1479px) - Buttons inline with text'
    return 'Desktop LG (1480px+) - Buttons inline with text'
  }

  return (
    <>
      {/* Debug viewport display - only shown in dev mode */}
      {showDebug && (
        <div className={styles.debugViewport}>
          <div>Viewport: {viewportWidth}px</div>
          <div className={styles.debugBreakpoint}>{getBreakpointInfo()}</div>
        </div>
      )}
      <Hero />

      <LeadingSection />

      <FeatureCardsSection />

      <Accolades />

      <StopDoingStartBeing />
    </>
  )
}
