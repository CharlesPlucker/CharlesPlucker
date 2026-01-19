import { useState, useRef, useEffect } from 'react'
import styles from './BackgroundVideo.module.css'

export default function BackgroundVideo() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Set playback speed to slow motion (0.5 = half speed, 0.25 = quarter speed)
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className={styles.video}
      />
      <button onClick={togglePlayPause} className={styles.controlButton} aria-label={isPlaying ? 'Pause Background' : 'Play Background'}>
        {isPlaying ? 'Pause Background' : 'Play Background'}
      </button>
    </div>
  )
}

