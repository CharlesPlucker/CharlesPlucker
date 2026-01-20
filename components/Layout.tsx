import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  navTheme?: 'homepage' | 'about' | 'contact'
}

export default function Layout({ children, navTheme }: LayoutProps) {
  return (
    <>
      <Navigation theme={navTheme} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
