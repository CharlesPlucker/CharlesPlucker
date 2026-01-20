import { useState } from 'react'
import styles from './ContactInfo.module.css'
import { CONTACT_INFO, SOCIAL_LINKS, getYearsOfExperience } from '../data/contact'
import CTAButton from './CTAButton'

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

export default function ContactInfo() {
  const yearsOfExperience = getYearsOfExperience()
  const [copySuccess, setCopySuccess] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email)
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section className={styles.contactSection}>
      <h2>Get In Touch</h2>
      <p className={styles.intro}>
        I am a communicative and team-focused Principal Software Engineer with over{' '}
        <TextHighlight>{yearsOfExperience} years</TextHighlight> of experience. I thrive when focusing on customer-first products
        that reward forward-thinking and self-direction. My ideal positions leverage my diverse
        background in technology, and strong soft-skills for team building and customer interaction.
      </p>

      {/* Email Section */}
      <div className={styles.emailSection}>
        <div className={styles.emailDisplay}>
          <svg className={styles.emailIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L10 9L18 4M2 4V16H18V4M2 4H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.emailText}>{CONTACT_INFO.email}</span>
        </div>
      <div className={styles.emailActions}>
        <CTAButton 
          variant="outline"
          theme="light"
          onClick={handleCopyEmail}
          className={styles.emailActionButton}
        >
          {copySuccess ? (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="2"/>
                <path d="M3 11V3C3 2.44772 3.44772 2 4 2H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Copy
            </>
          )}
        </CTAButton>
        <CTAButton 
          variant="primary"
          theme="light"
          href={`mailto:${CONTACT_INFO.email}`}
          className={styles.emailActionButton}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3L8 7L14 3M2 3V13H14V3M2 3H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Send Email
        </CTAButton>
      </div>
      </div>

      {/* Primary Actions */}
      <div className={styles.primaryActions}>
        <CTAButton
          variant="primary"
          theme="light"
          href={SOCIAL_LINKS.linkedin}
          external
          className={styles.primaryActionButton}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2H4C2.89543 2 2 2.89543 2 4V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V4C18 2.89543 17.1046 2 16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 8V14M6 6V6.01M10 14V10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          View LinkedIn Profile
        </CTAButton>
        <CTAButton
          variant="primary"
          theme="light"
          href="/resume.pdf"
          download
          className={styles.primaryActionButton}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13V3M10 13L7 10M10 13L13 10M4 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Resume
        </CTAButton>
      </div>

    </section>
  )
}
