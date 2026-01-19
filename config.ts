/**
 * Global configuration for the Charles Plucker portfolio site
 */

/**
 * Determines if the site is in development mode based on the URL
 * - Dev mode: localhost OR URLs with numeric prefix (e.g., 051932d1.charlesplucker.pages.dev)
 * - Prod mode: Clean domain (e.g., charlesplucker.me)
 */
function getIsDev(): boolean {
  // Server-side rendering check
  if (typeof window === 'undefined') {
    return false
  }

  const hostname = window.location.hostname
  
  // localhost is always dev
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return true
  }
  
  // Check if hostname starts with a number (Cloudflare Pages preview URLs)
  // e.g., 051932d1.charlesplucker.pages.dev
  const firstChar = hostname.charAt(0)
  if (/\d/.test(firstChar)) {
    return true
  }
  
  // Otherwise, it's production
  return false
}

export const config = {
  /**
   * Development mode flag
   * - true: Shows debug features (viewport display, grid overlays, etc.)
   * - false: Production mode with debug features hidden
   */
  get isDev(): boolean {
    return getIsDev()
  },
}

export default config

