import { useState, useEffect } from 'react'
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
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const updateItemsToShow = () => {
      // Breakpoint: 750px (mobile) - matches @media (max-width: 750px) in CSS
      // Mobile (≤750px): Show 2 items in carousel
      // Desktop/Tablet (>750px): Show 3 items in carousel
      if (window.innerWidth <= 750) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    updateItemsToShow()
    window.addEventListener('resize', updateItemsToShow)
    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [])

  return (
    <Carousel
      items={facts}
      title="A Bit More About Charles Plucker"
      itemsToShow={itemsToShow}
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
          {fact.detail && <footer className={styles.factDetail}>{fact.detail}</footer>}
        </div>
      )}
    />
  )
}
