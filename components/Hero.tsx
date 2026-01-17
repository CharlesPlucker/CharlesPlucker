import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section className={styles.hero}>
      {/* Fullscreen Background Video */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>

      {/* Overlay Content */}
      <div className={styles.heroContent}>
        <div className={styles.textBox}>
          <h1>Skilled.</h1>
          <h1>Courageous.</h1>
          <h1>Value Driven.</h1>
        </div>
      </div>
    </section>
  )
}

