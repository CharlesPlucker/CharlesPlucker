import Image from 'next/image'
import styles from './TravelGallery.module.css'

interface Photo {
  src: string
  alt: string
}

const column1Photos: Photo[] = [
  { src: '/images/travel/mayflower-gulch-colorado.webp', alt: 'Mayflower Gulch, Colorado' },
  { src: '/images/travel/rovaniemi-finland.webp', alt: 'Rovaniemi, Finland' },
  { src: '/images/travel/ha-long-bay-vietnam.webp', alt: 'Ha Long Bay, Vietnam' },
  { src: '/images/travel/rotorua-new-zealand.webp', alt: 'Rotorua, New Zealand' },
  { src: '/images/travel/img-0988.webp', alt: '' },
  { src: '/images/travel/sky-pond-colorado.webp', alt: 'Sky Pond, Colorado' },
  { src: '/images/travel/chasm-lake-colorado.webp', alt: 'Chasm Lake, Colorado' },
  { src: '/images/travel/monte-fitz-roy-chile.webp', alt: 'Monte Fitz Roy, Chile' },
  { src: '/images/travel/maroon-bells-colorado.webp', alt: 'Maroon Bells, Colorado' },
]

const column2Photos: Photo[] = [
  { src: '/images/travel/mayflower-gulch-colorado-2.webp', alt: 'Mayflower Gulch, Colorado' },
  { src: '/images/travel/stresa-italy.webp', alt: 'Stresa, Italy' },
  { src: '/images/travel/lisbon-portugal.webp', alt: 'Lisbon, Portugal' },
  { src: '/images/travel/madeira-italy.webp', alt: 'Madeira, Italy' },
  { src: '/images/travel/glacier-grey-chile.webp', alt: 'Glacier Grey, Chile' },
  { src: '/images/travel/perito-moreno-glacier-chile-1.webp', alt: 'Perito Moreno Glacier, Chile' },
  { src: '/images/travel/perito-moreno-glacier-chile-2.webp', alt: 'Perito Moreno Glacier, Chile' },
]

const column3Photos: Photo[] = [
  { src: '/images/travel/blue-lagoon-iceland.webp', alt: 'Blue Lagoon, Iceland' },
  { src: '/images/travel/ashcroft-wilderness-colorado.webp', alt: 'Ashcroft Wilderness, Colorado' },
  { src: '/images/travel/rotorua-new-zealand-2.webp', alt: 'Rotorua, New Zealand' },
  {
    src: '/images/travel/great-sand-dunes-colorado.webp',
    alt: 'Great Sand Dunes National Park, Colorado',
  },
  { src: '/images/travel/madeira-portugal.webp', alt: 'Madeira, Portugal' },
  { src: '/images/travel/torres-de-paine-chile.webp', alt: 'Torres de Paine, Chile' },
]

export default function TravelGallery() {
  const columns = [column1Photos, column2Photos, column3Photos]

  return (
    <section className={styles.travelGallerySection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>An Avid Traveler</h2>

        <div className={styles.gallery}>
          {columns.map((columnPhotos, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              {columnPhotos.map((photo, photoIndex) => (
                <div key={photoIndex} className={styles.imageWrapper}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    title={photo.alt}
                    width={800}
                    height={600}
                    unoptimized={true}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
