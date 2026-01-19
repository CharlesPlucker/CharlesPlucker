import testimonialsData from '../data/testimonials.json'
import Carousel from './Carousel'
import styles from './TestimonialsCarousel.module.css'
import { SOCIAL_LINKS } from '../data/contact'

interface Testimonial {
  author: string
  role: string
  text: string
  imagePath: string
}

export default function TestimonialsCarousel() {
  const testimonials = testimonialsData as Testimonial[]

  return (
    <Carousel
      items={testimonials}
      title="Accolades"
      itemsToShow={1}
      renderItem={(testimonial: Testimonial) => (
        <blockquote className={styles.blockquote}>
          <p>{testimonial.text}</p>
          <footer>
            <strong>{testimonial.author}</strong> - {testimonial.role}
          </footer>
        </blockquote>
      )}
      footerContent={
        <div className={styles.linkedinLink}>
          <p>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              View 13 LinkedIn Recommendations
            </a>
          </p>
        </div>
      }
    />
  )
}
