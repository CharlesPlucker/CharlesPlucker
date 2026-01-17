import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerBrand}>Charles Plucker</p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/charles-plucker/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span> | </span>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Charles Plucker. All rights reserved.</p>
      </div>
    </footer>
  )
}

