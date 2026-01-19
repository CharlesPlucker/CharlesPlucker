import Image from 'next/image'
import aboutFactsData from '../data/about-facts.json'
import Carousel from './Carousel'
import styles from './AboutFactsCarousel.module.css'

interface AboutFact {
  fact: string
  detail: string
  imagePath: string
}

export default function AboutFactsCarousel() {
  const facts = aboutFactsData as AboutFact[]

  return (
    <Carousel
      items={facts}
      title="A Bit More About Charles Plucker"
      itemsToShow={3}
      className={styles.darkBlueBackground}
      renderItem={(fact: AboutFact) => (
        <div className={styles.factContent}>
          <div className={styles.imageContainer}>
            <Image
              src={fact.imagePath}
              alt={fact.fact}
              width={150}
              height={150}
              unoptimized={true}
              className={styles.profileImage}
            />
          </div>
          <p className={styles.factText}>{fact.fact}</p>
          {fact.detail && (
            <footer className={styles.factDetail}>{fact.detail}</footer>
          )}
        </div>
      )}
    />
  )
}
