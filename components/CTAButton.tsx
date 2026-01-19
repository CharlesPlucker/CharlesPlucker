import Link from 'next/link'

interface CTAButtonProps {
  text: string
  href: string
  className?: string
}

export default function CTAButton({ text, href, className = '' }: CTAButtonProps) {
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  )
}

