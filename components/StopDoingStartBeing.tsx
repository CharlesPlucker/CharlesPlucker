import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './StopDoingStartBeing.module.css'

function TextHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.textHighlight}>
      {children}
      <svg className={styles.underlineSvg} viewBox="0 0 100 10" preserveAspectRatio="none">
        <path
          d="M 0 7 Q 50 5, 100 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="square"
        />
      </svg>
    </span>
  )
}

interface StopDoingStartBeingProps {
  ctaText?: string
  ctaUrl?: string
}

export default function StopDoingStartBeing({ 
  ctaText = 'Get In Touch',
  ctaUrl = '/contact'
}: StopDoingStartBeingProps) {
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth)
    }
    
    updateWidth()
    window.addEventListener('resize', updateWidth)
    
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.debugViewport}>
        Viewport Width: {viewportWidth}px
      </div>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <Image
            src="/images/stop-doing-start-being.jpg"
            alt="Team collaboration"
            width={600}
            height={700}
            className={styles.image}
            unoptimized
          />
          {/* Button below image - shows at 751px+ */}
          <a href={ctaUrl} className={`${styles.ctaButton} ${styles.ctaButtonBelowImage}`}>
            {ctaText}
          </a>
        </div>
        
        <div className={styles.contentColumn}>
          <h2>Stop Doing, Start Being</h2>
          
          <p>
            The best performing teams are the ones with high degrees of <TextHighlight>psychological safety</TextHighlight>. If a team feels comfortable receiving and sharing feedback, they perform better. But what does it actually take for someone to be able to receive feedback and understand, internalize, and potentially disagree with it? I have come to believe that the answer is <TextHighlight>trust</TextHighlight>.
          </p>
          
          <p>
            I build trust, through my actions, but especially through my <TextHighlight>way of being</TextHighlight>. I often find externalized perspectives that value us for what we do, but I believe we should be valued for who we are. Leadership at the highest level is a transition from doing into being. Here are some things that capture my being:
          </p>
          
          <ul>
            <li>I prioritize business needs and articulate maintainability tradeoffs.</li>
            <li>I approach problems with a systems mindset and avoid unintended consequences.</li>
            <li>I meet my commitments and always achieve co-created deadlines.</li>
            <li>I lead conversations around equity and team culture.</li>
            <li>I value face to face interactions in person.</li>
            <li>I am proud of my written and spoken communications.</li>
          </ul>
          
          {/* Button below text - shows at mobile (below 751px) */}
          <a href={ctaUrl} className={`${styles.ctaButton} ${styles.ctaButtonBelowText}`}>
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}

