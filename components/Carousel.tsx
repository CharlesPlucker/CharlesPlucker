import { useState, ReactNode } from 'react'
import styles from './Carousel.module.css'

interface CarouselProps<T> {
  items: T[]
  title?: string
  renderItem: (item: T) => ReactNode
  itemsToShow?: number
  footerContent?: ReactNode
  className?: string
}

export default function Carousel<T>({
  items,
  title,
  renderItem,
  itemsToShow = 3,
  footerContent,
  className = '',
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Create an array with visible items for seamless infinite scroll
  const getVisibleItems = () => {
    const visible = []
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % items.length
      visible.push({ 
        item: items[index], 
        uniqueKey: `${currentIndex}-${i}` 
      })
    }
    return visible
  }

  const visibleItems = getVisibleItems()

  return (
    <section className={`${styles.carousel} ${className}`}>
      {title && <h2>{title}</h2>}
      
      <div className={styles.carouselContainer}>
        <button 
          onClick={goToPrevious} 
          className={styles.navButton}
          aria-label="Previous item"
          disabled={isTransitioning}
        >
          ←
        </button>

        <div className={styles.itemWrapper}>
          <div 
            className={`${styles.itemGrid} ${isTransitioning ? styles.transitioning : ''}`}
            style={{ 
              gridTemplateColumns: `repeat(${itemsToShow}, 1fr)` 
            }}
          >
            {visibleItems.map(({ item, uniqueKey }) => (
              <div key={uniqueKey} className={styles.itemCard}>
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={goToNext} 
          className={styles.navButton}
          aria-label="Next item"
          disabled={isTransitioning}
        >
          →
        </button>
      </div>

      {footerContent && (
        <div className={styles.footer}>
          {footerContent}
        </div>
      )}
    </section>
  )
}

