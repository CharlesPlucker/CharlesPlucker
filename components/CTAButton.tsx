import Link from 'next/link'
import styles from './CTAButton.module.css'

interface CTAButtonProps {
  text?: string
  href?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  theme?: 'light' | 'dark' | 'navigation'
  external?: boolean
  download?: boolean
  onClick?: () => void
  children?: React.ReactNode
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function CTAButton({
  text,
  href,
  className = '',
  variant = 'primary',
  theme = 'light',
  external = false,
  download = false,
  onClick,
  children,
  type = 'button',
  disabled = false,
}: CTAButtonProps) {
  // Build className with CSS module styles
  const baseClassName = `${styles.button} ${styles[variant]} ${styles[theme]} ${className}`.trim()

  // If no href, render as button
  if (!href) {
    return (
      <button
        onClick={onClick}
        className={baseClassName}
        type={type}
        disabled={disabled}
      >
        {children || text}
      </button>
    )
  }

  // Auto-detect external links
  const isExternal = external || href.startsWith('http')
  const isDownload = download || href.match(/\.(pdf|doc|docx)$/i)

  // External or download links use regular <a> tag
  if (isExternal || isDownload) {
    return (
      <a
        href={href}
        className={baseClassName}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        download={isDownload ? true : undefined}
        onClick={onClick}
      >
        {children || text}
      </a>
    )
  }

  // Internal links use Next.js Link
  return (
    <Link href={href} className={baseClassName} onClick={onClick}>
      {children || text}
    </Link>
  )
}
