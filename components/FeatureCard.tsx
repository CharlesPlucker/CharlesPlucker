import Image from 'next/image'
import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  title: string
  description: string
  imagePath: string
  imageAlt: string
}

export default function FeatureCard({
  title,
  description,
  imagePath,
  imageAlt,
}: FeatureCardProps) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt={imageAlt}
          width={800}
          height={600}
          unoptimized
        />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

