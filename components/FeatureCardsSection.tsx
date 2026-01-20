import FeatureCard from './FeatureCard'
import styles from './FeatureCardsSection.module.css'

export default function FeatureCardsSection() {
  const graduationDate = new Date(2010, 4) // May 2010 (month is 0-indexed)
  const now = new Date()
  const yearsOfExperience = now.getFullYear() - graduationDate.getFullYear()

  return (
    <section className={styles.featureCardsSection}>
      <FeatureCard
        title="Technical Leader"
        description={`I have over ${yearsOfExperience} years of experience working on high output teams making products that delight our customers. My passion lies in being part of a high functioning team that prioritizes long term quality over quick wins. I like to emphasize full test coverages, observability, and leading Sprint Planning. I believe that being invested in the product cycle early ensures that we build the Right Product for our customers and leads to increased long term velocity.`}
        imagePath="/images/features/technical-leader.webp"
        imageAlt="Torres Del Paine, Patagonia"
      />

      <FeatureCard
        title="Courageous"
        description="I courageously and adeptly articulate my needs. By understanding the why behind my feelings and those of others, I am able to anticipate, and articulate inefficiencies in our team dynamics. I heavily contribute to bringing a team from forming to performing. It has also been important to me to contribute to conversations around equity and company culture. My LinkedIn recommendations are a testament to these ideals."
        imagePath="/images/features/courageous.webp"
        imageAlt="Lago Grey, Patagonia"
      />

      <FeatureCard
        title="Values-driven"
        description="Our values define who we are. I lead with my own as well as my team's values. By having a clear understanding of what we value, alignment is easeful, motivation increases, and psychological safety gets prioritized. I am kind, honest, hard-working, and pride-driven."
        imagePath="/images/features/values-driven.webp"
        imageAlt="Mirador Britanico, Patagonia"
      />
    </section>
  )
}
