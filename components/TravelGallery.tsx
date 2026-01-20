import Image from 'next/image'
import styles from './TravelGallery.module.css'

interface Photo {
  src: string
  alt: string
}

const column1Photos: Photo[] = [
  { src: '/images/travel/mayflower-gulch-colorado.jpg', alt: 'Mayflower Gulch, Colorado' },
  { src: '/images/travel/rovaniemi-finland.jpg', alt: 'Rovaniemi, Finland' },
  { src: '/images/travel/ha-long-bay-vietnam.jpg', alt: 'Ha Long Bay, Vietnam' },
  { src: '/images/travel/rotorua-new-zealand.jpg', alt: 'Rotorua, New Zealand' },
  { src: '/images/travel/img-0988.jpg', alt: '' },
  { src: '/images/travel/sky-pond-colorado.jpg', alt: 'Sky Pond, Colorado' },
  { src: '/images/travel/chasm-lake-colorado.jpg', alt: 'Chasm Lake, Colorado' },
  { src: '/images/travel/monte-fitz-roy-chile.jpg', alt: 'Monte Fitz Roy, Chile' },
  { src: '/images/travel/maroon-bells-colorado.jpg', alt: 'Maroon Bells, Colorado' },
]

const column2Photos: Photo[] = [
  { src: '/images/travel/mayflower-gulch-colorado-2.jpg', alt: 'Mayflower Gulch, Colorado' },
  { src: '/images/travel/stresa-italy.jpg', alt: 'Stresa, Italy' },
  { src: '/images/travel/lisbon-portugal.jpg', alt: 'Lisbon, Portugal' },
  { src: '/images/travel/madeira-italy.jpg', alt: 'Madeira, Italy' },
  { src: '/images/travel/glacier-grey-chile.jpg', alt: 'Glacier Grey, Chile' },
  { src: '/images/travel/perito-moreno-glacier-chile-1.jpg', alt: 'Perito Moreno Glacier, Chile' },
  { src: '/images/travel/perito-moreno-glacier-chile-2.jpg', alt: 'Perito Moreno Glacier, Chile' },
]

const column3Photos: Photo[] = [
  { src: '/images/travel/blue-lagoon-iceland.jpg', alt: 'Blue Lagoon, Iceland' },
  { src: '/images/travel/ashcroft-wilderness-colorado.jpg', alt: 'Ashcroft Wilderness, Colorado' },
  { src: '/images/travel/rotorua-new-zealand-2.jpg', alt: 'Rotorua, New Zealand' },
  { src: '/images/travel/great-sand-dunes-colorado.jpg', alt: 'Great Sand Dunes National Park, Colorado' },
  { src: '/images/travel/madeira-portugal.jpg', alt: 'Madeira, Portugal' },
  { src: '/images/travel/torres-de-paine-chile.jpg', alt: 'Torres de Paine, Chile' },
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

