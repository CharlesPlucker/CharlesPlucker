import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollState, setScrollState] = useState<'top' | 'video' | 'below'>('top')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight // 100vh
      
      if (scrollY < 50) {
        setScrollState('top')
      } else if (scrollY < heroHeight - 100) {
        setScrollState('video')
      } else {
        setScrollState('below')
      }
    }

    // Check initial position
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`${styles.nav} ${styles[scrollState]}`}>
      <div className={styles.navLeft}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      
      <Link href="/" className={styles.brand}>Charles Plucker</Link>
      
      <div className={styles.navRight}>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/charles-plucker/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          LinkedIn
        </a>
        <Link href="/contact" className={styles.ctaButton}>Get In Touch</Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className={styles.menuButton} aria-label="Toggle menu">
        {isMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/charles-plucker/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get In Touch</Link>
      </div>
    </nav>
  )
}

