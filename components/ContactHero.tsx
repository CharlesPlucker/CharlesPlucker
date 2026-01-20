import styles from './ContactHero.module.css'

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.imageContainer}>
        <div className={styles.overlay} />
      </div>

      {/* Overlay Content */}
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <p className={styles.eyebrow}>Work With Me</p>
          <h1 className={styles.heading}>
            Contact <strong>Charles.</strong>
          </h1>
          <p className={styles.paragraph}>
            Together, we can make meaningful products that delight our customers, all while feeling proud of our contributions towards a <span className={styles.underline}>shared vision.</span>
          </p>
          <p className={styles.callToAction}>
            Let me know if you think I would be a good fit for your team.
          </p>
        </div>
      </div>
    </section>
  )
}

