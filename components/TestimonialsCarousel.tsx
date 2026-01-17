import { useState } from 'react'
import testimonialsData from '../data/testimonials.json'
import styles from './TestimonialsCarousel.module.css'

interface Testimonial {
  author: string
  role: string
  text: string
}

export default function TestimonialsCarousel() {
  const testimonials = testimonialsData as Testimonial[]
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className={styles.carousel}>
      <h2>Accolades</h2>
      <div className={styles.carouselContainer}>
        <div className={styles.navigationButtons}>
          <button onClick={goToPrevious} className={styles.navButton} aria-label="Previous testimonial">
            Previous
          </button>

          <div className={styles.testimonial}>
            <blockquote>
              <p>{currentTestimonial.text}</p>
              <footer>
                <strong>{currentTestimonial.author}</strong> - {currentTestimonial.role}
              </footer>
            </blockquote>
          </div>

          <button onClick={goToNext} className={styles.navButton} aria-label="Next testimonial">
            Next
          </button>
        </div>

        <div className={styles.counter}>
          <p>
            Showing {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
        <div className={styles.linkedinLink}>
          <p>
            <a href="https://www.linkedin.com/in/charles-plucker/" target="_blank" rel="noopener noreferrer">
              View 13 LinkedIn Recommendations
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

