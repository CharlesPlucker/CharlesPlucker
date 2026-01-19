import styles from './Footer.module.css'
import { CONTACT_INFO, SOCIAL_LINKS } from '../data/contact'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* <div className={styles.intro}>
          <p>
            I am a communicative and team-focused Principal Software Engineer with over {yearsOfExperience} years of experience.
          </p>
        </div> */}

        <div className={styles.aiNote}>
          <p>
            0% of the words were modified by AI—they are my uninterpreted voice alone.<br />
            100% of this website's code is written with AI.
          </p>
        </div>

        <div className={styles.contactIcons}>
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            aria-label="Email Charles"
            title={CONTACT_INFO.email}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href={SOCIAL_LINKS.instagram}
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            title="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Charles Plucker</p>
        </div>
      </div>
    </footer>
  )
}

