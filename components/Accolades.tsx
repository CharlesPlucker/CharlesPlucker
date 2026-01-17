import { useState } from 'react'
import Image from 'next/image'
import testimonialsData from '../data/testimonials.json'
import styles from './Accolades.module.css'

interface Testimonial {
  author: string
  role: string
  text: string
  imagePath: string
}

export default function Accolades() {
  const testimonials = testimonialsData as Testimonial[]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Create an array with all testimonials repeated for seamless infinite scroll
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], uniqueKey: `${currentIndex}-${i}` })
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className={styles.accolades}>
      <h2>Accolades</h2>
      
      <div className={styles.carouselContainer}>
        <button 
          onClick={goToPrevious} 
          className={styles.navButton}
          aria-label="Previous testimonial"
          disabled={isTransitioning}
        >
          ←
        </button>

        <div className={styles.testimonialWrapper}>
          <div className={`${styles.testimonialGrid} ${isTransitioning ? styles.transitioning : ''}`}>
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.uniqueKey} className={styles.testimonialCard}>
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
            ))}
          </div>
        </div>

        <button 
          onClick={goToNext} 
          className={styles.navButton}
          aria-label="Next testimonial"
          disabled={isTransitioning}
        >
          →
        </button>
      </div>

      <div className={styles.linkedinLink}>
        <a 
          href="https://www.linkedin.com/in/charles-plucker/details/recommendations/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View 13 LinkedIn Recommendations
        </a>
      </div>
    </section>
  )
}

