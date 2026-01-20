import Image from 'next/image'
import styles from './WhoIAm.module.css'
import layoutStyles from './TwoColumnLayout.module.css'
import CTAButton from './CTAButton'

export default function WhoIAm() {
  return (
    <section className={`${styles.whoIAmSection} ${layoutStyles.container}`}>
      <div className={styles.imageColumn}>
        <Image
          src="/images/who-i-am.jpg"
          alt="Charles Plucker"
          width={600}
          height={800}
          className={styles.profileImage}
          unoptimized
        />
      </div>

      <div className={styles.textColumn}>
        <div className={layoutStyles.textContent}>
          <h2>Who I Am</h2>
          <p>
            I spent most of my childhood in Belgium where I grew up speaking French. This experience
            has taught me to see the world in many different perspectives.
          </p>
          <p>
            I became fascinated with programming in College and graduated from the University of
            Virginia with a BS in Computer Science in 2010. I have been working professionally
            writing high-quality software ever since.
          </p>
          <p>
            I like to make the distinction between being a Computer Scientist and being a Software
            Engineer. In the former, we focus on perfect code and perfect run times. In the other we
            make compromises so that a business can thrive. MVPs excite me more than a long planning
            pipeline.
          </p>
          <p>
            In 2016 I joined the Boulder Movement Collective gym where I started down a long road of
            having a relationship with my body. 7 years later, there are fewer and fewer things I
            can't do. Having such a wide variety of skills has left me feeling confident and whole
            in how I show up in life. I even have this practice to thank for starting therapy and
            digging deep into my somatic experiences.
          </p>
          <p>
            These days I have started focusing on giving back. I have founded a local men's group
            that is gaining momentum. I am proud of my importance in many of my friend's support
            structures.
          </p>

          <div className={styles.ctaButtonContainer}>
            <CTAButton text="Get In Touch" href="/contact" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
