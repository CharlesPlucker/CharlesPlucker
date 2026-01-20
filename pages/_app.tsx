import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  
  // Map routes to navigation themes
  const getNavTheme = (): 'homepage' | 'about' | 'contact' => {
    switch (router.pathname) {
      case '/':
        return 'homepage'
      case '/about':
        return 'about'
      case '/contact':
        return 'contact'
      default:
        return 'homepage'
    }
  }

  return (
    <Layout navTheme={getNavTheme()}>
      <Component {...pageProps} />
    </Layout>
  )
}
