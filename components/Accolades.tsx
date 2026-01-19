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

  return (
    <Carousel
      items={testimonials}
      title="Accolades"
      itemsToShow={3}
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

