import styles from './ContactInfo.module.css'

export default function ContactInfo() {
  return (
    <section className={styles.contactSection}>
      <h2>Get In Touch</h2>
      <p>
        I am a communicative and team-focused Principal Software Engineer with over 13 years of experience. I thrive when focusing on customer-first products that reward forward-thinking and self-direction. My ideal positions leverage my diverse background in technology, and strong soft-skills for team building and customer interaction.
      </p>
      <div className={styles.contactLinks}>
        <a href="mailto:charles.plucker@gmail.com">charles.plucker@gmail.com</a>
        <a href="https://www.linkedin.com/in/charles-plucker/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <p className={styles.disclaimer}>
        While AI is an incredible tool, the entirety of this website represents my uninterpreted voice alone.
      </p>
    </section>
  )
}

