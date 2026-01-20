import { useState, useEffect } from 'react'
import Image from 'next/image'
import testimonialsData from '../data/testimonials.json'
import Carousel from './Carousel'
import styles from './Accolades.module.css'
import { SOCIAL_LINKS } from '../data/contact'
import CTAButton from './CTAButton'

interface Testimonial {
  author: string
  role: string
  text: string
  imagePath: string
}

export default function Accolades() {
  const testimonials = testimonialsData as Testimonial[]
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
      items={testimonials}
      title="Accolades"
      itemsToShow={itemsToShow}
      renderItem={(testimonial: Testimonial) => (
        <div className={styles.testimonialContent}>
          <div className={styles.imageContainer}>
            <Image
              src={testimonial.imagePath}
              alt={testimonial.author}
              width={150}
              height={150}
              className={styles.profileImage}
              unoptimized
            />
          </div>
          <p className={styles.testimonialText}>{testimonial.text}</p>
          <p className={styles.author}>{testimonial.author}</p>
          <p className={styles.role}>{testimonial.role}</p>
        </div>
      )}
      footerContent={
        <CTAButton
          text="View 13 LinkedIn Recommendations"
          href={SOCIAL_LINKS.linkedinRecommendations}
          variant="primary"
          external
        />
      }
    />
  )
}
