import Image from 'next/image'
import styles from './LeadingSection.module.css'

export default function LeadingSection() {
  return (
    <section className={styles.leadingSection}>
      <div className={styles.leadingContent}>
        <div className={styles.leadingImage}>
          <Image
            src="/images/leading-from-the-front.jpg"
            alt="Charles Plucker"
            width={360}
            height={600}
            unoptimized
          />
        </div>
        <div className={styles.leadingText}>
          <p className={styles.leadingSubtitle}>Meet Charles Plucker, Software Engineer</p>
          <h2>Leading from the front.<br />Embodied.</h2>
          <p>
            Leading from the front means leading with your actions. I bring all of myself to the things I am passionate about. I am uniquely positioned as someone who has a deep desire to build enchanting products balanced by my curiosity of people and the systems needed for success. My passion lies in building the machine that builds the machine.
          </p>
          <p>
            While some leaders become leaders so they can enforce their opinions, I am a leader who leads to bring forth the genius of the team. I excel at cultivating consensus and communicating our tradeoffs to the business so that our products can mature elegantly.
          </p>
          <p>
            My proudest contributions have been ones with measurable impacts: Reducing project cancellations by 25%. Implementing a message bus system to have disparate parts of the system gain a shared state with direct impacts to our customers. Improving observability and fixing systematic failures. Strengthening our CI/CD pipeline reducing production outages.
          </p>
          <p>
            If you think I would be a good fit for your teams, please reach out! I'd love to hear about your dreams.
          </p>
        </div>
      </div>
      <div className={styles.ctaButtons}>
        <a href="/about" className={styles.ctaButton}>Learn More About Charles</a>
        <a href="/resume.pdf" className={styles.ctaButton}>Download Resume</a>
      </div>
    </section>
  )
}

