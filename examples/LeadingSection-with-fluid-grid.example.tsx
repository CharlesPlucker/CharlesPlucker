/**
 * Example: LeadingSection with Fluid Grid System
 * 
 * This shows how to refactor your current LeadingSection component
 * to use the Squarespace-style fluid grid system.
 */

import Image from 'next/image'
import styles from './LeadingSection.module.css'

export default function LeadingSection() {
  return (
    <section className={styles.leadingSection}>
      <div className="fluid-engine">
        {/* Image Block - Left side on desktop, top on mobile */}
        <div 
          className={`grid-block ${styles.imageBlock}`}
          style={{
            '--mobile-grid-area': '1/2/9/10',
            '--desktop-grid-area': '1/2/23/14',
            '--block-z-index': 1,
          } as React.CSSProperties}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/images/leading-from-the-front.jpg"
              alt="Charles Plucker"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* Text Block - Right side on desktop, below image on mobile */}
        <div 
          className={`grid-block ${styles.textBlock}`}
          style={{
            '--mobile-grid-area': '9/2/27/10',
            '--desktop-grid-area': '1/15/22/24',
            '--block-z-index': 2,
          } as React.CSSProperties}
        >
          <p className={styles.subtitle}>Meet Charles Plucker, Software Engineer</p>
          <h2 className={styles.title}>
            Leading from the front.<br />Embodied.
          </h2>
          <div className={styles.textContent}>
            <p>
              Leading from the front means leading with your actions. I bring all of myself 
              to the things I am passionate about. I am uniquely positioned as someone who 
              has a deep desire to build enchanting products balanced by my curiosity of 
              people and the systems needed for success. My passion lies in building the 
              machine that builds the machine.
            </p>
            <p>
              While some leaders become leaders so they can enforce their opinions, I am a 
              leader who leads to bring forth the genius of the team. I excel at cultivating 
              consensus and communicating our tradeoffs to the business so that our products 
              can mature elegantly.
            </p>
            <p>
              My proudest contributions have been ones with measurable impacts: Reducing 
              project cancellations by 25%. Implementing a message bus system to have 
              disparate parts of the system gain a shared state with direct impacts to our 
              customers. Improving observability and fixing systematic failures. 
              Strengthening our CI/CD pipeline reducing production outages.
            </p>
            <p>
              If you think I would be a good fit for your teams, please reach out! I'd love 
              to hear about your dreams.
            </p>
          </div>
        </div>

        {/* Button 1 - Download Resume */}
        <div 
          className="grid-block"
          style={{
            '--mobile-grid-area': '27/4/29/8',
            '--desktop-grid-area': '24/15/26/20',
            '--block-z-index': 4,
            '--block-justify': 'center',
            '--block-align': 'center',
          } as React.CSSProperties}
        >
          <a href="/resume.pdf" className={styles.ctaButton} target="_blank">
            Download Resume
          </a>
        </div>

        {/* Button 2 - Learn More */}
        <div 
          className="grid-block"
          style={{
            '--mobile-grid-area': '29/4/31/8',
            '--desktop-grid-area': '24/8/26/13',
            '--block-z-index': 3,
            '--block-justify': 'center',
            '--block-align': 'center',
          } as React.CSSProperties}
        >
          <a href="/about" className={styles.ctaButton}>
            Learn More About Charles
          </a>
        </div>
      </div>
    </section>
  )
}

