import Link from 'next/link'
import styles from './CTAButton.module.css'

interface CTAButtonProps {
  text: string
  href: string
  className?: string
  variant?: 'primary' | 'secondary'
  external?: boolean
  download?: boolean
}

export default function CTAButton({ 
  text, 
  href, 
  className = '',
  variant = 'primary',
  external = false,
  download = false 
}: CTAButtonProps) {
  // Auto-detect external links
  const isExternal = external || href.startsWith('http')
  const isDownload = download || href.match(/\.(pdf|doc|docx)$/i)
  
  // Build className with CSS module styles
  const baseClassName = `${styles.button} ${styles[variant]} ${className}`.trim()
  
  // External or download links use regular <a> tag
  if (isExternal || isDownload) {
    return (
      <a 
        href={href} 
        className={baseClassName}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        download={isDownload ? true : undefined}
      >
        {text}
      </a>
    )
  }
  
  // Internal links use Next.js Link
  return (
    <Link href={href} className={baseClassName}>
      {text}
    </Link>
  )
}

