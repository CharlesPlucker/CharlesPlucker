import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import LeadingSection from '../components/LeadingSection'
import FeatureCardsSection from '../components/FeatureCardsSection'
import Accolades from '../components/Accolades'
import StopDoingStartBeing from '../components/StopDoingStartBeing'
import Footer from '../components/Footer'
import config from '../config'

export default function Home() {
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
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
    if (viewportWidth < 1250) return 'Tablet+ (1024-1249px) - Buttons centered below section'
    if (viewportWidth < 1480) return 'Desktop SM (1250-1479px) - Buttons centered below section'
    return 'Desktop LG (1480px+) - Buttons inline with text'
  }

  return (
    <div>
      {/* Debug viewport display - only shown in dev mode */}
      {config.isDev && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          color: '#253a4b',
          padding: '12px 20px',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 600,
          zIndex: 10000,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          fontFamily: 'monospace',
          maxWidth: '400px'
        }}>
          <div>Viewport: {viewportWidth}px</div>
          <div style={{ fontSize: '14px', marginTop: '4px' }}>{getBreakpointInfo()}</div>
        </div>
      )}
      <Navigation />
      <Hero />

      <LeadingSection />

      <FeatureCardsSection />

      <Accolades />

      <StopDoingStartBeing />

      <Footer />
    </div>
  )
}
